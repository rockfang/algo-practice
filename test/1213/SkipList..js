class SkipList {
	SKIPLIST_P = 0.5
	MAX_LEVEL = 16
	levelCount = 0
	constructor() {
		this.head = new Node()
	}

	randomLevel() {
		let level = 1
		while (Math.random() < this.SKIPLIST_P && level < this.MAX_LEVEL) {
			level += 1
		}
		return level
	}

	insert(val) {
		const newNode = new Node(val)
		const level = this.randomLevel()
		const update = new Array(level).fill(this.head)
		let p = this.head
		// 找到插入位置前置节点
		for (let i = level - 1; i >= 0; i--) {
			while (p.forwards[i] && p.forwards[i].data < val) {
				p = p.forwards[i]
			}
			update[i] = p
		}
		// 插入元素
		for (let i = level - 1; i >= 0; i--) {
			newNode.forwards[i] = update[i].forwards[i]
			update[i].forwards[i] = newNode
		}

		// 更新levelCount
		if (this.levelCount < level) {
			this.levelCount = level
		}
	}

	find(val) {
		let p = this.head
		for (let i = this.levelCount - 1; i >= 0; i--) {
			while (p.forwards[i] && p.forwards[i].data < val) {
				p = p.forwards[i]
			}
		}

		if (p.forwards[0] && p.forwards[0].data === val) {
			return p.forwards[0]
		}
		return null
	}

	delete(val) {
		let p = this.head
		const update = new Array(this.levelCount).fill(null)
		for (let i = this.levelCount - 1; i >= 0; i--) {
			while (p.forwards[i] && p.forwards[i].data < val) {
				p = p.forwards[i]
			}
			update[i] = p
		}
		//删除元素。注意这里p是第0层的前置元素.update中存了每一层的前置元素
		for (let i = this.levelCount - 1; i >= 0; i--) {
			if (
				update[i] &&
				update[i].forwards[i] &&
				update[i].forwards[i].data === val
			) {
				update[i].forwards[i] = update[i].forwards[i].forwards[i]
			}
		}

		while (
			this.levelCount > 1 &&
			this.head.forwards[this.levelCount] === null
		) {
			this.levelCount--
		}
	}

	printAll() {
		let p = this.head
		while (p.forwards[0]) {
			p = p.forwards[0]
			console.log(p.data)
		}
	}
}

class Node {
	constructor(val = -1, maxLevel = 0) {
		this.data = val
		this.maxLevel = maxLevel
		this.forwards = new Array(maxLevel).fill(null)
	}
}
//Test
test()
function test() {
	const list = new SkipList()
	const length = 200 //20000
	for (let i = 1; i <= 10; i++) {
		list.insert(i)
	}
	// list.printAll()
	console.time('create length-10')
	for (let i = 11; i <= length; i++) {
		list.insert(i)
	}
	console.timeEnd('create length-10')
	// list.printAll()

	// for (let i = 11; i <= length - 10; i++) {
	// 	let key = Math.floor(Math.random() * length + 1)
	// 	console.time(`find ${key}`)
	// 	console.log(key, list.find(key))
	// 	console.timeEnd(`find ${key}`)
	// }
	// //搜索不存在的值
	// console.log('null', list.find(length + 1))
	// //搜索5000次统计时间
	// console.time('search 5000')
	// for (let j = 0; j < 5000; j++) {
	// 	let key = Math.floor(Math.random() * length + 1)
	// 	console.log(key, list.find(key))
	// }
	// console.timeEnd('search 5000')
	//测试删除
	console.log('============start==================')
	list.delete(88)
	list.delete(100)
	list.printAll()
	console.log('============end==================')
}
