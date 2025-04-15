
# Store App


The purpose of this mini-project is to get practice building classes, using methods, writing python syntax, using decorators, and imports


## Instructions

We will be building out 4 models. Bank, User, Store, Cart
We will also be building out 1 helper function to be used in Bank
Your application should run in __init__.py once all imports are done correctly



### User

1. Build a class called `User` that takes a name variable on initialization
2. It should have **protected** variables for name and bank.
    - name should be defaulted to whatever is passed in to the class on creation
    - bank should be defaulted to `None`
3. Create an instance method with a Getter decorator to return the `name`
4. Create an instance method with a Getter decorator to return the `bank`
5. Create an instance method with a Setter decorator to change the `bank`
6. Create an instance `magic method` to return a pretty version of the class


### Store

1. Build a class called `Store` that takes a name on initialization
2. It should default a variable called `inventory` on creation to a dict:
```py
{
    "carrots": {"price": 4, "quantity": 10},
    "apples": {"price": 3, "quantity": 5},
    "eggs": {"price": 20, "quantity": 10},
    "bananas": {"price": 7, "quantity": 20},
    "bread": {"price": 5, "quantity": 40},
}
```
3. Create an instance method called `transaction` that takes in `bank` and `cart_cls`
    - This method will manage the total cost of the cart
    - Create a variable for cart, grabbing it from the cart_cls
    - It will check each item within the passed in cart
        - If the item is sold in the store do the following:
            - Check to see if there is enough in stock. If not, return:
               "We only have $item.quantity of $item.name"
            - otherwise (this can be made more efficient but use a for in range loop for practice)
                - loop through the number of an item in the cart
                - subtract the store's inventory of that item for each number of that item in the cart
                - increase the cost looking up the price of that item in the store
    - After checking all items and increasing our total correctly:
        - withdraw the total from the bank using the bank's `withdraw` method
        - reset the cart using the cart's `reset` method
        - return the total
4. Create an instance method called `get_store_that gets the store info in a "menu" time format. You can use this code for this function:
```py
print(f"{self.name}")
        for item in self.inventory:
            print(
                f"{item}: price: ${self.inventory[item]['price']}, In Stock: {self.inventory[item]['quantity']}"
            )
```

5. Create an instance `magic method` to return the store details in a pretty format following this syntax: `$store.name, $store.inventory`


### Cart

1. Create a class called `Cart` that takes no variables on creation
2. It defaults a variable called `cart` to an empty list
3. It has an instance method called `reset` that sets the cart back to an empty list
4. It has an instance method called `add_to_cart` that takes in an item and amount
    - It should add an item and amount as a key:value pair within an object, and then add that object to the cart list
5. It has an instance method called `get_cart` that returns the cart list
6. It has an instance `magic method` that returns the cart in pretty format. You can use the code below in this function
```py
return f"Cart: ({self.cart})"
```


### Pin Decorator

1. In /helpers/security.py, create a function called `enter_pin`
`enter_pin` will take in a function, and return an inner function
2. The inner function will take in a `bank` and `amt`
It will grab the input for a user's pin using:
```py
"Please enter your bank pin:    "
```
 as the string.
    - Check to make sure the input matches the bank's pin
        - If it does, invoke the func from the outter function passing in `bank` and `amt`
        - It if does not, raise an exception saying "You are not authorized to perform this action"



### Bank

1. Import the `enter_pin` function
2. Create a class called `Bank` that takes a `start_amt` on initialization
3. The class also sets a **protected** pin variable, defaulting to 0000
4. Create an instance getter method to grab the pin
5. Create an instance setter method that sets the pin
6. Create an instance method called `change_pin` that grabs a user's input as a new pin and sets it
    - This should allow changes by default if the pin is still 0000
    - This should require user to enter their old pin and verify it is correct before changing the pin. If they enter a bad pin, they should get a message that reads: "You did not enter a correct pin. Please try again." and the functon should run again
7. Create an instance method called `deposit` that takes in an amount
    - It should set the balance to be the amount passed in

8. Create an instance method called `withdraw` that takes in an amount
    - *When this function is invoked, it should always run the enter_pin func* (hint use a decorator)
    - In the `withdraw` function, use a `try..except` block to see if the amt to withdraw is greater than the balance. If it is, raise an exception letting the user know they do not have enough to withdraw the specified amount. Otherwise, it should decrease their balance by the amount
    - Catch any exceptions from the `try` section and print them out as "Error: {errorMessage}"
9. Create an instance `magic method` that returns the bank info in pretty format:
you can use this as a template:
```py
 return f"Bank: (balance: ${self.balance}, pin: ****)"
```




## Test your code

In the init.py file, you should be able to run this code:


```py
anthony = User("Anthony")
bank1 = Bank(100)
anthony.bank = bank1
print(anthony)
# bank1.change_pin()
# print(bank1.pin)
# bank1.withdraw(7)

target = Store("Target")
cart1 = Cart()
target.get_store()
print("\n", "\n", "----------------", "\n", "\n")
cart1.add_to_cart("apples", 3),
cart1.add_to_cart("bananas", 5),
cart1.add_to_cart("bread", 4),
cart1.add_to_cart("eggs", 1),

print(cart1)
target.transaction(bank1, cart1)

print("\n", "\n", "----------------", "\n", "\n")
target.get_store()
print("\n", "\n", "----------------", "\n", "\n")
print(anthony)


```

Keep in mind you will have to import the necessary items
