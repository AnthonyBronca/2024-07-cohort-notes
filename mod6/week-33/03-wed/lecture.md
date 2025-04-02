## Python Introduction

### Useful Links
- [Python Documentation](https://docs.python.org/3/)
- [PEP 8 Style Guide](https://peps.python.org/pep-0008/)


## Key differences between JavaScript and Python3
- Whitespace-aware
    - Python prefers indentations to be 4 spaces long
    - When you create code blocks, you must indent the next line to align it properly within the code block
    - Nested code must be properly indented.
    ```python
    # Whitespace example
    # Incorrect!
    if(True):
    print('Hello World')

    # Correct!
    if(True):
        print('Hello World')
    ```
- No semi-colons
    - One statement per line
    - Semi-colons are necessary if you have multiple statements on one line (this is considered bad form)


- Declaring functions
    - Since python is whitespace-aware you must indent the next line whenever a colon ends a line. Colons create new code blocks in Python
    ```python
    def doAThing(arg1, arg2):
        print(arg1, arg2)
    ```




## Boolean Logic


In Python, the Boolean values `True` and `False` are represented in title case.

Equality comparison operators (`==`, `!=`, `<`, `>`, `^`, etc.) return Boolean values.

---

### Truthiness & Falsiness

The concept of "truthiness" refers to values that *evaluate* to `True` when typecast as a Boolean.

"Truthy" values however are not necessarily *equal* to `True`.

---

### Falsiness

Falsey values in Python are:
- 0 (for any number type)
    - `0`, `0.0`, `0j`
- any empty collection
    - `""`, `[]`, `set()`, `{}`, `range(0)`
- `False`
- `None`

All other values are truthy!

---

### Logic Operators
We use the keywords `and`, `or`, and `not` in Python instead of `&&`, `||`, and `!`
```python=
print(True and False)      # False
print(True or False)       # True
print(True and not False)  # True
```

We can group conditions with parentheses.

Python will short-circuit on a logical statement if it can already determine the outcome:

```python=
False and print("not printed")  # does not print
```

---

### If statements

If statement structure resembles Javascript.

In Python, the if statement keywords are:
- `if`
- `elif`
- `else`

```python=
if i < 4:
    print("i is less than 4")
elif i == 4:
    print("i is equal to 4")
else:
    print("i is neither less than nor equal to 4")
```
---

### Boolean Practices (15 min)
Using Not Or - 2 min
Length of List - 2 min
Has Remainder - 2 min
Xor - 2 min
DeMorgan's Law - Challenge - 10 min


---
---


## Strings

---

Just like JavaScript, strings in Python are immutable collections of characters.

- In Python, single quotes (`'`) and double quotes (`"`) are interchangeable
- Using three quotes in a row (either `"""` or `'''`) will open a multiline string
```python=
my_long_string = '''
you can make
longer strings over multiple lines
individual quote characters ' " won't end the string
'''
```

---

### String Interpolation

In Python version 3.6, `f` strings were introduced as the preferred method of string interpolation.

String formatting with `f` strings:
```python=
word = "hi"
num = 6
print(f"{word} and {num}")
```

Similar to interpolated strings in JavaScript:
```javascript=
let word = "hi"
let num = 6
console.log(`${word} and ${num}`)
```

You can read about more [traditional methods of string interpolation in the PEP 498 documentation](https://peps.python.org/pep-0498/)!

---

### String Arithmetic

```python=
a = "a"
b = "b"
an = "an"

print(b + an)
print(b + a*7)
print(b + an*2 + a)

print("$1" + ",000"*3)
```

---

### String indexing

- Use square brackets (`[]`)
- Index starts at 0 (like in JavaScript)
```python=
print("Spaghetti"[0])  # S
print("Spaghetti"[4])  # h
```

- Can use a negative index
```python=
print("Spaghetti"[-1])
print("Spaghetti"[-4])
```

- Can index a range with ``[start:stop]``. The `stop` value is excluded from the resulting range!
```python=
# indexing with ranges
print("Spaghetti"[1:4])   # pag
print("Spaghetti"[4:-1])  # hett
```

---

### Built-in string methods

There are many built-in methods on the string data type in Python:
- `.index()`: returns the first index where a substring is found
- `.count()`: returns the number of times a substring is found
- `.split()`: returns a list of substrings, split on a character or substring
- `.join()`: use a given string to join all the substrings from a list
- `.upper()`, `.lower()`, and `.title()`: transform a string to the specified case

And many more!

---

### String Practices (35 min)
Indexing Strings - 2 min
String Immutability - 2 min
Index Of - 2 min
Is The Last Character N? - 3 min
Burrrrrp - 5 min
Last Three - 5 min
Is Palindrome - 5 min
Recursive String - 5 min


---

## Numbers

---

### Number Data Types
We'll mostly interact with `int` and `float` types
- `int` (integers): counting numbers with no decimal points
- `float` (floating point numbers): numbers with decimal places.
    - They may occasionally have rounding errors, just like JavaScript
    - see [documentation on floating point arithmetic](https://docs.python.org/3/tutorial/floatingpoint.html)
- `complex`: complex numbers

---

| Operator | Meaning          | Example                |
| :------: | :--------------- | :--------------------- |
|   `+`    | addition         | `print(10+4)  # 14`    |
|   `-`    | subtraction      | `print(10-4)  # 6`     |
|   `*`    | multiplication   | `print(10*4)  # 40`    |
|   `/`    | division         | `print(10/4)  # 2.25`  |
|   `%`    | modulo           | `print(10%4)  # 2`     |
|   `**`   | exponent         | `print(10**4) # 10000` |
|   `//`   | integer division | `print(10//4) # 2`     |


---

### Assignment operators
We can use assignment operators (like in JavaScript) to concisely update values
```python=
a = 2
a += 3
print(a)  # 5
a *= 2
print(a)  # 10
```
But no more `++` or `--`
```python=
a++       # SyntaxError: invalid syntax
```

---

### Number Practices (35 min)
Integer Division - 2 min
Total Digits - 5 min
Perfect Square - 2 min
Recursive Fibonacci - 10 min
Recursive Countdown - 10 min
Recursive Is Prime - Challenge - 10 min


---
