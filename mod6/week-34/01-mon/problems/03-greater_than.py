"""
Write a function that returns True if any of the numbers in the list are greater than 20
Use the built in any method.

Answer should look like: True

"""

numbers = [5, 10, 15, 20, 25]


def any_greater_20(lst):
    return any(map(lambda num: num > 20, numbers))


print(any_greater_20(numbers))
