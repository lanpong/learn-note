function HashTable() {
    var table = [];

    var loseloseHashCode = function(key) {
        var hash = 0;
        for (var i=0; i<key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash%37;
    };

    // 实现 put 方法
    this.put = function(key, value) {
        var position = loseloseHashCode(key);
        console.log(position + ' - ' + key);
        table[position] = value;
    };

    // 实现 get 方法
    this.get = function(key) {
        return table[loseloseHashCode(key)];
    };

    // remove
    this.remove = function(key) {
        table[loseloseHashCode(key)] = undefined;
    };

    // print
    this.print = function() {
        for (var i=0; i<table.length; i++) {
            if (table[i] !== undefined) {
                console.log(i + ': ' + table[i]);
            }
        }
    };
}

// test case
var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');    // 19 - Gandalf
hash.put('John', 'john@email.com');          // 29 - John
hash.put('Tyrion', 'tyrion@email.com');      // 16 - Tyrion