# Computers and Binarys

Computers speak with a bunch of 0's and 1's. That is it. A bunch of `transistors` that either turn on and pass
electricity (1) or turn off (0)

We can use a combination of these "on/off" switches to represent different meaning in computers. 0, for example,
can be `false` and 1 can be `true`.


## Bits and Bytes

Computers store information using a series of `bits`. 8 bits, make a `byte`. We can think of each letter (ASCII)
as a 2 `bits`, whereas emojis take up 4. Using this information, we can start accomulating information
in the form of bits/bytes to understand the size of storing specific processes/data. A `nibble` is
4 bits, or half a `byte`


## Machine Language

### Base-10

Humans count in Base-10. This means we start in units ranging from 0 - 9. For example:

```
00
01
02
03
04
05
06
07
08
09
10
...
```

Once you know those 10 digits, you can create any combination of numbers where
we can percieve higher values based on the positioning and number representation of
that value. Holding things like 8 or 9, however, takes up a lot more space in a c
omputers memory as they are a comination of bits to represent these. Instead, computers use `binary`

### Binary - Base-2

Computers just use 0s and 1s, to combine these as values. It is much more about positioning here to represent values

```
0000 (0)
0001 (1)
0010 (2)
0011 (3)
0100 (4)
0101 (5)
0110 (6)
0111 (7)
1000 (8)
1001 (9)
1010 (10)
1011 (11)
1100 (12)
1101 (13)
1110 (14)
1111 (15)

```

So if we look at the number 4, we can see we need 3 positions to represent its values. and the
number 8 needs 4 positions to represent its value. For this reason, we increase the need to
add another position every power of 2. The larger the number and positions needed, the more 0's and
1's we need to process. Looking at 15, we are consuming an entire `nibble`. So what happens if we need
to do 16? Well we introduce another set of 4s, another `nibble`, to be left with a `byte` of memory consumption.

```
0001 0000 (16)
0001 0001 (17)
0001 0010 (18)

```


### Hexadecimal

Hexadecimal is used to store light-weight information, as it has 16 characters before another position is needed.
It ranges from 0 - F

```
0 - 0000 (0)
1 - 0001 (1)
2 - 0010 (2)
3 - 0011 (3)
4 - 0100 (4)
5 - 0101 (5)
6 - 0110 (6)
7 - 0111 (7)
8 - 1000 (8)
9 - 1001 (9)
A - 1010 (10)
B - 1011 (11)
C - 1100 (12)
D - 1101 (13)
E - 1110 (14)
F - 1111 (15)

```

So we can represent 16 as: 10

You will often work with Hexadecimal to represent colors

### ASCII

We use The American Standard Code for Information Interchange.
This is the idea that we have specific binary/hexidecimal representations for American letters.
For example "A" would be denoted as 65, or 0110 0001



## Conversions

We can utilize data in the form of ASCII, HEX, Base-10, and Base-2 (binary).
Typically, we work with ASCII `strings` and BASE-10 numbers, but when encrypting
or sending information it is a lot more efficient to send as base-16 or calculate using binary.

In `JavaScript` we can use built in functions for converting, using UTF-16

Converting from UTF- 16 -> ASCII
```js
String.fromCharCode(65); // A;
String.fromCharCode(66); // B;
String.fromCharCode(67); // C;

```

Converting from ASCII -> UTF-16

```js
const str = "ABC";
str.charCodeAt(0); // 65
str.charCodeAt(1); // 66
str.charCodeAt(2); // 67
```

Converting from binary to hex to base 10

```js
parseInt("a1", 16); // 161 -> hex
parseInt("1011", 2); // 11 -> binary
```

Converting to Base - 10

```js
const decimal = parseInt("a1", 16); // 161
const hex = decimal.toString(16); // "a1"
const binary = decimal.toString(2); // '10100001'

```

Now, imagine how many 0's and ones it takes to store your name as a string!
