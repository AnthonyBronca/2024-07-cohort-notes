## Today's Topics:
Tuples
Ranges
List Comprehensions

---

### Tuples

Docs link:
https://docs.python.org/3.9/library/stdtypes.html?highlight=tuple#tuple


---

Tuples are an ordered, immutable collection type.

They are defined using parentheses `()`, with values separated by a comma.



```python=
a = (1, 2, 3, 4, 5, 6, 7, 8, 9)
b = ('a', 'b', 'c', 'd', 'e')
c = 10, 20, 30

print(a)  # (1, 2, 3, 4, 5, 6, 7, 8, 9)
print(b)  # ('a', 'b', 'c', 'd', 'e')
print(c)  # (10, 20, 30)
```

---

### Tuples are immutable

- You cannot append, remove, or sort the tuple in place.
- We can concatenate tuples together, but the result will be an entirely new tuple

```python=
tup = ("red", "blue")
tup = ("yellow", "green")  # no error, this works
print(tup)                 # ("yellow", "green")
tup += ("red", "blue")    # no error, this works
print(tup)                 # ("yellow", "green", "red", "blue")
```

---

### Empty or "Singleton" Tuples
- An empty tuple must be defined using parentheses ()
```python=
empty = ()
```
- A tuple with a single value must have a trailing comma
```python=
single = (1,)
single = 1,
```


---

### Sorting

The `sorted()` function works on tuples, just like lists. This will return a list by default.

```python=
fruits = ("banana", "apple", "kiwi")
print(sorted(fruits))  # ['apple', 'banana', 'kiwi']
sorted_fruits = tuple(sorted(fruits))
print(sorted_fruits)
print(fruits)
```

---

### Tuple Practices (35 min)
Explore the Tuple - 5 min
Sort Tuple - 3 min
Add Value - 3 min
Concat Tuple - 3 min
Big Words - 3 min
Recursive Add - 5 min
Index Sort - 5 min
Fill Tuple - 5 min
Bubble Sum - Challenge - 20 min
Tuple With Same Product - Challenge - 20 min


---

## Ranges

Docs link:
https://docs.python.org/3.9/library/stdtypes.html?highlight=range#range

---

### The `range` object

- An immutable sequence of numbers in order
- Arguments:
  - start (default 0)
  - stop (required)
  - step (default 1)
- Can go in forward or reverse order
- Range is exclusive(the stop argument is not included in the returned list)

---

### Declaring Basic Ranges

```python=
numbers_range = range(10)
print(list(numbers_range))

reversed = range(51, 5, -1)
print(list(reversed))
```

---

### For loops and the `range` object

`range` gives us access to both the current element and its index in the list

```python=
items = [1, 2, 3]

for i in range(len(items)):
    print(i, items[i])

for i in range(1, 10, 2):
    print(i)
```

---


---

### Range Practices
Explore the Range - 5 min
Range Loops - 2 min
Factorial - 5 min
Check Nested Arrays - 10 min
Maximum Difference - 5 min
Find The Smallest Number In A List - 5 min
Range List - Challenge - 5 min
Range Sum of BST - Challenge - 10 min


---


## Comprehensions

---

### Comprehensions

Comprehensions are composed of an expression followed by a `for...in` statement, followed by an optional `if` clause. They can be used to create new lists (or other mutable sequence types).


```python=
my_list = [expression for member in iterable]
# with optional if statement
my_list = [expression for member in iterable if condition]
```

---

### Copying a list
With a `for` loop:
```python=
my_list = [1, "2", "three", True, None]
my_list_copy = []
#     for loop
#    ----------
# /               \
for item in my_list:
    my_list_copy.append(item)
#                        |
#                       var
print(my_list_copy)  # [1, '2', 'three', True, None]
```

---

### Copying a list

With a list comprehension:
```python=
my_list = [1, "2", "three", True, None]
#              var         for loop
#               |        -------------
#               |      /              \
my_list_copy = [item for item in my_list]

print(my_list_copy)  # [1, '2', 'three', True, None]
```

---

### List Comprehensions and Advanced Lists
Vowels - 3 min
Third Power - 3 min
Gas Prices - 3 min
Fizz Buzz - 3 min
Multiply List - 5 min
Transpose Matrix - 5 min
Merge Two Sorted Lists - Challenge - 10 min

---

### Long Projects
Bonus: Track The Robot
