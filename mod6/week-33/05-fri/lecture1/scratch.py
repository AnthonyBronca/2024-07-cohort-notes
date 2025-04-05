# Tuples
# lst = [2, 4, 5]

# lst.append(6)


# tpl = (2, 4, 5)


# print(tpl[1])
"""
We can use a list comprehension to make new arrays with one
line of logic. While these can be powerful, also take into
account readability.


TIP:

1. if before for -> replace the el (same size list)

2. if after for -> filter list (makes resulting list smaller)

3. use the same variable for el to reference the el in new list

"""
#
#                          el
# my_num_list = [1, 2, 3, 4, 5]

# List comprehension

# doubled_list = [el * 2 for el in my_num_list]

#            keep el -> if el is even
#                            if not even, inject 5
# weird_list = [el * 2 if el % 2 == 0 else 5 for el in my_num_list]
# print(weird_list)
# print(my_num_list)
# [5, 2, 5, 4, 5]


# print(weird_list)

# weird list -> take all the odd numbers and replace them with 5


# print(doubled_list)

# two_list = [el for el in my_num_list if el == 2]

# print(two_list)


# --- FOR LOOP VERSION -----
# doubled_lst = []

# for num in my_num_list:
#     doubled_lst.append(num * 2)

# print(doubled_lst)

lst1 = [1, 2, 3]
lst2 = [4, 5, 6]

print([x for x in lst1 + lst2])


# combined_list = [...el1 ...el2 for el1 in lst1 for el2 in lst2]

# print(combined_list)
