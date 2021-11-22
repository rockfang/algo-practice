/*
 * 单链表实现一个简易LRU算法
 * 1. 只提供insert方法，从头部插入元素
 * 2. 超过SIZE时，从尾部移除元素再添加
 * 3. 每次访问元素(findByValue)后，把元素切换到头部
 */
class Node {
	constructor(el) {
		this.el = el
		this.next = null
	}
}

class LruLinkedList {
	constructor(size) {
		if (!size) {
			throw Error('size不能为空')
		}
		this.head = new Node('head')
		this.SIZE = size
	}
	//通过值找节点
	findByValue(val) {
		let currentNode = this.head.next
		while (currentNode !== null && currentNode.el != val) {
			currentNode = currentNode.next
		}
		//把节点移到头部
		if (currentNode !== null) {
			this.remove(currentNode.el)
			this.insert(currentNode.el)
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
	//判断链表是否满
	isListFull() {
		let currentNode = this.head
		let i = 0
		while (currentNode.next !== null) {
			i++
			currentNode = currentNode.next
		}
		return i === this.SIZE
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
	//从头部添加元素;若元素满，删除尾元素
	insert(val) {
		if (this.isListFull()) {
			this.removeByIndex(this.SIZE - 1)
		}
		const newNode = new Node(val)
		newNode.next = this.head.next
		this.head.next = newNode
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
const lruList = new LruLinkedList(5)
//添加
lruList.insert('legends')
lruList.insert('never')
lruList.insert('die')
lruList.display() // legends  -> never -> die
//访问(注意只对findByValue方法做了lru策略)
lruList.findByValue('never')
lruList.display() // never -> die -> legends
//继续添加 查过边界的数量（尾元素被抛弃）
lruList.insert('just')
lruList.insert('a')
lruList.insert('joke')
lruList.display() // joke -> a -> just -> never -> die
//测试查询不到，从其他地方拿到入局添加进LRU(一般而言有多级缓存：内存缓存  硬盘缓存 网络缓存等)
lruList.findByValue('gogogo')
lruList.display() // joke -> a -> just -> never -> die
lruList.insert('gogogo') // joke -> a -> just -> never -> die
lruList.display() // gogogo -> joke -> a -> just -> never
