"""
Write a function that returns True if all the numbers in the list are odd
Use the built in all method.



Answer should look like: False

"""

numbers = [1, 2, 3, 4, 5]


def all_odd(lst):
    return all(map(lambda num: num % 2 != 0, lst))


print(all_odd(numbers))
