/**
 * 链表实现队列
 * 采用无头链表
 * 使用tai指针作用是，在enqueue时不用再遍历链表找到尾节点了
 */
class QueueBasedOnLinkedList {
	constructor() {
		this.head = null
		this.tail = null
	}
	// 时间复杂度 O(1)
	enqueue(val) {
		const newNode = new Node(val)
		if (this.head == null) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.tail.next = newNode
			this.tail = newNode
		}
	}
	// 时间复杂度 O(1)
	dequeue() {
		if (this.head == null) {
			throw Error('队列为空了')
		}

		const val = this.head.el
		this.head = this.head.next
		return val
	}

	display() {
		console.log('--------display-----------')
		let currentNode = this.head
		while (currentNode !== null) {
			console.log(currentNode.el)
			currentNode = currentNode.next
		}
		console.log('--------display-----------')
	}
}
class Node {
	constructor(val) {
		this.el = val
		this.next = null
	}
}
//Test
const queue = new QueueBasedOnLinkedList()
queue.enqueue('a')
queue.enqueue('b')
queue.enqueue('c')
queue.display() // a b c

console.log(queue.dequeue()) //a
console.log(queue.dequeue()) //b
console.log(queue.dequeue()) //c
// console.log(queue.dequeue()) //throw Error('队列为空了')
