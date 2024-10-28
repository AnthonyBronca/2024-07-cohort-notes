# Mod 3 Announcements

- Welcome to Mod 3! We will be covering HTML, CSS, entry-level severs, how the internet works, and using JavaScript to create functionality on websites

- Small Group Info:
    - I will be reaching out to you all today or tomorrow to make small groups. Due to the overwhelming majority of interest in fundamentals, I will focus on those concepts and groups first. We will aim to start on Oct 22 or Oct 23rd.

- Those who failed:
    - I will be finalizing some grades tonight, but I will not finalize those that would be considered a failure. I will send those of you who failed, a DM letting you know more information and trying to work with you on when you will be attempting the assessment again + requirements to remain in good standing. This can include, extra homework required, additional readings where we may have interviews to test your concept understanding live, and you may be required to attend lecture + office hours 2 - 3 times a week to catch up, while not falling behind in mod 3 concepts.



## HTML

`HTML` stands for Hyper-Text Markup Language. It is a type of markup language, just like how `.md` files have their own markup syntax. It is NOT a programming language, unlike JavaScript. We can utilize `HTML` to tell a browser what text or key-objects we want to be displayed. These are purely visual, and the programmatic functioanlity of the markup text will have to be provided via JavaScript.


To start an HTML file you will need to provide some information to the browser to tell it how to display the page. Here is a boilerplate starter:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>
```


This tells the browser that it will be rendering HTML, and that all text below it will follow `HTML` conventions. This is what the `<!DOCTYPE html>` is doing.

Next, we tell the browser that the type of `HTML` we will be working with is in english. This also helps tell site readers that this is an english based file.
The `head` section contains additional information about this page, and is often used for things like `favicons`, `titles`, adding `CSS`, adding scripts with `JavaScript`, and denoating any additional information we may need to relay to the end-user or search engines. A good `head` section will be able to easily be found with search-engines, and will be able to accurately dispaly information through a wide-arrage of device types.

While we do have to do a little bit of steps within the `head` section, most of our code will be in the `body` section.



### Syntax

1. All opening brackets must be closed. An opening is denoated with `<` and a close is denoated with a `/>`
2. It is convention to add indentation when nesting bracketed items:

```html
<h1>
    <p>this is a nested P Tag </p>
</h1>
```

3. You should only have 1 `h1` or, main header tag per page.


### Common tags

- <p> : used for paragraphs (this is blocked)
- <span> : used for sentences or small text (this is in-line )
- <h1>: The main header
- <h2> - <h6> : these are sub-headers, where the smaller the number, the bigger the importance (and size) of the text will be
- <button> : this makes a button
- <input>: this makes an input field with varying markers
- <form> : this is used to create nested tags within a form
- <ol> : ordered list
- <ul> : unordered list
- <li> : list item

### Attributes

Attributes are sub-tags within a tag that tell the browser additional information about the tag. For example:

```html
<body>
    <input >
</body>

```

This will render an input box, however, it will not have a lot of information go by. We can add `attributes` like a "text" field or a "type" field, to give this input more functionality. We can also use attibutes to assign `id`s, `class`es, and additional information we will see throughout this mod.

Here is an updated version of the example above, where the input field now has more information:

```html
<body>
    <input
        type="text"
        placeholder="Hello World"
        spellcheck="true"
        value=""
        required
        >
</body>

```

A lot of those additional attributes are "optional", but will provide additional functionality to the tag.

- type: Will determine what the input will be. On Mobile, these will help the phone pull up the necessary keyboard type
- placeholder: Will add a light text within the input field to help provide additional context to the user
- spellcheck: Will allow the device to check for spellchecking errors (you can turn this off if you wanted an input field for something like usernames or song names)
- value: This is the attribute that will hold the information about the input. Later on, we will use JavaScript to add to this attribute so that we can retain info
- required: This will tell forms that this html field is required and that a value must be entered before a form can accept it
