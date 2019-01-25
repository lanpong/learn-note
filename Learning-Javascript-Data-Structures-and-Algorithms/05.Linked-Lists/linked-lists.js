/**
 * 在js中严格来说并不支持直接构造链表
 */
function LinkedList() {

    // 创建链表，链表需要两个属性，一个值，一个指向下一个节点的指针
    let Node = function(element) {
        this.element = element;
        this.next = null;
    };

    // 初始化，即设置长度为0，和设置头节点为null
    let length = 0;
    let head = null;

    // 向链表尾部添加元素
    this.append = function(element) {
        let node = new Node(element),
        current;

        if (head === null) {
            head = node;
        } else {
            current = head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        length++;
    };

    // 在特定位置插入元素
    this.insert = function(position, element) {

        if (position >= 0 && position <= length) {

            let node = new Node(element),
            current = head,
            previous,
            index = 0;

            if (position === 0 ) {

                node.next = current;
                head = node;

            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }

            length++;
            return true;
        } else {
            return false;
        }
    };

    // 移除某个位置的元素
    this.removeAt = function(position) {

        if (position > -1 && position < length) {
            let current = head,
            previous,
            index = 0;

            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;
            }

            length--;

            return current.element;
        } else {
            return null;
        }
    };
    
    this.remove = function(element) {
        let index = this.indexOf(element);
        return this.removeAt(index);
    };

    // 返回给定元素的位置，如果没有则返回 -1
    this.indexOf = function(element) {

        let current = head,
        index = -1;

        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }

        return -1;
    };

    this.isEmpty = function() {
        return length === 0;
    };

    this.size = function() {
        return length;
    };

    // 将LinkedList 转化成一个字符串
    this.toString = function() {

        let current = head,
        string = '';

        while (current) {
            string += current.element + (current.next ? 'n' : '');
            current = current.next;
        }
        return string;
    };

    this.print = function() {};

    this.getHead = function() {
        return head;
    }
}