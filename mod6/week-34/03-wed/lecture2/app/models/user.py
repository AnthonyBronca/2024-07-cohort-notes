class User:
    # The function that runs on initilization
    def __init__(self, name):
        self.name = name

    # function that will run on print, to see the data
    def __repr__(self):
        return f"User: {self.name}"
