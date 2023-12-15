/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    // Used the same basic construction as circular queue problem.
    // Also, we have 'this.sum' to keep a running summation of the elements.
    // Could have used 'this.elementCount' to track number of elements,
    // but opted for using a calculated value for 'elementCount' instead.
    this.size = size;
    this.q = []
    this.sum = 0;
    this.head = -1;
    this.tail = -1;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    let elementCount = 0;
    // If queue is full (adding another element will move tail 'on top of' head), then 'dequeue'
    if((this.tail+1)%this.size == this.head){
        // Remove value at 'head' location from sum
        this.sum = this.sum - this.q[this.head];
        // Dequeue by advancing head position
        this.head = (this.head+1)%this.size;
    }
    // Add val to sum
    this.sum = this.sum + val;
    // 'Enqueue' new value by advancing tail position and then adding val to array
    this.tail = (this.tail+1)%this.size;
    this.q[this.tail] = val;
    // For the very first 'enqueue', move head to 0
    if(this.head == -1) this.head=0;
    // Now, calculate total elements in queue
    if(this.head<=this.tail){ // head is before or at tail
        elementCount = this.tail-this.head+1
    } else { // tail has "wrapped"
        elementCount = this.tail+this.size-this.head+1
    }
    // Average = sum / elementCount;
    return this.sum/elementCount; 
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */