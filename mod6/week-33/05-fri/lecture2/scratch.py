# Tuples!
# do not touch this
# lst = [1, 2, 3]

# lst = (1, 2, 3)

# name = ("anthony",)

# print(name)
# print(lst[0])


# num = 5

# if num > 0:
#     print("hello world")
# else:
#     print("bye")


"""
We can use a list comprehension to make new arrays with one
line of logic. While these can be powerful, also take into
account readability.


TIP:

1. if before for -> replace the el (same size list)

2. if after for -> filter list (makes resulting list smaller)

3. use the same variable for el to reference the el in new list

"""
# List comprehensions

#                   el
# nums = [1, 2, 3, 4, 5]

# wierd_lst = [el if el % 2 == 0 else 5 for el in nums]
# print(wierd_lst)


# doubled_nums = [el * 2 for el in nums]

# filterd_nums = [el for el in nums if el == 2]


# return a new list, replace all the odd numbers with the number 5
# doubled_nums = []


# for n in nums:
#     doubled_nums.append(n * 2)


# print(doubled_nums)
# print(filterd_nums)


# lst1 = [1, 2, 3]
# lst2 = [4, 5, 6]

# combined_list = [x for x in lst1 + lst2]
# combined_list = [(x + y) for x in lst1 for y in lst2]
# print(combined_list)
