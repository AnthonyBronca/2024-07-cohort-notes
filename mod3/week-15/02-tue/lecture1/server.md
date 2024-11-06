
# RESTFUL

"root"
/


List of colors: blue, red, white, yellow, orange, green

(plural) -> it will return a list of colors
/colors

(singular) -> returns one single item from the list (or a 404)
/colors/blue
1 generation route

------------------------------------
we want to buy blue chinos

BAD ROUTE -> too many generations
/store/     clothing/men/    pants/chinos/       colors/blue


GOOD ROUTE -> just parent + child generation

/pants/chinos/colors/blue


---- test ----

Imagine you are software engineer at a music store that sells records

How would the route look for searching up all the artists:

`/artists`

-> returns: Ariana Grande, John Lennon, ZZ Top, ACDC, Jayz

I want all the songs that belong to JayZ

`/artists/JayZ/songs`

I want to listen to "Encore", which route would I have to hit to get the
song "Encore"

`/artists/JayZ/songs/Encore`


From the Encore data, I want to grab the lyrics

`/songs/Encore/lyrics`
