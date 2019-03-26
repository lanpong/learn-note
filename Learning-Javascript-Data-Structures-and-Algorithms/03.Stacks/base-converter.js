class Stack {
    constructor(...items) {
        this._items = [];
  
        if (items.length > 0) {
            items.forEach(item => this._items.push(item));
        }
  
    }
  
    push(...items) {
        //push item to the stack
        items.forEach(item => this._items.push(item) )
        return this._items;
    }

    pop(count = 0) {
        //pull out the topmost item (last item) from stack
        if (count === 0) {
            return this._items.pop();
        } else {
            return this._items.splice(-count, count);
        }
    }
  
    peek() {
        // see what's the last item in stack
        return this._items[this._items.length-1];
    }
  
    size() {
        //no. of items in stack
        return this._items.length;
    }
  
    isEmpty() {
        // return whether the stack is empty or not
        return this._items.length==0;
    }
  
    toArray() {
        return this._items;
    }
}

/**
 * 进制转化，这里需要构造一个 `Stack`
 * 
 * @param {number} decNumber 需要进行转化的数字
 * @param {number} base 进制
 * @returns {number} 转化后的
 * @example
 * baseConverter(1024, 2)
 * // => 10000000000
 * 
 * baseConverter(1024, 16)
 * // => 400
 */
function baseConverter(decNumber, base) {

    var remStack = new Stack(),
    rem,
    baseString = '',
    digits = '0123456789ABCDEF';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }

    return baseString;
}

// 简单的进制转化
console.log(baseConverter(1024, 2));
console.log(baseConverter(1024, 16));
