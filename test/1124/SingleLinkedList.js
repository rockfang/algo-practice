/**
 * 1) 单链表反转
 * 2) 链表中环的检测
 * 3) 两个有序的链表合并
 * 4) 删除链表倒数第n个结点
 * 5) 求链表的中间结点
 *
 */
class Node {
	constructor(val) {
		this.el = val
		this.next = null
	}
}

class SingleLinkedList {
	constructor() {
		this.head = new Node('head')
	}
	//通过值查找节点
	findByValue(val) {
		let currentNode = this.head
		while (currentNode.next !== null) {
			currentNode = currentNode.next
			if (currentNode.el === val) return currentNode
		}
		return null
	}
	//通过索引查找节点 index 从0开始
	findByIndex(index) {
		let currentNode = this.head
		let i = 0
		while (currentNode !== null && i <= index) {
			currentNode = currentNode.next
			i++
		}
		if (i == index + 1) {
			return currentNode
		} else {
			return null
		}
	}

	//追加元素
	append(val) {
		let newNode = new Node(val)
		let currentNode = this.head
		while (currentNode.next !== null) {
			currentNode = currentNode.next
		}
		currentNode.next = newNode
	}
	//把值差到指定值之后
	insert(preVal, val) {
		const currentNode = this.findByValue(preVal)
		if (currentNode == null) {
			throw Error(`不存在指定值${preVal}的节点`)
		}
		const newNode = new Node(val)
		newNode.next = currentNode.next
		currentNode.next = newNode
	}
	//删除
	remove(val) {
		const prevNode = this.findPrevNode(val)
		if (prevNode == null) {
			throw Error('不存在该值的节点')
		}
		prevNode.next = prevNode.next.next
	}
	//找寻指定值的前一个节点
	findPrevNode(val) {
		let prevNode = this.head
		while (prevNode.next !== null) {
			if (prevNode.next.el === val) {
				return prevNode
			}
			prevNode = prevNode.next
		}
		return null
	}

	display() {
		let currentNode = this.head
		while (currentNode.next !== null) {
			currentNode = currentNode.next
			console.log(currentNode.el)
		}
		console.log('----------------------------')
	}

	//删除链表倒数第n个结点 n 从0 开始
	removeByBackIndex(index) {
		this.reverse()
		let currentNode = this.findByIndex(index)
		if (currentNode == null) {
			throw Error(`倒数第 ${index} 个元素不存在`)
		}
		this.remove(currentNode.el)
		this.reverse()
	}

	findMiddleVal() {
		let fast = this.head
		let slow = this.head

		// 空链表
		if (fast.next == null) {
			return null
		}

		while (fast !== null && fast.next !== null) {
			fast = fast.next.next
			slow = slow.next
		}

		if (fast == null) {
			return slow.el
		}

		if (fast.next == null) {
			return [slow.el, slow.next.el]
		}
	}

	reverse() {
		if (this.checkCircle()) return
		let root = new Node('head')
		let currentNode = this.head.next
		while (currentNode !== null) {
			let next = currentNode.next
			currentNode.next = root.next
			root.next = currentNode
			currentNode = next
		}
		this.head = root
	}

	//检测环
	checkCircle() {
		let fast = this.head.next
		let slow = this.head
		while (fast !== null && fast.next !== null) {
			if (fast === slow) return true
			fast = fast.next.next
			slow = slow.next
		}
		return false
	}
}

function mergeSortedList(listA, listB) {
	const resultList = new SingleLinkedList()
	let currentNode = resultList.head
	while (listA !== null && listB !== null) {
		if (listA.el < listB.el) {
			currentNode.next = listA
			listA = listA.next
		} else {
			currentNode.next = listB
			listB = listB.next
		}
		currentNode = currentNode.next
	}

	if (listA == null) {
		currentNode.next = listB
	} else if (listB == null) {
		currentNode.next = listA
	}
	return resultList
}

//Test
const lList = new SingleLinkedList()
lList.append(1)
lList.append(2)
lList.append(3)
lList.append(4)
lList.display()
console.log(lList.findByIndex(4))
console.log(lList.findByValue(2))
lList.insert(2, 5)
lList.display()
lList.remove(1)
lList.remove(5)
lList.display() // 2 -> 3 -> 4
console.log(lList.checkCircle())
lList.reverse() // 4 -> 3 -> 2
lList.display()
lList.removeByBackIndex(0)
lList.display() // 4 -> 3
console.log(lList.findMiddleVal())
lList.append(2)
console.log(lList.findMiddleVal())

//检测合并
let listA = new SingleLinkedList()
listA.append(1)
listA.append(4)
listA.append(7)
listA.append(8)

let listB = new SingleLinkedList()
listB.append(2)
listB.append(3)
listB.append(6)
listB.append(11)
const mList = mergeSortedList(listA.head.next, listB.head.next)
mList.display()
