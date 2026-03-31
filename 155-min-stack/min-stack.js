


var MinStack = function () {
    this.arr = [];
    this.aux = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    // this.arr.push(val);
    if(this.arr.length === 0){
        this.arr.push(val)
        this.aux.push(val);
        return;
    }

    this.arr.push(val);
    if(this.aux[this.aux.length - 1] >= val){
        this.aux.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    // return this.arr.pop();
    

    if(this.arr[this.arr.length - 1] == this.aux[this.aux.length - 1]){
        this.aux.pop()
    }
    return this.arr.pop()

};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    var res = this.arr[this.arr.length - 1]
    return res
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if (this.arr.length === 0) return -1;
    // let min = this.arr[0];

    // for(let i=1; i<this.arr.length;i++){
    //     if(this.arr[i] < min){
    //         min = this.arr[i]
    //     }
    // }
    // return min
    return this.aux[this.aux.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */