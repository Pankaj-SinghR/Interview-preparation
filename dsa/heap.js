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

const heapObj = new Heap()
heapObj.insert(10)
heapObj.insert(20)
heapObj.insert(30)
heapObj.insert(23)
heapObj.insert(0)
heapObj.insert(40)

console.log(heapObj.heap)

