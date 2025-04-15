class User:
    # function that runs on initilization
    def __init__(self, name):
        self.name = name
        self._bank = None

    # The ability to set a private variable

    # --- BE ABLE TO GET THE PRIVATE VARIABLE ---
    # GETTER

    @property
    def bank(self):
        return self._bank

    # ---- BE ABLE TO SET THE PRIVATE VARIABLE ---
    # SETTER
    @bank.setter
    def bank(self, bank_class):
        self._bank = bank_class

    # Function that will be called automatically to price
    def __repr__(self):
        return f"User: {self.name}, {self._bank}"
