/*
 * 1）单链表的插入、删除、查找操作；
 * 2）链表不考虑值重复
 */
class Node {
	constructor(el) {
		this.el = el
		this.next = null
	}
}

class SingleLinkedList {
	constructor() {
		this.head = new Node('head')
	}
	//通过值找节点
	findByValue(val) {
		let currentNode = this.head.next
		while (currentNode !== null && currentNode.el != val) {
			currentNode = currentNode.next
		}
		return currentNode // null or get node
	}
	//通过索引找节点 index从0开始
	findByIndex(index) {
		if (index < 0) {
			throw Error('索引非法')
		}
		let currentNode = this.head
		let i = 0
		while (i <= index && currentNode !== null) {
			currentNode = currentNode.next
			i++
		}

		return currentNode // null or get node
	}
	//追加元素
	append(newVal) {
		const appendNode = new Node(newVal)
		let currentNode = this.head
		while (currentNode.next !== null) {
			currentNode = currentNode.next
		}
		currentNode.next = appendNode
	}
	//指定元素后插入元素
	insert(val, newVal) {
		const currentNode = this.findByValue(val)
		if (currentNode == null) {
			throw Error('链表中不存在该值')
		}
		const newEl = new Node(newVal)
		newEl.next = currentNode.next
		currentNode.next = newEl
	}
	//找到元素的前一个节点
	findPrev(val) {
		let currentNode = this.head
		while (currentNode.next !== null) {
			if (currentNode.next.el === val) {
				return currentNode
			}
			currentNode = currentNode.next
		}
		return null
	}
	//根据值移除
	remove(val) {
		const prevNode = this.findPrev(val)
		if (prevNode == null) {
			console.log('不存在该值的节点')
			return
		}
		prevNode.next = prevNode.next.next
	}

	//根据索引移除 index 从0 开始
	removeByIndex(index) {
		//特殊处理头节点
		if (index === 0) {
			this.head.next = this.head.next.next
			return
		}

		const prevNode = this.findByIndex(index - 1)
		prevNode.next = prevNode.next.next
	}

	//遍历显示所有节点
	display() {
		let currentNode = this.head.next
		let index = 0
		while (currentNode !== null) {
			console.log(`index:${index} el: ${currentNode.el}`)
			currentNode = currentNode.next
			index++
		}
	}
}
//Test
const sList = new SingleLinkedList()
//添加
sList.append('legends')
sList.append('never')
sList.append('die')
sList.insert('legends', 'just')
sList.insert('die', 'joke')
sList.display() // legends -> just -> never -> die -> joke
//移除
sList.remove('never')
sList.display() // legends -> just -> die -> joke
sList.removeByIndex(3)
sList.display() // legends -> just -> die
//查询
const node = sList.findByValue('just')
console.log(node) //Node { el: 'just', next: Node { el: 'die', next: null } }
console.log(sList.findByValue('a')) //null
console.log(sList.findByIndex(2)) //{ el: 'die', next: null }

console.log(sList.findPrev('die')) //Node { el: 'just', next: Node { el: 'die', next: null } }
