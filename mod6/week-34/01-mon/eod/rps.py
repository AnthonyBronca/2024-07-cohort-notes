from random import choice


# ROCK PAPER SCISSORS
# Game logic
# Rock > scissors
# Scissors > paper
# paper > rock


# 1. Grab the player choice (rock, paper, scissors) ---- done
#     - handle edge case for casing (lower case everything)
# 2. Grab the AI choice (rock, paper scissors) --- done
#    - we can use the 'choice' import to help us randomly pick from a list
# 3. Once we have the player choice and AI choice, we can handle the win condition ---
#    - Make a leaderboard to track wins, losses, and ties
#    - If the player wins -> leaderboard wins goes up by 1
#    - if the ai wins -> leaderboard losses goes up by 1
#    - if the player and ai have the SAME choice -> the ties goes up by 1
# 4. After each game cycle, ask the player if they would like to play again (y/n)
#    - If player inputs 'y' -> play again
#    - if player inputs 'n' -> return out of function
#    - if player types anything else, ask them again


#              W | L | T
leaderboard = [0, 0, 0]


def player_choice():
    valid_choices = ["rock", "paper", "scissors"]

    player_selection = input("Rock, Paper, Scissors?          ")
    if player_selection.lower() in valid_choices:
        return player_selection
    else:
        print("That was not a valid choice, please try again")
        return player_choice()


def ai_choice():
    return choice(["rock", "paper", "scissors"])


def check_win(player_selection, ai_selection):
    win_lose = {
        #        Win         | Lose
        "rock": ("scissors", "paper"),
        "paper": ("rock", "scissors"),
        "scissors": ("paper", "rock"),
    }

    print(f"You chose: {player_selection}, The AI chose: {ai_selection}...")

    if win_lose[f"{player_selection}"][0] == ai_selection:
        print("You win!")
        leaderboard[0] += 1
    elif win_lose[f"{player_selection}"][1] == ai_selection:
        print("You lose")
        leaderboard[1] += 1
    else:
        print("you tied")
        leaderboard[2] += 1

    print(
        f"Wins: {leaderboard[0]}   |  Losses: {leaderboard[1]}   |   Ties: {leaderboard[2]}"
    )
    play_again()


def play_again():
    selection = input("Would you like to play again? (y/n):        ")
    if selection.lower() == "y":
        start_game()
    elif selection.lower() == "n":
        return
    else:
        print("You did not enter a valid option, please try again....")
        return play_again()


def start_game():
    player_selection = player_choice()
    ai_selection = ai_choice()
    check_win(player_selection, ai_selection)


start_game()
