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

	checkCircle() {
		let fastPos = this.head.next
		let slowPos = this.head
		while (fastPos !== null && fastPos.next !== null) {
			fastPos = fastPos.next.next
			slowPos = slowPos.next
			if (fastPos == slowPos) return true
		}
		return false
	}
	/**
	 * 再来一遍链表翻转
	 * 尾插法：
	 * 带头(哨兵)链表，头节点始终指向尾部的元素
	 */
	reverse2() {
		let head = new Node('head')
		let currentNode = this.head.next
		while (currentNode !== null) {
			let next = currentNode.next
			currentNode.next = head.next //新取出的元素指向尾部的元素 (尾插)
			head.next = currentNode // 哨兵指向新元素
			currentNode = next //新取出一个元素
		}
		this.head = head
	}
	//删除链表倒数第k个节点,k从1开始
	removeByIndexFromEnd(index) {
		if (index <= 0) {
			throw Error(`参数非法`)
		}
		if (sList.checkCircle()) return

		this.reverse2()
		let count = 1
		let prevNode = this.head
		//找到第index-1个元素
		while (prevNode.next !== null && count <= index - 1) {
			prevNode = prevNode.next
			count++
		}

		if (count !== index || prevNode.next == null) {
			throw Error(`倒数第${index}个元素不存在`)
		}
		prevNode.next = prevNode.next.next
		this.reverse2()
	}

	//求链表中间节点
	findMiddleNode() {
		if (this.checkCircle()) return
		//快慢指针
		let slow = this.head
		let fast = this.head
		while (fast !== null && fast.next !== null) {
			slow = slow.next
			fast = fast.next.next
		}

		if (fast == null) {
			return [slow]
		}
		//偶数节点
		if (fast.next == null) {
			return [slow, slow.next]
		}
	}
}
//两个有序列表合并(逆序)
function mergeSortedList(listA, listB) {
	if (listA == null || listB == null) return
	let a = listA
	let b = listB
	let resultList
	if (a.el > b.el) {
		resultList = a
		a = a.next
	} else {
		resultList = b
		b = b.next
	}

	let currentNode = resultList
	while (a != null && b != null) {
		console.log(a, b)
		if (a.el > b.el) {
			currentNode.next = a
			a = a.next
		} else {
			currentNode.next = b
			b = b.next
		}
		currentNode = currentNode.next
	}
	if (a != null) {
		currentNode.next = a
	}

	if (b != null) {
		currentNode.next = b
	}

	console.log('resultList', resultList)
	return resultList
}

//Test
const sList = new SingleLinkedList()
//添加
sList.append('legends')
sList.append('never')
sList.append('die')
sList.display() // legends -> never -> die
console.log('-------------------')
//翻转
sList.reverse2()
sList.display() // die -> never -> legends
// 检测是否为环
console.log(sList.checkCircle())
// 检测 删除倒数第k个元素

sList.removeByIndexFromEnd(1)
sList.display() // die -> never
//检测 找寻中间节点
sList.append('legends') // die -> never -> legends
console.log(sList.findMiddleNode()) //never
sList.append('just') // die -> never -> legends -> just
console.log(sList.findMiddleNode()) //[never,legends]

// 检测合并
const listA = new SingleLinkedList()
listA.append(20)
listA.append(18)
listA.append(15)
listA.append(13)

const listB = new SingleLinkedList()
listB.append(19)
listB.append(17)
listB.append(14)
listB.append(10)
let mergeList = mergeSortedList(listA.head.next, listB.head.next)

console.log('--------------------------')
while (mergeList !== null) {
	console.log(mergeList.el)
	mergeList = mergeList.next
}

listA.display()
