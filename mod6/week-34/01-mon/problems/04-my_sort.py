"""
Write a function called my_sort that takes in a list of tuples. It should
sort the list, out of place and return a new list, where all items are
sorted based on the last element of a tuple

HINT: you may need to use the 'key' key word

"""

lst1 = [(1, 2, 3), (3, 2, 1), (2, 2, 2)]
lst2 = [("a", "b", "c"), ("d", "b"), ("a",)]


def my_sort(lst):
    return sorted(lst, key=lambda tup: tup[-1])


# print(my_sort(lst1))  # [(3,2,1), (2,2,2), (1,2,3)]
print(my_sort(lst2))  # [("a"), ("d", "b"), ("a", "b", "c")]


"""

const {address, city, name, zip} = req.body


[1,2,5,2,3].sort((a,b) => {
    return a - b

})

"""
