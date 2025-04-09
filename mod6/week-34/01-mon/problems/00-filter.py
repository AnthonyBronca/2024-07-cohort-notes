"""
Write a function that filters this list to remove all numbers that are odd.
Use the built in Filter method. Use a Lambda function to solve this


Answer should look like: [2,4,6,8]


"""

# Your code here

# numbers.filter((num) => num % 2 === 0);

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

# --- way the problem wants you to solve it ----
# res = list(filter(lambda num: num % 2 == 0, numbers))
# print(res)

# --- list comprehension ----

res = [num for num in numbers if num % 2 == 0]
print(res)
