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

### Using the unshift method

# Removing elements
