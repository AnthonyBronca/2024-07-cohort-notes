# Sorting Algorithms

NOTE YOU DO NOT NEED TO MEMORIZE THE CODE FOR THESE


Sorting algorithms are ways that we can move data around to be sorted in some sort of way.
Sorting algorithms aim to try to cut the process of moving data around, be it in-place or out-of place.


## Bubble Sort

Unsorted Array:

```js
const arr = [3, 2, 0 , 4, 1];

// 1. Compare 3 && 2 -> swap [2,3,0,4,1]
// 2. Compare  3 && 2 -> [2, 0, 3, 4, 1,]
// 3. Compare 3 && 4 -> [2, 0 , 3, 4, 1,]
// 4. compare 4 && 1 -> [2, 0 , 3, 1, 4]
// Notice we are starting from the front of the array and grabbing each item
// to move it to the spot it needs to be




function bubbleSort(arr) {

    // iterate through the array to grab 1 element
    for(let i = 0; i < arr.length - 1; i++){
        // iterate through the array to grab each next element
        for(let j = 0; j < arr.length - i - 1; j++){
            // If the current value is greater than its neighbor to the right
            if(arr[j] > arr[j +1]){
                // Swap those values
                let curr = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = curr;
            }
        }
    }
    return arr;

}
```

## Insertion Sort

### Out-of-Place
This refers to sorting while creating a new array.
To do this sorting alogorithm, we need to go through the array using a `nested` loop. For each iteration, we grab an element and look to insert it relative to the next closes item in an external array. For example:

```js

let arr = [3,1,2];
let sorted = [];
// iterate through arr, for each iteration grab two elements and compare which one is smaller, then insert it into the sorted array in order:
prev = 3;
next = 1;
// 1 is smaller

sorted -> [1];
arr = [3,2];
// loop
prev = 3,
next = 2;

sorted = [1,2];
arr = [3];
//loop
// no next is found

sorted = [1,2,3];
arr = [];

```

### in-place
This may save more space in memory, however, it will take more time to complete. In order to solve this, we can not create a new array to store values in, and instead we must move things around within the array itself.

Steps:

1. To get started we must grab an item that we want to move.
2. once we select an item, we can we can move that item around to the correct location.
    - to attempt this, we must first compare the items between each other. If the item is smaller than we can swamp the lements in pllace. This is going to require a nested for loop so that we can loop through an element that we pop off, and then we can loop through each element within the array.

## Selection Sort

Selection sort works by keeping track of the smallest element within the array. As we increase eaczh iteration, we want to grab the nexft smallest item over and and over until we have a sorted array. For example:

```js

let arr = [4,1,2,3];
// make a pointer keeping track of the 4, and compare it to 1. Since 1 is smaller, move our "smallest"
// pointer to the 1. We keep comparing that smallest pointer to the rest of the elemtns in the array. Since we know that 1 is the smalklest in the array, we can adjust it to the front index (index i). We continue this process until we finish both the internal loop and external loop.



```


## Recursive Sort

Recursive sorting algorithms are built on the idea that we need to do once action per stack, and we continue to recursively sort until all elements with the array are sorted. This still has a nested loop, however, we can achieve faste time complexity by dividing and concurring.

   ### Merge Sort
    - Merge Sort, is the divide and conquer king of sorting algorithms. It requires us to split an array into halves. Then, we split the halves into havles. And we keep splitting until we are left with many individual arrays of just 1 element. We put them back to gether in a sorted way, always make sure we spread the sorted arrays into each other in the correct order. The downside to this sorting alogirthm is that it utilizes the call stack, and may not be performant for large data sets as it will require more and more space to divide into. Once we have sorted mini-arrays, we place them together so that our call stack starts to free up and slowly we start to have sorted arrays.

   ### Quick Sort
   - Quick sort is able to divide and conquer in a different way
   1. Select an item at the front of the array and compare it to all elements within the array. All of the items smaller get sorted to the left, and all of the items bigger get sorted to the right. This lets us split things in half, which can achieve O(log n) time efficiency.
   2. Once we know that the first element gets sorted in the middle of the things bigger and smaller, we grab the next element and sort that in place within its respective halve.

## Built-In Sort (Tim Sort / Merge Sort / Quick Sort)

While knowing about the sorting algorithms is useful for getting a job, as sometimes you have to know these alogirthms to be able to explain the code, JavaScript provides a built in sorting algorithm for us to use, called `.sort()` Depending on the browser with which you use the sorting, it will either use a `merge` sort or a `tim sort`. `Tim Sort` uses a a combination of merge and quick sort. We must take into account that each browser might use a different sorting alogorithm. It is easy for us to use, quick, and important for us to know. Almost all technical interviews will require some sort of sorting question.

```js


```
