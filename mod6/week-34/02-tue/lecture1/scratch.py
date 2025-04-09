from pprint import pprint

# Dictionaries


# student = {
#     "name": "Spongebob",
#     "age": 32,
#     "ready": lambda statement: print(f"{statement}"),
#     "friends": ("patrick", "sandy"),
#     "hobbies": ["making patties", "jelly fishing", "annoying squidward"],
#     "pet": {"name": "gary", "hobbies": ["snail stuff"]},
# }

# CREATE A NEW KEY VALUE PAIR
# dictionary we want to add to["key you want to add"] = "value you want to add"
# student["house_shape"] = "pineapple"


# pprint(student)
# # TO DELETE A KEY VALUE PAIR -> 'del' keyword, then the dictionary[key] you want to delete
# del student["house_shape"]

# pprint(student)


# keying into a dictionaries
# print(student["pet"]["hobbies"][0])

# print("snail stuff")

# print(student["ready"]("Iam ready"))


# CLASSES


# class Student:
#     def __init__(self, name):
#         self.name = name

#     # instance method
#     def say_same(self):
#         print(self.name)


# oscar = Student("oscar")

# print(oscar)

# oscar.say_same()


# Class car example


# class Car:
#     # constructor - aka the functiont that runs on initialization
#     def __init__(self, make, model, year):
#         self.make = make
#         self.model = model
#         self.year = year

#     # instance method that will print our string
#     def print_car_info(self):
#         print(f"This car is a {self.make} {self.model} made in {self.year}")


# bmw1 = Car("bmw", "m3", 2004)

# print(bmw1)

# bmw1.print_car_info()


# CLOSURES AND DECORATORS


# def outter(num):
#     def inner(num2):
#         return num + num2

#     return inner

# # decorater -> replaces
# adder_one = outter(1)

# print(adder_one(5))


lst1 = [1, 2, 3]
lst2 = [1, 2, 3, 4, 5]


# make a function that will add only 3 items together


def has_three(func):
    def inner(lst):
        if len(lst) > 3:
            return "What are you doing bro???"
        else:
            return func(lst)

    return inner


@has_three
def add_three(lst):
    sum = 0
    for n in lst:
        sum += n
    return sum


# # map over the list and triple every element
@has_three
def multiply_three(lst):
    return [n * 3 for n in lst]


# print(add_three(lst1))
# print(add_three(lst2))


print(multiply_three(lst1))
print(multiply_three(lst2))
