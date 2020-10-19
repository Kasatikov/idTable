class SimpleSearch {
    constructor(options) {
        this.list = options.list || [];
    }
    insert(v) {
        this.list.push(v);
        this.list = [...new Set(this.list)];
    }
    getItemIndex(v) {
        return this.list.findIndex((el) => {
            return el === v;
        })
    }
}


(function () {
    window.SimpleSearch = SimpleSearch;
})();

var simpleSearch = new SimpleSearch({list: []});
window.simpleSearch = simpleSearch;