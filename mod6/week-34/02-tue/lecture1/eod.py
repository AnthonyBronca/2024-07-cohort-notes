# List of admins that will be able to modify the canvas content
admins = [
    {"username": "anthony", "password": "pythontrash"},
    {"username": "sam", "password": "pythonIsCool!"},
]

# The canvas content we currently have
mod6 = {
    # week of content  | the content to teach
    "week33": "intro to python",
    "week34": "decorators and classes",
}


# Dynamic dict that we use to track the username
current_user = {
    "username": input("Username?:        "),
    "password": input("Password?:        "),
}

# 2. MAke sure we are an admin when making the change


def deny_access():
    print(f"You do not have access to perform this action")
    return "awdeawd"


def is_admin(func):
    for admin in admins:
        if current_user["username"] == admin["username"]:
            if current_user["password"] == admin["password"]:
                return func
            else:
                return deny_access
        else:
            return deny_access


# 1. Write a function to change the content of the mod6 canvas
@is_admin
def change_content(name_of_week, topic):
    # If the key-value exists --- update it
    if name_of_week in mod6:
        # update key-value pair with new topic
        mod6[f"{name_of_week}"] = topic
    else:
        # The topic did not exist
        mod6[f"{name_of_week}"] = topic


print(mod6)
change_content("week50", "hiiii")

print(mod6)


# 3. Make sure that we are able to change the content if signed in, or not change if not signed in


# print(current_user)
