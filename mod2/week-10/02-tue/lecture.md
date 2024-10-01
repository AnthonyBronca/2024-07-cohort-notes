# Linked Lists

A linked list is made up of objects with `pointers`. A pointer takes up about `1 bit` in memory, and is used as a way to store the `memory address` of data.
We can utilize objects, which are `unordered collections in memory`. They utilize pointers for `key-value` pairs, and we can use this same concept in order to retain the time-efficiency of keying in (O1) to objects, while creating our own `directional` graph.

Here is a visual representation of a Linked List:
  HEAD
  val            val             val
   A    ---->    B     ------>   C     -----> null
  node    next   node   next     node     next


We can add to the linked list, by attaching the `next` pointer to the previous `head` pointer, and this can be done in O(1) time.

## Performance considerations

### Tail Pointers

Imagine we need to add to the back of the linked list, similar to an array's `push` method. This would need us to find out where the `tail` is, which is an O(n) process. To mitigate this, if we consistently need to reference the back of the linked list, we can take up a little more space in memory and add the `tail` pointer to our linked list.

This would leave us with a linked list like this


  HEAD                            TAIL
  val            val             val
   A    ---->    B     ------>   C     -----> null
  node    next   node   next     node     next


  While the `tail` pointer will take up a little more space, it can considerably save us a lot more processing time, so it is usually included.

### Bi-Directional Linked Lists (Doubly Linked Lists)

Now what if we need to find something where things are ordered. Let's assume the values are numbered and in order



  HEAD                                            TAIL
  val            val             val             val
   1    ---->    2     ------>   3     ----->    4     ----->   null
  node    next   node   next     node     next   node   next


If we wanted to find "3" we would need to iterate through every node. From `head` -> 2 -> 3. But if we knew that the `tail` was 4, it would make more sense to go backward. Notice that the arrows only go in one direction, this is a `singlely` linked list. So we can not!! We can instead, convert this into a doubly linked list. Again, this will take up a lot more space, O(n) space, but allow us to cut out search times to O(log n) - better than O(n)


          HEAD                                            TAIL
          val    next    val     next   val    next     val     next
           1    ---->    2     ------>   3     ----->    4     ----->   null
 null <--  node  <----   node  <-------  node <-------   node <------
      prev        prev            prev           prev              prev


Notice that now we can go in any direction, right or left. If we knew this was `ordered`, we could go from right to left, or left to right. This would still be an O(n) search, but if we know that we are looking for "3", 3 is closer to "4" than it is to "1", so we can start our search from the tail and go backward to get to "3" faster thus achieving O(log n) speed
