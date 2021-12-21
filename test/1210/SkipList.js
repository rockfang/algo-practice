class SkipList {
	SKIPLIST_P = 0.5
	MAX_LEVEL = 16
	level_count = 1
	constructor() {
		this.head = new Node()
	}

	randomLevel() {
		let level = 1
		while (Math.random() > this.SKIPLIST_P && level <= this.MAX_LEVEL) {
			level += 1
		}
		return level
	}

	insert(val) {
		const level = this.randomLevel()
		const newNode = new Node(val, level)
		//存储每层要插入位置的前置节点
		const update = new Array(level).fill(this.head)
		let p = this.head
		for (let i = level - 1; i >= 0; i--) {
			while (p.forwards[i] && p.forwards[i].data < val) {
				p = p.forwards[i]
			}
			update[i] = p
		}
		//插入元素到每一层
		for (let i = level - 1; i >= 0; i--) {
			newNode.forwards[i] = update[i].forwards[i]
			update[i].forwards[i] = newNode
		}

		if (level > this.level_count) {
			this.level_count = level
		}
	}

	find(val) {
		let p = this.head
		for (let i = this.level_count - 1; i >= 0; i--) {
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
		for (let i = this.level_count - 1; i >= 0; i--) {
			while (p.forwards[i] && p.forwards[i].data < val) {
				p = p.forwards[i]
			}
		}
		//值不存在
		if (!p.forwards[0] || p.forwards[0].data !== val) {
			return false
		}
		//找到了节点
		console.log(p)
		for (let i = p.maxLevel - 1; i >= 0; i--) {
			p.forwards[i] = p.forwards[i].forwards[i]
		}

		//更新levelCount
		while (
			this.level_count > 1 &&
			this.head.forwards[this.level_count] === null
		) {
			this.level_count--
		}
		return true
	}

	printAll() {
		let p = this.head
		while (p.forwards[0]) {
			console.log(p.forwards[0].data)
			p = p.forwards[0]
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
