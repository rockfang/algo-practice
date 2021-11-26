/**
 * 练习 链表翻转，合并
 */
class SingleLinkedList {
	constructor() {
		this.head = new Node('head')
	}

	append(val) {
		const newNode = new Node(val)
		let prevNode = this.head
		while (prevNode.next !== null) {
			prevNode = prevNode.next
		}

		prevNode.next = newNode
	}

	reverse() {
		const root = new Node('head')
		let currentNode = this.head.next
		while (currentNode !== null) {
			let next = currentNode.next
			currentNode.next = root.next
			root.next = currentNode
			currentNode = next
		}
		this.head = root
	}

	display() {
		console.log('--------display-----------')
		let currentNode = this.head.next
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

function mergeSortedList(l1, l2) {
	const resultList = new SingleLinkedList()
	let currentNode = resultList.head

	while (l1 !== null && l2 !== null) {
		if (l1.el < l2.el) {
			currentNode.next = l1
			l1 = l1.next
		} else {
			currentNode.next = l2
			l2 = l2.next
		}
		currentNode = currentNode.next
	}

	if (l1 !== null) {
		currentNode.next = l1
	}

	if (l2 !== null) {
		currentNode.next = l2
	}
	return resultList
}
//Test
const sList = new SingleLinkedList()
sList.append('a')
sList.append('b')
sList.append('c')
sList.append('d')
sList.display()

sList.reverse()
sList.display()

//合并
const listA = new SingleLinkedList()
listA.append(1)
listA.append(2)
listA.append(4)

const listB = new SingleLinkedList()
listB.append(3)
listB.append(7)
listB.append(8)

const rList = mergeSortedList(listA.head.next, listB.head.next)
rList.display()
