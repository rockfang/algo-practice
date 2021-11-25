class CircularQueueBasedOnLinkedList {
	constructor() {
		this.head = null
		this.tail = null
	}

	enqueue(val) {
		const newNode = new Node(val)
		if (this.head === null) {
			this.head = newNode
			this.head.next = this.head
			this.tail = this.head
		} else {
			newNode.next = this.head
			this.tail.next = newNode
			this.tail = newNode
		}
	}

	dequeue() {
		if (this.head === null) {
			// throw Error('链表为空')
			return null
		}

		if (this.head === this.tail) {
			const val = this.head.el
			this.head = null
			this.tail = null
			return val
		}

		const val = this.head.el
		this.head = this.head.next
		this.tail.next = this.head
		return val
	}

	display() {
		let res
		console.log('-------获取dequeue元素------')
		while (res !== null) {
			res = this.dequeue()
			console.log(res)
		}
	}
}

class Node {
	constructor(val) {
		this.el = val
		this.next = null
	}
}
//Test
const circularQueue = new CircularQueueBasedOnLinkedList()
circularQueue.enqueue('a')
circularQueue.enqueue('b')

console.log(circularQueue.dequeue()) //a
console.log(circularQueue.dequeue()) //b
// console.log(circularQueue.dequeue()) //throw Error('链表为空')
circularQueue.enqueue('c')
circularQueue.enqueue('d')
circularQueue.display()
