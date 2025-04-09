# Imports - Make sure to install (pip or pipenv) pygame
import pygame
import random


# Constants
SCREEN_WIDTH, SCREEN_HEIGHT = (
    400,
    400,
)  # Size 20 snake/grid work good with window size of 400x400
GRID_SIZE = 20
SNAKE_SIZE = 20
FPS = 12  # Lower -> slower. Higher -> faster


# Colors -   R,G,B
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
GREEN = (0, 255, 0)
RED = (255, 0, 0)

# Directions - x y
UP = (0, -1)
DOWN = (0, 1)
LEFT = (-1, 0)
RIGHT = (1, 0)

# Classes

# Snake Class


class Snake:
    def __init__(self):
        # Where is the going to start -> middle
        self.positions = [(SCREEN_WIDTH // 2, SCREEN_HEIGHT // 2)]
        self.direction = random.choice([UP, DOWN, LEFT, RIGHT])
        self.score = 0

    def get_head(self):
        return self.positions[0]

    def update(self):
        cur = self.get_head()
        x, y = self.direction
        new = (
            ((cur[0] + (x * SNAKE_SIZE)) % SCREEN_WIDTH),
            (cur[1] + (y * SNAKE_SIZE)) % SCREEN_HEIGHT,
        )
        if len(self.positions) > 2 and new in self.positions[2:]:
            self.reset()
        else:
            self.positions.insert(0, new)
            if len(self.positions) > self.score + 1:
                self.positions.pop()

    def reset(self):
        self.positions = [(SCREEN_WIDTH // 2, SCREEN_HEIGHT // 2)]
        self.direction = random.choice([UP, DOWN, LEFT, RIGHT])
        self.score = 0

    def change_direction(self, direction):
        if (
            direction[0] * -1 != self.direction[0]
            or direction[1] * -1 != self.direction[1]
        ):
            self.direction = direction

    def get_body(self):
        return self.positions[1:]


# Food Class
class Food:
    def __init__(self):
        self.position = (0, 0)
        self.color = RED
        self.randomize_positions()

    def randomize_positions(self):
        self.position = (
            random.randint(0, SCREEN_WIDTH - SNAKE_SIZE) // SNAKE_SIZE * SNAKE_SIZE,
            random.randint(0, SCREEN_HEIGHT - SNAKE_SIZE) // SNAKE_SIZE * SNAKE_SIZE,
        )

    def draw(self, surface):
        pygame.draw.rect(
            surface,
            self.color,
            pygame.Rect(self.position[0], self.position[1], SNAKE_SIZE, SNAKE_SIZE),
        )


# Functions


# Make grid
def draw_grid(surface):
    for x in range(0, SCREEN_WIDTH, GRID_SIZE):
        pygame.draw.line(surface, BLACK, (x, 0), (x, SCREEN_HEIGHT))
    for y in range(0, SCREEN_HEIGHT, GRID_SIZE):
        pygame.draw.line(surface, BLACK, (0, y), (SCREEN_WIDTH, y))


# Game start condition
def main():
    pygame.init()
    clock = pygame.time.Clock()
    screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
    pygame.display.set_caption("Snake Game")

    # Add snake and food here
    snake = Snake()
    food = Food()

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_UP:
                    snake.change_direction(UP)
                elif event.key == pygame.K_DOWN:
                    snake.change_direction(DOWN)
                elif event.key == pygame.K_RIGHT:
                    snake.change_direction(RIGHT)
                elif event.key == pygame.K_LEFT:
                    snake.change_direction(LEFT)

        # Refresh the snake drawing after each click to mouse
        snake.update()

        if snake.get_head() == food.position:
            snake.score += 1
            food.randomize_positions()

        # Added to add black screen to anywhere our snake has moved from
        screen.fill(BLACK)

        # Draw te snakes's body
        snake_body = snake.get_body()
        # The body of our snake as many rectangles
        for pos in snake_body:
            pygame.draw.rect(
                screen, GREEN, pygame.Rect(pos[0], pos[1], SNAKE_SIZE, SNAKE_SIZE)
            )
        # Draw the snake's head
        snake_head = snake.get_head()
        # Draw a rectanble that is green (The head of our snake)
        pygame.draw.rect(
            screen,
            GREEN,
            pygame.Rect(snake_head[0], snake_head[1], SNAKE_SIZE, SNAKE_SIZE),
        )

        # Draw the food of our game
        food.draw(screen)
        # Game items, keep this at the bottom
        pygame.display.update()
        clock.tick(FPS)


# How we initialize our function. __name__ should always be __main__
if __name__ == "__main__":
    main()
