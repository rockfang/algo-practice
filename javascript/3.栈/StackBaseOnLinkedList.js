/**
 * 使用带头链表实现栈
 */ class Node {
	constructor(val) {
		this.el = val
		this.next = null
	}
}
class StackBasedOnLinkedList {
	constructor() {
		this.head = new Node('head')
	}
	// 头部添加
	push(val) {
		let currentNode = new Node(val)
		currentNode.next = this.head.next
		this.head.next = currentNode
	}

	// 移除元素
	pop() {
		const firstNode = this.head.next
		if (firstNode == null) {
			throw Error('栈中元素为空')
		}
		this.head.next = this.head.next.next
		return firstNode.el
	}

	display() {
		let currentNode = this.head
		while (currentNode.next !== null) {
			console.log(currentNode.next.el)
			currentNode = currentNode.next
		}
		console.log('------------------')
	}
}

const stack = new StackBasedOnLinkedList()
stack.push('a')
stack.push('b')
stack.push('c')
stack.push('d')
stack.display()
console.log(stack.pop())
console.log('--------------')
stack.display()
