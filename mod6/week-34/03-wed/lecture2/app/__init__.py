# Imports
from models import User, Bank

anthony = User("Anthony")
bank1 = Bank(100)

anthony.bank = bank1  # anthony class now has the bank
# print(anthony)
# print(bank1)
bank1.change_pin()
print(bank1.pin, " . . Your new pin is this")
bank1.withdraw(7)
print(bank1)

# target = Store("Target")
# cart1 = Cart()
# target.get_store()
# print("\n", "\n", "----------------", "\n", "\n")
# cart1.add_to_cart("apples", 3),
# cart1.add_to_cart("bananas", 5),
# cart1.add_to_cart("bread", 4),
# cart1.add_to_cart("eggs", 1),

# print(cart1)
# target.transaction(bank1, cart1.cart)

# print("\n", "\n", "----------------", "\n", "\n")
# target.get_store()
# print("\n", "\n", "----------------", "\n", "\n")
# print(anthony)
