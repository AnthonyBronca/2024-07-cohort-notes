# RESTFul


Not URL -> Im talking about route



"root"
/

List of colors: blue, red, white, yellow, green, pink

(plural) -> it will return a list/collection of all the colors available at the endpoint
/colors


(singular) -> it will return just the single color from the collection of colors
/colors/blue


child generation

----------------

Imagine you own a clothing store that has chinos, and you want to hit the blue chino end point

`/chinos/blue` -> out of all the different chinos, select the blue chino

BAD REST -> too many generations

`/store/clothing/mens/pants/chino/blue`

GOOD REST -> has a parent generation (optional) and a child generation

`/mens/pants/chino/blue`


-------- test ------

Imagine you are software engineer at a music store that sells records

How would you write a route for searching up all the artists

`/artists`

--> artists: Ariana Grande, JayZ, ZZTop, ACDC, Beyonce


How would the route look like for selecting JayZ

`/artists/JayZ`

How would the route look like for selecting all the songs that belong to JayZ

`/artists/JayZ/songs`

-> list of songs: Encore, Empire State of Mind, Birthday Song

What would the route look like to select "Encore"

`/artists/JayZ/songs/encore`

From the Encore Song, I want to get all the lyrics

`/JayZ/songs/Encore/lyrics`
