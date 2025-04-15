from helpers import enter_pin


class Bank:
    def __init__(self, start_balance):
        self.balance = start_balance
        # pin -> 0000
        self._pin = 0000

    # getter for the pin
    @property
    def pin(self):
        return self._pin

    # setter for the pin -> @p
    @pin.setter
    def pin(self, new_pin):
        self._pin = new_pin

    # change pin functionality
    #  - allow the user to input a new pin if it is 0000
    #  - if the pin is not 0000, enter the old one to be able to edit it

    def change_pin(self):
        try:
            # account just opened, have them set up a new pin
            if self.pin == 0000:
                new_pin = input("Please enter a new pin:     ")
                self.pin = new_pin
                print(self.pin)
            # User must enter their pin in order to modify the pin
            else:
                curr_pin = input("Please enter a new pin:     ")
                if curr_pin == self.pin:
                    new_pin = input("Please enter a new pin:     ")
                    self.pin = new_pin
                    print(self.pin)
                else:
                    raise Exception("Unauthorized...")
        except Exception as e:
            print(f"Error: {e}")

    # Write a function called withdraw that will allow us to take out money from the bank
    @enter_pin
    def withdraw(self, amt):
        self.balance -= amt

    def __repr__(self):
        return f"Bank: {self.balance}, pin: *****"
