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

    pop(count=0) {
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
        return this._items.length == 0;
    }

    toArray() {
        return this._items;
    }
}

/**
 * 以上是构造式写法
 * -------------------
 */
function Stack() {
    let items = [];

    // push elements to the stack
    this.push = function(element) {
        items.push(element);
    };

    // pop elements to the stack
    this.pop = function() {
        return pop.items();
    };

    // peek the element from the top stack
    this.peek = function() {
        return items[items.length-1];
    };

    // empty
    this.isEmpty = function() {
        return items.length == 0;
    };

    // clear stack
    this.clear = function() {
        items = [];
    };

    // print stack
    this.print = function() {
        console.log(items.toString());
    };

    //


}