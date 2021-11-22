/**
 * 1) 单链表反转
 * 2) 链表中环的检测
 * 3) 两个有序的链表合并
 * 4) 删除链表倒数第n个结点
 * 5) 求链表的中间结点
 *
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
	/**
	 * 1. 单链表翻转
	 * 尾插法
	 * 插入时先把当前元素指向 哨兵指向的尾部元素
	 * 移动哨兵指针，使得哨兵头部指针始终指向最新的那个元素
	 */
	reverse() {
		let root = new Node('head')
		let currentNode = this.head.next
		while (currentNode != null) {
			let next = currentNode.next
			currentNode.next = root.next
			root.next = currentNode
			currentNode = next
		}
		this.head = root
	}
}
//Test
const sList = new SingleLinkedList()
//添加
sList.append('legends')
sList.append('never')
sList.append('die')

sList.display() // legends -> never -> die
//翻转
sList.reverse()
sList.display() // die -> never -> legends
