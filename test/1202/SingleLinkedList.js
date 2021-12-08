class SingleLinkedList {
	constructor() {
		this.head = new Node('head')
	}

	findPrevNode(val) {
		let currentNode = this.head
		while (currentNode.next !== null) {
			if (currentNode.next.val === val) {
				return currentNode
			}
			currentNode = currentNode.next
		}
		return null
	}

	append(val) {
		let currentNode = this.head
		while (currentNode.next !== null) {
			currentNode = currentNode.next
		}
		currentNode.next = new Node(val)
	}

	remove(val) {
		const prevNode = this.findPrevNode(val)
		if (prevNode !== null) {
			prevNode.next = prevNode.next.next
			return true
		}
		return false
	}

	checkCircle() {
		let slow = this.head.next
		let fast = this.head.next
		if (slow == null) return false
		while (fast !== null && fast.next !== null) {
			slow = slow.next
			fast = fast.next.next
			if (slow === fast) {
				return true
			}
		}
		return false
	}

	reverse() {
		const root = new Node('head')
		let currentNode = this.head.next
		while (currentNode !== null) {
			const next = currentNode.next
			currentNode.next = root.next
			root.next = currentNode
			currentNode = next
		}
		this.head = root
	}

	display() {
		let currentNode = this.head.next
		console.log('--------display----------')
		while (currentNode !== null) {
			console.log(currentNode.val)
			currentNode = currentNode.next
		}
		console.log('--------display----------')
	}
}

class Node {
	constructor(val) {
		this.val = val
		this.next = null
	}
}
//Test
const list = new SingleLinkedList()
list.append('a')
list.append('b')
list.append('c')
list.append('d')
list.append('e')

list.display()

list.reverse()
list.display()

list.remove('c')
list.display()

console.log(list.checkCircle())
