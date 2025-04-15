from helpers import enter_pin


class Bank:
    def __init__(self, start_balance):
        # public variables
        self.balance = start_balance
        # private variable
        self._pin = 0000

    # GETTER -> allows us to retrieve the private data
    @property
    def pin(self):
        return self._pin

    # SETTER -> allows us to modify the private data

    @pin.setter
    def pin(self, new_pin):
        self._pin = new_pin

    # If the pin is currently 0000
    #  change the pin
    # if the pin is not 0000
    #  ask the user for their pin
    #    if they enter it correctly, allow them to change it
    #    if not, raise an error
    def change_pin(self):
        try:
            if self.pin == 0000:
                new_pin = input("Please enter a new pin:    ")
                self.pin = new_pin
            else:
                curr_pin = input("Please enter your pin:    ")
                if curr_pin == self.pin:
                    new_pin = input("Please enter a new pin:    ")
                    self.pin = new_pin
                else:
                    # throw new Error() -> js
                    raise Exception("Unauthorized")

        except Exception as err:
            print(f"Error: {err}")

    # Take in some amount
    # check to see if we have that amount to withdraw (not handled here)
    # Withdraw the amount
    @enter_pin
    def withdraw(self, amt):
        self.balance -= amt

    def __repr__(self):
        return f"Bank: {self.balance}"
