/**
 * 练习 数组实现循环队列
 *
 * 下一个位置 (this.tail + 1) % this.size
 */
class CircularQueueBasedOnArray {
	constructor(size) {
		if (!Number.isInteger(size)) {
			throw Error('参数异常')
		}
		this.size = size
		this.head = 0
		this.tail = 0
		this.items = new Array(size)
	}

	enqueue(val) {
		// 队满
		if ((this.tail + 1) % this.size === this.head) {
			console.log('入队失败,队满')
			return false
		}

		this.items[this.tail] = val
		this.tail = (this.tail + 1) % this.size
	}

	dequeue() {
		//队空
		if (this.head === this.tail) {
			return null
		}
		const val = this.items[this.head]
		this.head = (this.head + 1) % this.size
		return val
	}

	display() {
		console.log('------------display------------')
		let cur = this.head
		while (cur !== this.tail) {
			console.log(this.items[cur])
			cur = (cur + 1) % this.size
		}
		console.log('------------display------------')
	}
}
//Test
const circularQueue = new CircularQueueBasedOnArray(6)
circularQueue.enqueue('a')
circularQueue.enqueue('b')
circularQueue.enqueue('c')
circularQueue.enqueue('d')
circularQueue.enqueue('e')
circularQueue.display()
console.log(circularQueue.dequeue())
console.log(circularQueue.dequeue())
circularQueue.display()
