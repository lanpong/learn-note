def findSmallest(arr):
    """
    return:最小元素的索引
    """
    smallest = arr[0]
    smallest_index = 0
    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = i
    return smallest_index

def selectionSort(arr):
    """
    return:排序过后的序列
    """
    newArr = []
    for i in range(len(arr)):
        smallest = findSmallest(arr) # 找出最小的元素，加入新的数组
        newArr.append(arr.pop(smallest))
    return newArr

if __name__=='__main__':
    print(selectionSort([5, 3, 6, 2, 10]))