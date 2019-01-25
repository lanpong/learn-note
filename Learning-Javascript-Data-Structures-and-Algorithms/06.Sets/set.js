function Set() {
    let items = {};

    /**
     * this.has = function(value) {
     *     return value in items;
     * }
     */
    this.has = function(value) {
        return items.hasOwnProperty(value);
    };

    this.add = function(value) {
        if (!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    };

    this.delete = function(value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    };

    this.clear = function() {
        items = {};
    };

    this.size = function() {
        return Object.keys(items).length;
    };

    this.sizeLegacy = function() {
        let count = 0;
        for (let key in items) {
            if (items.hasOwnProperty(key)) {
                ++count;
            }
        }
        return count;
    };

    this.values = function () {
        let values = [];
        for (let i=0, keys=Object.keys(items); i<keys.length; i++) {
            values.push(items[keys[i]]);
        }
        return values;
    };

    this.valuesLegacy = function() {
        let values = [];
        for (let key in items) {
            if (items.hasOwnProperty(key)) {
                values.push(items[keys]);
            }
        }
        return values;
    };

    // 并集
    this.union = function(otherSet) {
        let unionSet = new Set();

        let values = this.values();
        for (let i=0; i<values.length; i++) {
            unionSet.add(values[i]);
        }

        values =otherSet.values();
        for (let i=0; i<values.length; i++) {
            unionSet.add(values[i]);
        }

        return unionSet;
    };

    // 交集
    this.intersection = function(otherSet) {
        let intersectionSet = new Set();

        let values = this.values();
        for (let i=0; i<values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(value[i]);
            }
        }

        return intersectionSet;
    };
    // ES6
    // intersectionAb = new Set([x for (x of setA) if (setB.has(x))]);

    // 差集
    this.difference = function(otherSet) {
        let differenceSet = new Set();

        let values = this.values();
        for (let i=0; i<values.length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i]);
            }
        }

        return differenceSet;
    };
    // ES6
    // differenceAB = new Set([x for (x of SetA) if (!setB.has(x))]);

    // 子集
    this.subset = function(otherSet) {

        if (this.size() > otherSet.size()) {
            return false;
        }
        else {
            let values = this.values();
            for (let i=0; i<values.length; i++) {
                if (!otherSet.has(values[i])) {
                    return false;
                }
            }
            return true;
        }
    };
}