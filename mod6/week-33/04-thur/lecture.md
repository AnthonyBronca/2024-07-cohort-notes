## Assigning Variables
---
- No variable declaration keywords such as let, const, or var
- Assigning a value automatically declares a variable
- Can chain variable assignment together if you are assigning the same value to multiple variables

```python
count = max = min = 0
print(count)
print(max)
print(min)
```

---

## Python Datatypes

---
 - Integer numeric datatype without decimals
    - num = 1, num = int(1), isinstance(<variable_your_checking>, str)
 - Float numeric datatype with decimals
    - num = 1.2, num = float(1.2), isinstance(<variable_your_checking>, float)
 - String is a collection of alphabetic letters, words or other characters.
     - string = "string", string = 'string', isinstance(<variable_your_checking>, str) -- immutable
 - List (JS equivelant Array) is an ordered and changeable collection of data objects
    - lst = ['h', 'i'], lst = list('hi'), isinstance(<variable_your_checking>, list) -- mutable
 - Dictionary (Js equivelant Object) is a list of comma-separated key-value pairs wrapped around curly braces ({}).
    - dictionary = {},  dict(key = "value"), isinstance(<variable_your_checking>, dict) -- mutable
 - Tuple is an ordered and unchangeable collection of data objects
    - tup = ('h', 'i'), tup = tuple('hi), isinstance(<variable_your_checking>, tuple) -- immutable
 - Set (Js equivelant Set) an unordered and changeable collection of unique data objects
    - my_set = set('hi'), my_set.add('bye), my_set.discard('bye'), isinstance(<variable_your_checking>, set) -- mutable

---

## The None Type

---
- Python uses the None type instead of null
- None represents an object of type NoneType, this means you can use NoneType in any place you would use another object
```python
my_var = None
print(my_var is None)
```
---

## Operators

---

### Identity vs. Equality

In Python, we have `is` to compare identity and `==` to compare equality.

Both are useful, just for different purposes.

---

### Equality Comparison

- In JavaScript, `===` is preferred because it does strict equality comparison (value and type)
- In Python, equality is not about typechecking, it's just about whether the values are the same
```python=
my_int = 4
my_float = 4.0

# check if the values are the same
print(my_int == my_float)  # True

# check if the values are the same and check type
print(my_int == my_float and isinstance(my_int, float))  # False
```

---

### Equality Comparison

#### When to use `==` (equality):
- Most of the time!
- Whenever you are comparing two values to see if they are the same
    - strings, numbers, lists, dictionaries, etc
```javascript=
// javascript version
console.log([1, 2, 3] === [1, 2, 3])
// false
```
```python=
# python version
print([1, 2, 3] == [1, 2, 3])
# True
```

---

### Equality Comparison

Equality comparison operators (`==`, `!=`, `<`, `>`, `^`, etc.) return Boolean values.

---

### Identity Comparison

The `is` operator in Python compares identity.

The identity of an object is an integer guaranteed to be unique and constant for an object during its lifetime (i.e. while the program is running). It is the object's memory address!

We can use the built-in `id()` function to get the identity of an object.

```python=
a = None
print(id(a))
```

---

#### The `is` operator

What if we compared two lists of the same value with `is`?
```python=
print([1, 2, 3] is [1, 2, 3])
# False
```

While these lists have the same *value*, they are two distinct objects in memory with different identities.

---

### When to use `is` (identity) [1/3]:
1. For checking if a value is not `None`
```python=
a = []

if a is not None:
    print("a is not None")  # prints "a is not None"
else:
    print("a is None")

```

---

### When to use `is` (identity) [2/3]:

2. For checking is `True` / `False`
```python=
a = 1
print(a == True)  # don't do this, in Python 1 is equal in value to True
print(a is True)
```

---

### When to use `is` (identity) [3/3]:
3. For checking whether variables reference the same object in memory
```python=
print([] == [])  # True
print([] is [])  # False
a = []
b = a
print(a is b)    # True
b.append(5)
print(a)         # [5]
```

---

### Interned memory
For many small, immutable (unchangeable) data types, Python stores only one distinct copy in memory.

This is a space optimization mechanism called *interning*.

```python=
# python version
a = 5
b = 5
print(a is b) # True

c = "hey"
d = "hey"
print(c is d) # True
```

Due to interning, these variables can share the same identity if they have equal value.

---

### Operators Practices
First Before Second - 10 min
Equality in Python - 2 min
Comparison in Python - 2 min
Largest Perimeter Triangle - Challenge - 15 min


---

---

## Statements

---

### While loops

While loops also follow a very similar structure to JavaScript.

```python=
i = 0
while i < 5:
    print(f"{i}. Hello, world.")
    i += 1

print("You've printed 5 times. Goodbye.")
```

---

### Loop keywords: `continue` and `break`

- `continue`: goes to the next iteration of the loop
- `break`: exits out of the loop completely
```python=
i = 0
while True:
    print(f"{i}. Hello, world.")
    if i < 4:
        i += 1
        continue
    print("You've printed 5 times. Goodbye.")
    break
```

---

### For loops

- `for` keyword to start the loop
- `in` iterates over each element in the sequence
- We do not need to define an iterator variable!

```python=
items = ['a', 'b', 'c']

for item in items:
    print(item)
```

---

### The `in` keyword

The `in` keyword can be used on its own to lookup a value in a collection:

```python=
my_nums = [1, 2, 3]

print(4 in my_nums) # False
```

---

### Try/Except statements

#### Better to ask forgiveness than permission

A pythonic principle & fundamental part of Python control flow

---

### Control flow with `try/except` blocks

Keywords:
- `try`: run this code until an exception occurs
- `except`: run this code when an exception occurs
- `else`: run this code only if no exception occurs
- `finally`: run this code no matter what


---

### Control flow with `try/except` blocks

```python=
num = 0
try:
    print("Trying now...")
    print(4/num)
except ZeroDivisionError:
    print("oops i tried to divide by zero!")
finally:
    print("this happens no matter what")
```


---

### Control flow with `try/except` blocks

Avoid using a bare `except`— you should specify the type of error in almost every case.

Different exceptions should be handled differently because they indicate different types of issues.

A bare `except` can even prevent a user from exiting a program:
```python=
while True:
    try:
        num = int(input("say a number "))
        print(num)
        break
    except:
        print("try again")
```

---

### Statements Practices
Try/Except - 2 min
Print List - 2 min
Check Membership - 2 min
Double That Penny - 5 min
Valid Hex Code - 10 min
Split On Capitals - 10 min
Count Characters In String - 5 min
Vowel Count - 2 min
Add Upper - 2 min

---


## Today's Topics:
Functions
Lambda Functions
Lists

---

## Functions

---

### Python Functions
- We use the `def` keyword to define a function followed by:
    - The name of the function
    - The parameters that it accepts
    - A new block identified as `:` and indent the next line
```python=
def is_even(num):
    return num % 2 == 0

print(is_even(5)) # False
print(is_even(2)) # True
```

---

### Lambda Functions

- For simple one-line functions, we can also use a lambda, which takes in:
    -  Parameters on left side of `:`
    -  Returns the value resulting from the right side of the `:`
-  They return automatically and cannot contain an explicit `return` keyword
-  Lambda functions are meant to be anonymous, one-liner functions


```python=
is_even = lambda num: num % 2 == 0

print(is_even(8)) # True
```

---

### Python Scoping

- Scoping is done at the function (and class) level
    - In JS, we had block scopes
    - In PY, our `if` statements do not create new scopes

```python=
def make_a_five():
    y = 5
    return y

if True:
    x = 10


print(x) #10
# `x` was created in the global scope

print(y) # NameError: name 'y' is not defined
# `y` was created in the scope of the make_a_five function
```

---

### Docstrings

A docstring is a string literal that is used to document a function, class, or module.

```python=
def my_function():
    """
    This is my function. It doesn't do
    anything special. It's just a
    function.
    """
    return 1
```

We can access docstrings in two ways:
```python=
help(my_function)
print(my_function.__doc__)
```

### Adding n amount of Positional args
- In javascript we are able to use the rest operator (...) to add positional arguments to a function and store them in an array.
- We have something similar we can use is python. with the (*) operator

```
# js example
function add(a, b, ...args) {
  let total = a + b;
  console.log('extra args', args, Array.isArray(args))
  for (let n of args) {
    total += n;
  }
  return total;
}


add(2, 3, 4, 5) // returns 14

# python example
# by convention this i called args
def add(a, b, *args):
    total = a + b;
    print('extra args', args)
    for n in args:
        total += n
    return total

add(2, 3, 4, 5) # Returns 14
```

### Keyword arguments
- Unlike JavaScript, Python has the built-in ability to specify arguments by name without resorting to destructuring. You can just write the name of the parameter and an equal sign before the value you pass as a parameter. By specifying the names of the arguments, you can provide them in any order.

```
def greeting(name, saying="Hello"):
    print(saying, name)
greeting(saying = 'I'll be back', name = "Arnold")
```


---

### Function Practices
Fun With Functions - 5 min
Function Arguments - 2 min
Using Lambdas - 2 min
Add Binary Leet Code Challenge - 5 min
Merge Helper - Challenge - 20 min


---

## Lists

---


Lists are mutable, ordered collections (like arrays in JavaScript). Use square brackets to make lists.

```python=
empty = []
print(empty)   # []
```

Values are separated by commas.
```python=
fruits = ["banana", "apple", "kiwi"]
print(fruits)  # ["banana", "apple", "kiwi"]
```


---

### Indexing with lists

Indexing with lists uses the same syntax as indexing with strings:

- Single index: `list_name[single_index]`
- Index range: `list_name[start:stop:step]`


---

### List Practices
Explore The List - 5 min
Return First Element Of A List - 2 min
Sum The Elements Of A List - 5 min
First And Last Entries - 1 min
First Last List - 5 min
Insertion Sort - 20 min
All Occurrences Of A Value In A List - 5 min
Find Target Indices Leet Code - 10 min
Matrix Diagonal Sum - Leet Code Challenge - 10 min


---
