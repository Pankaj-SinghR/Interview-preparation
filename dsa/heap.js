function Heap() {
	this.heap = []
}

Heap.prototype.getParent = function(index) {
	return Math.floor((index - 1) / 2)
}

Heap.prototype.getLeft = function(index) {
	return 2 * index + 1
}

Heap.prototype.getRight = function(index) {
	return 2 * index + 2
}

Heap.prototype.insert = function(val) {
	this.heap.push(val)
	this.heapifyUp(this.heap.length - 1)
}

Heap.prototype.extractMin = function() {
	if(!this.heap.length) return null
	if(this.heap.length === 1) return this.heap.pop()
	// more the 1 element
	const val = this.heap[0]
	this.heap[0] = this.heap.pop()
	this.heapifyDown(0)
	return val
}

Heap.prototype.swap = function(index1, index2) {
	const temp = this.heap[index1]
	this.heap[index1] = this.heap[index2]
	this.heap[index2] = temp
}

Heap.prototype.heapifyUp = function(index) {
	if (index === 0) return
	//this is implemented a min heap, the parent will always be smaller then childern
	if (this.heap[this.getParent(index)] > this.heap[index]) {
		this.swap(this.getParent(index), index)
		this.heapifyUp(this.getParent(index))
	}
}

Heap.prototype.heapifyDown = function(index) {
	let min = index
	let left = this.getLeft(index)
	let right = this.getRight(index)
	if(left < this.heap.length && this.heap[left] < this.heap[index]){
		min = left
	}
	if(right < this.heap.length && this.heap[right] < this.heap[index]){
		min = right 
	}

	if(min !== index){
		this.swap(min, index)
		this.heapifyDown(min)
	}
}

const heapObj = new Heap()
heapObj.insert(10)
heapObj.insert(20)
heapObj.insert(30)
heapObj.insert(23)
heapObj.extractMin()
heapObj.insert(0)
heapObj.extractMin()
heapObj.insert(40)

console.log(heapObj.heap)

