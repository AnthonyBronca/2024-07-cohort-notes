# from pprint import pprint

# # Dictionaries


# student = {
#     "name": "spongebob",
#     "age": 32,
#     "friends": ("patrick", "sandy"),
#     "hobbies": ["flip patties", "jelly fishing", "annoy squidward"],
#     "ready": lambda phrase: f"{phrase}",
# }

# # INDEXING INTO A DICT
# # print(student["name"])
# print(student["ready"])

# # CREATE KEY VALUE PAIRS
# # key: house value: "pineapple"
# student["house"] = "pineapple"
# pprint(student)
# # DELETE A KEY VALUE PAIR
# # delete keyword (shorthand)  <object you want to delete from>[<key you want to delete>]
# del student["house"]


# pprint(student)


# CLASSES
# class Student:
#     def __init__(self, name):
#         self.name = name

#     # instance method
#     def say_name(self):
#         print(self.name)


# student = Student("anthony")
# # print(student.name)
# student.say_name()


# # CAR CLASS
# class Car:
#     def __init__(self, make, model, year):
#         self.make = make
#         self.model = model
#         self.year = year

#     def print_info(self):
#         print(f"The {self.make} {self.model} car was built in {self.year}")


# # Make an instance object
# bmw3 = Car("BMW", "m3", 2005)
# bmw3.print_info("awdawdwad")

# CLOSURE --- decorators

# lst1 = [1, 2, 3]
# lst2 = [1, 2, 3, 4, 5]


# # create a function that will add all the numbers in a list ONLY IF IT HAS 3 ITEMS
# # has_three should run the add_three IFFF the code was allowed


# def has_three(func):
#     def inner(lst):
#         if len(lst) > 3:
#             return "You messed up brooo"
#         else:
#             return func(lst)

#     return inner


# @has_three
# def add_three(lst):  # horizontal
#     sum = 0
#     for num in lst:
#         sum += num
#     return sum


# print(add_three(lst1))
# print(add_three(lst2))


# # Map over a list, multiply everything by 3, but only allow a list of 3 items


# @has_three
# def multiply_three(lst):
#     return [n * 3 for n in lst]


# print(multiply_three(lst1))
# print(multiply_three(lst2))


# def outter(num1):
#     def inner(num2):
#         return num1 + num2

#     return inner


# add_one = outter(1)

# print(add_one(5))
