/*
class Queue{
    constructor(...items){
        // initialize the items in queue
        this._items = []
        // enqueuing the items passed to the constructor
        this.enqueue(...items)
    }

    enqueue(...items){
        // push items into the queue
        items.forEach(items => this._items.push(item))
        return this._items;
    }

    dequeue(count=1){
        // pull out first item the queue
        this._items.splice(0, count);
        return this._items;
    }

    peek(){
        // peek at the first item from the queue
        return this._items[0];
    }

    size(){
        // get the length of queue
        return this._items.length;
    }

    isEmpty(){
        // judge whether the queue is empty or not
        return this._items.length === 0;
    }
}
*/

/* ---------------------------------------------------------------- */
// 就队列来说，类似现实中的排队，需要与栈进行区分。FIFO(firsr in first out)先进先出

function Queue() {
    let items = [];
    // 入队
    this.enqueue = function(element) {
        items.push(element);
    }
    // 出队
    this.dequeue = function() {
        return items.shift();
    }
    // 队头
    this.front = function() {
        return items[0];
    }
    // 判断是否为空队
    this.isEmpty = function() {
        return items.length == 0;
    }
    // 队长
    this.size = function() {
        return items.length;
    }
    // 输出队列的全部元素
    this.print = function() {
        console.log(items.toString());
    }
}

let queue = new Queue();
console.log(queue.isEmpty()); // true

queue.enqueue("J");
queue.enqueue("Q");
queue.enqueue("K");
queue.print();
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
queue.print();

/* ------------ES6 syntax------------- */
let Queue2 = (function () {
    const items = new WeakMap();

    class Queue2 {
        constructor () {
            items.set(this, []);
        }
        enqueue(element) {
            let q = items.get(this);
            q.push(element);
        }
        dequeue() {
            let q = item.get(this);
            let r = q.shift();
            return r;
        }

    }
}) ();