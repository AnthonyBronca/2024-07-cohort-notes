"""
Write a function that gets the multiple of 5 for each el in this list
Use the built in map method. Use a Lambda function to solve this


Answer should look like: [5, 10, 15, 20, 25]

"""

# Your code here

numbers = [1, 2, 3, 4, 5]


def multiply_five(lst):
    return list(map(lambda num: num * 5, lst))
    # return [num * 5 for num in lst]


print(multiply_five(numbers))
