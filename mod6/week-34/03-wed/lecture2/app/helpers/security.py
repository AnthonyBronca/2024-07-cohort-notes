def enter_pin(func):
    def inner(bank, amt):
        # ask for the pin, if the pin is correct, allow the function to run
        pin_attempt = input("Please enter your pin:     ")
        if pin_attempt == bank.pin:
            func(bank, amt)
        else:
            # If the pin is incorrect, raise an exception
            raise Exception("Unauthorized")

    return inner
