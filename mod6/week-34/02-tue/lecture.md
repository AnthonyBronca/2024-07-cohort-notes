## Today's Topics:
- Dictionaries
- Sets

---
## Dictionaries

Docs link:
https://docs.python.org/3.9/library/stdtypes.html?highlight=tuple#dict

---

- Dictionaries are ordered and mutable.
- They consist of pairs of keys and values.
    - The keys must be "hashable" (immutable) values
    - e.g. keys can be strings, numbers, tuples, booleans, but not lists or dictionaries
- Dictionaries use curly braces, similar to JavaScript objects, although keys do not have to be strings.
    - but if the keys _are_ strings, they must use quotes, unlike JS

---

### What's Hashable?

An object is hashable if it has a hash value that does not change during its lifetime.

In Python, all immutable objects are hashable. We know that accessing that object by its hash value will always give us the same object with the same value.

While dictionaries *themselves* and each *value* within them are mutable, the *keys* must be hashable. This is because Python internally accesses a dictionary element via the hash value of the key.

While we cannot index into a dictionary, hashable keys allow for the same O(1) lookup time.

---

### Declaring Dictionaries
```python=
a = {'one':1, 'two':2, 'three':3}
```

---

### Dictionary lookup

Unlike JS, in Python we do not use dot notation to get values from a dictionary, we need to use bracket notation!

```python=
my_dict = {'one':1, 'two':2, 'three':3}
print(my_dict.one) #AttributeError: 'dict' object has no attribute 'one'
print(my_dict['one']) #1
print(my_dict['new']) # KeyError: 'new'

print(my_dict.get('one', None))
print(my_dict.get('banana', "Nope!"))
```

---

### Adding, Updating, Deleting Data in Dictionaries

- `del` keyword to delete a key/value pair
- `[]` to add or update a key/value pair
```python=
my_dict = {
    "word": "cooool",
    1: "one",
    False: 42,
    ("tuple", "keys"): ["lists", "can", "be", "values", "not", "keys"],
    None: {"key": "value"}
}

my_dict[1] = "two" # Updates value
print(my_dict[1]) # "two"
my_dict["new_key"] = "new_value" #Adds key/value
del my_dict["word"] # Deletes key/value
print(my_dict) # I promise, all the changes are there!
```

### Dictionary Comprehensions

Similar to list comprehensions, but produce dictionaries

```python
squares = {x: x*x for x in (2, 3, 4)}
```

### Practical Applications for Dictionaries

Data storage, JSON-like data representation, caching/memoization.

---

### Dictionary Practices
Explore The Dictionary
Does The Dictionary Have A Key?
Is The Dictionary Empty?
Dictionaries vs Objects
Create Name Tag
Concatenate Dictionaries
Merge Two Lists
Majority Character - Challenge
Jewels and Stones - Challenge
Two Sum Revisited - Challenge


---

## Sets

Docs link:
https://docs.python.org/3.9/library/stdtypes.html?highlight=set#set

---

Sets are mutable, unordered collections where all elements are unique.

Sets use curly braces, like a dictionary. You can create an empty set with `set()`.

While sets can be mutated, the individual elements must be immutable types.

```python=
not_an_empty_set = {}
print(type(not_an_empty_set))

empty_set = set()
print(type(empty_set))

set_with_elements = {1, "hello", None}
print(set_with_elements)

ones = {1, 1, 1}
print(ones)
```

---

### Creating sets from other iterables

You can use the `set()` function to create new sets from other iterable types.

```python=
my_list = [1, 2, 3, 4, 5, 5]
print(set(my_list))    # {1, 2, 3, 4, 5}
my_string = "hello"
print(set(my_string))  # {'l', 'h', 'o', 'e'}
my_tuple = (1, 1, 1)
print(set(my_tuple))   # {1}
my_dict = {"hello": "value", "goodbye": "value"}
print(set(my_dict))    # {'goodbye', 'hello'}
```
---
### Set Comprehensions

```python
evens = {x for x in range(10) if x % 2 == 0}
```
Similar to list comprehensions, but produce sets.

---

### Set operations

The `set` data type allows for many operations, including union (`|`), intersection (`&`), difference (`-`), and symmetric difference (`^`).

```python=
# union of two sets
a = {1, 2, 3}
b = {3, 4, 5}
print(a | b)       # {1, 2, 3, 4, 5}
print(a.union(b))  # {1, 2, 3, 4, 5}
```

### Practical Applications for Sets

Filtering out duplicates, membership tests, set operations for data processing.

---

### Set Practices
Create Set from List
Add to Set from List
Left Difference
Remove Repeats
Check Binary
Find the Town Judge - Challenge

---

### Long Project
Bonus: Averages
