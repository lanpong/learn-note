/**
 * 字典：[键:值]
 * 可以说是关系的映射
 */
function Dictionary() {
    var items = {};

    // 是否存在某个键值
    this.has = function(key) {
        return key in items;
    };

    // 添加新元素
    this.set = function(key, value) {
        items[key] = value;
    };

    // 通过使用键值来从字典中移除键值对应的数据值
    this.delete = function(key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    };

    // 通过键值查找特定的数值并返回
    this.get = function(key) {
        return this.has(key) ? items[key] : undefined;
    };

    // 将字典所包含的所有数值以数组的形式返回
    this.values = function() {
        var values = [];
        for (var k in items) {
            if (this.has(k)) {
                values.push(items[k]);
            }
        }
        return values;
    };

    // 将字典所包含的所有键名以数组的形式返回
    this.keys = function() {
        return Object.keys(items);
    };

    this.getItems =  function() {
        return items;
    };

    // 返回字典所包含元素的数量
    this.size = function() {
        return Object.keys[items].length;
    };

    // 删除所有元素
    this.clear = function() {
        items = {}
    };
}