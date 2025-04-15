# Decorator that will allow us to run the function passed in (withdraw), only if the user entered in the correct password


def enter_pin(func):
    def inner(bank, amt):
        print(bank, "this is bank")
        attempt_pin = input("Please enter the pin:   ")
        if attempt_pin == bank.pin:
            return func(bank, amt)
        else:
            raise Exception("Unauthorized to perform this action")

    return inner
