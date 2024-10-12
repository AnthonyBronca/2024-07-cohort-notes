# Intro to Graphs

Graphs are very powerful data structures. The are the idea that we can connect nodes in a 3 Dimensional model. These Data Structures allow us to build games, social networks, maps, and much more.

## Types of Graphs

 - Cyclic: A cyclic graph is one where nodes can create circle loops

 - Ayclic: An Acyclic graph is one where repeated nodes are not found. Trees and Linked Lists follow this type of graph structure


## Weights and Edges

Like Trees, Graphs have edges, but we can better establish the weight between these edges.

- UnWeighted: An unweighted graph is one where the edges all have the same weight, ususally 1.

- Weighted: These can tell us that each edge may have different values. Imagine you are trying to determine if getting from point A to B taking Road X or Road Y. If they have the same distance, maybe we can represent the "weight" between the two nodes being the speed-limit. This way, we can accurately determine which road should be the fastest assuming safe driving conditions


P.S We will mostly be working with unweighted graphs here


## Adjacency Lists

Ann Adjacency list is a way to visualzie and map out nodes using an `object`, where each value is an `array` containing keys to the next node:

```js
const graph3 = {
  A: ['B', 'C', 'E'],
  B: [],
  C: ['B', 'D'],
  D: [],
  E: ['A'],
  F: ['E'],
};
```

Notice, from A we can go to the following nodes:
    - B
    - C
    - D

But if we are trying to get from A to F, which would be the fastest route?

A -> E -> F

If we had gone from A -> B or A -> C, we would not have a way to get to F.


Later on, we will learn about working through graphs when an adjacency list is not provided
