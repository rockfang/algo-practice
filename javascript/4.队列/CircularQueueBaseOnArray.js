/**
 * 用数组实现循环队列
 *  牺牲了一个空间，有效数据大小为size-1
 */
class CircularQueueBaseOnArray {
	constructor(size) {
		if (!Number.isInteger(size)) throw Error('参数非法')
		this.items = new Array(size)
		this.size = size
		this.head = 0
		this.tail = 0
	}

	enqueue(val) {
		if ((this.tail + 1) % this.size === this.head) {
			throw Error('队列满了')
		}
		this.items[this.tail] = val
		this.tail = (this.tail + 1) % this.size
	}

	dequeue() {
		if (this.head === this.tail) {
			throw Error('队列为空了')
		}
		const val = this.items[this.head]
		this.head = (this.head + 1) % this.size
		return val
	}

	display() {
		console.log('-------display-------')
		console.log(this.head, this.tail)

		for (
			let i = this.head;
			i % this.size != this.tail;
			i = (i + 1) % this.size
		) {
			console.log(this.items[i])
		}
		console.log('-------display-------')
	}
}
const circularQueue = new CircularQueueBaseOnArray(5) //有效数据为4个
circularQueue.enqueue('a')
circularQueue.enqueue('b')
circularQueue.enqueue('c')
circularQueue.enqueue('d')
// circularQueue.enqueue('e') //throw Error('队列满了')
circularQueue.display() // a b c d

console.log(circularQueue.dequeue()) //a
console.log(circularQueue.dequeue()) //b

circularQueue.enqueue('h')
circularQueue.display() // c d h
