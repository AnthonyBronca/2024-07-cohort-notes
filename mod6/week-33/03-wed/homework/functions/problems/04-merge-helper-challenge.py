# Recall the merge sort algorithm:
    
# 1. Find midpoint to divide list in half
# 2. Call `merge_sort` recursively on the first half
# 3. Call `merge_sort` recursively on the second half
# 4. Merge the two sorted halves with `merge`

# Implement the `merge_sort` function with the `merge` helper function.

# Write your code here.
def merge_sort(lst):
    # Call merge somewhere in here
    pass

def merge(first_half, second_half):
    # Merge logic goes here
    pass

lst = [5, 2, 38, 91, 16, 427]

sorted_lst = merge_sort(lst)        # Out of place solution
print(sorted_lst)

merge_sort(lst)                     # In place solution
print(lst)