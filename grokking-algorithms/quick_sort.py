# 快排的递归实现

def quicksort(arrry):
    if len(arrry) < 2:
        return arrry # 如果需要快排的arrry长度小于2，则不需要排序
    else:
        pivot = arrry[0] # 递归条件
        less = [i for i in arrry[1:] if i <= pivot] # 小于条件的元素

        greater = [i for i in arrry[1:] if i > pivot] # 大于条件的元素

        return quicksort(less) + [pivot] + quicksort(greater)

if __name__=='__main__':
    print(quicksort([10, 5, 2, 3]))