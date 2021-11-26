/**
 * 练习 链表实现循环队列
 */
class CircularQueueBasedOnLinkedList {
	constructor() {
		this.head = null
		this.tail = null
	}
	//尾部加入元素
	enqueue(val) {
		const newNode = new Node(val)
		//单节点
		if (this.head == null) {
			this.head = newNode
			this.tail = this.head
			this.head.next = this.tail
			this.tail.next = this.head
			return
		}
		newNode.next = this.head
		this.tail.next = newNode
		this.tail = this.tail.next
	}
	//头部出队
	dequeue() {
		if (this.head === null) {
			console.log('队列为空')
			return null
		}
		//单个节点
		if (this.head === this.tail) {
			const val = this.head.val
			this.head = null
			this.tail = null
			return val
		}
		//删除头节点
		const val = this.head.el
		this.tail.next = this.head.next
		this.head = this.head.next
		return val
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
circularQueue.enqueue('c')
circularQueue.enqueue('d')

console.log(circularQueue)
console.log(circularQueue.dequeue())
console.log(circularQueue.dequeue())
console.log(circularQueue.dequeue())
console.log(circularQueue.dequeue())
console.log(circularQueue)
