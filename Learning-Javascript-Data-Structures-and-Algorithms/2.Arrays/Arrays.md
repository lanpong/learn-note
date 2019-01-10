# Creating and initializing arrays

```js
var a = new Array();
var a = new Array('a', 'b');
var a = [];
```

##  Accessing elements and iterating an array

简单的来找到1-20里符合斐波那契数列的数值

```js
var fib = [];
fib[1] = 1;
fib[2] = 1;

for(var i=3; i<20; i++) {
    fib[i] = fib[i-1] + fib[i-2];
}
// 迭代输出一下
for(var i=1; i<fib.length; i++) {
    console.log(fib[i]);
}
```

# Adding elements

```js
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
> numbers.length
> 10
```

## Using the push method

`push` 可以在尾部添加新的元素，比如
```js
numbers.push(11);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11]
numbers.push(12, 13); //这里可以一次接受多个参数
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13]
```

## Inserting an element in the first position

在头部插入新的元素
```js
for (var i=numbers.length; i>=0; i--) {
    numbers[i] = numbers[i-1];
}
numbers[0] = -1;
// 这里其实就是讲数组全部都向后移动一位，这样第一位就空出来了，利用负值操作就可以实现在 first position 插入元素。
```

### Using the unshift method

这里还可以使用 unshift，在头部插入新的元素。
```js
numbers.unshift(-2);
numbers.unshift(-4, -3);
```

# Removing elements

```js
numbers.pop();
// 在尾部pop元素，每执行一次pop一个元素。
```

> 这里的`pop` 和 `push` 在栈结构中还有用到，

## Removing an element from first position

```js
for(var i=0; i<numbers.length; i++) {
    numbers[i] = numbers[i+1];
}
// 将数组全部向前移动一位，即可以实现对头部元素的删除。
```

### Using the shift method

```js
numbers.shift();
```

> 由于是删除元素，上面的几种只是删除头部的元素，所以并不需要参数。

# Adding and removing from a specific position

这里可以使用 `splice(parms, parms)` 返回的是修改过的数组

# Two-adimensional and multidimensional arrays


## Iterating the elements of two-dimensional arrays

## Multi-dimensional arrays

# References for JavaScript array methods

| methods     | desc |
|:----------- |:-----|
| concat      |      |
| every       |      |
| filter      |      |
| forEach     |      |
| join        |      |
| indexOf     |      |
| lastIndexOf |      |
| map         |      |
| reverse     |      |
| slice       |      |
| some        |      |
| sort        |      |
| toString    |      |
| valueOf     |      |

## Join multiple arrays

```js
var zero = 0;
var positiveNumbers = [1,2,3];
var negativeNumbers = [-3,-2,-1];
var numbers = negativeNumbers.concat(zero, positiveNumbers);
// [ -3, -2, -1, 0, 1, 2, 3 ]
```

## Iterator functions

迭代器

```js
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
```

`every` 方法会迭代数组的每个元素，直到函数返回 `false`，也就是函数得到 `false` 会停止迭代

`some` 与 `every` 类似，直到函数返回 `true`，也就是函数得到 `true` 会停止迭代

`forEach`，这里是迭代整个数组，`numbers.forEach()`

### map,filter 和 reduce

`map` let myMap = numbers.map(isEven)

数组 myMap 里的值是： [false, true, false, true, false, true, false, true,
false, true, false, true, false, true, false]

还有一个 filter 方法。它返回的新数组由使函数返回 true 的元素组成：
var evenNumbers = numbers.filter(isEven);
在我们的例子里， evenNumbers 数组中的元素都是偶数： [2, 4, 6, 8, 10, 12, 14] 。

`reduce`

## ECMAScript 6 and new Array functionalities

## Sorting elements

## Searching

## Outputting thw array into a string

# The TypedArray class
