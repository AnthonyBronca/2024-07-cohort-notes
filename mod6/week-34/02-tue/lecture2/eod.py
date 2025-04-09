# 1. have a list of admin users
# 2. have dict of the canvas mod6 content
# 3. have a currently signed in user dict
# 4. write a func that will allow us to modify the content
# 5. write another function that will check if we are properly signed in or not
# 6. refactor these to use a decorator

admin_users = [
    {"username": "anthony", "password": "pythontrash"},
    {"username": "sam", "password": "pythonok"},
]


mod_6 = {
    "week33": "Intro to python",
    "week34": "Classes and other garbage python content",
}

current_user = {
    "username": input("Username:      "),
    "password": input("Pasword:       "),
}


def deny_access():
    return print("Invalid Accesss")


# Function to check if the current_user is an admin or not
def is_admin(func):
    def inner(week, topic):
        for admin in admin_users:
            if admin["username"] == current_user["username"]:
                if admin["password"] == current_user["password"]:
                    return func(week, topic)
                return deny_access()
            return deny_access()

        print("Reach out to your IT department for help...")

    return inner


# is_admin()


# Function to change the content
@is_admin
def change_content(week, topic):
    # do we have the week already?
    # if we do, update the topic
    if week in mod_6:
        mod_6[week] = topic
    else:
        # if we don't, add the key-value pair
        mod_6[week] = topic


change_content("week34", "Trash classes and language")

print(mod_6)
