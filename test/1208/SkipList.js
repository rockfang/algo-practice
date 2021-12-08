class SkipList {
	SKIPLIST_P = 0.5
	MAX_LEVEL = 16
	levelCount = 1

	constructor() {
		this.head = new Node()
	}
	// 理论来讲，一级索引中元素个数应该占原始数据的 50%，二级索引中元素个数占 25%，三级索引12.5% ，一直到最顶层。
	// 因为这里每一层的晋升概率是 50%。对于每一个新插入的节点，都需要调用 randomLevel 生成一个合理的层数。
	// 该 randomLevel 方法会随机生成 1~MAX_LEVEL 之间的数，且 ：
	// 50%的概率返回 1
	// 25%的概率返回 2
	// 12.5%的概率返回 3 ...
	randomLevel() {
		let level = 1
		while (Math.random() < this.SKIPLIST_P && level < this.MAX_LEVEL) {
			level += 1
		}
		return level
	}

	insert(val) {
		const level = this.randomLevel()
		const newNode = new Node(val, level)

		// 创建数组，存储要插入的maxLevel层链表的更新位置 (每层的前驱节点)
		const update = new Array(level).fill(this.head)
		let p = this.head
		for (let i = level - 1; i >= 0; i--) {
			while (p.forwards[i] && p.forwards[i].data < val) {
				p = p.forwards[i]
			}
			update[i] = p
		}

		// 每层都是单链表的插入操作；update[i] 为插入节点的前置节点， update[i].forwards[i]为后置节点
		for (let i = 0; i < level; i++) {
			newNode.forwards[i] = update[i].forwards[i]
			update[i].forwards[i] = newNode
		}

		if (this.levelCount < level) {
			this.levelCount = level
		}
	}

	find(val) {
		let p = this.head
		let i = this.levelCount - 1
		for (; i >= 0; i--) {
			while (p.forwards[i] && p.forwards[i].data < val) {
				p = p.forwards[i]
			}
		}
		//循环结束 p 就是小于val的最大节点了。
		if (p.forwards[0] && p.forwards[0].data == val) {
			return p.forwards[0]
		} else {
			return null
		}
	}

	delete(val) {
		let p = this.head
		const update = new Array(this.levelCount)
		for (let i = this.levelCount - 1; i >= 0; i--) {
			while (p.forwards[i] && p.forwards[i].data < val) {
				p = p.forwards[i]
			}
			update[i] = p
		}
		//判断节点存在
		if (p.forwards[0] && p.forwards[0].data == val) {
			//删除节点
			for (let i = this.levelCount - 1; i >= 0; i--) {
				if (update[i].forwards[i] && update[i].forwards[i].data === val) {
					update[i].forwards[i] = update[i].forwards[i].forwards[i]
				}
			}
		}
		// 处理层级数量
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
			console.log(p.forwards[0].data)
			p = p.forwards[0]
		}
	}
}

/**
 * 节点中 存三个属性：
 * 数据，所处多少个层级，保存其在每个层级的下一个节点
 */
class Node {
	constructor(value = -1, level = 0) {
		this.data = value
		this.maxLevel = level
		this.forwards = new Array(level).fill(null)
	}
}
//Test
test()
function test() {
	let list = new SkipList()
	let length = 20 //20000
	//顺序插入
	for (let i = 1; i <= 10; i++) {
		list.insert(i)
	}
	//输出一次
	list.printAll()
	console.time('create length-10')
	//插入剩下的
	for (let i = 11; i <= length - 10; i++) {
		list.insert(i)
	}
	console.timeEnd('create length-10')
	// //搜索 10次
	for (let j = 0; j < 10; j++) {
		let key = Math.floor(Math.random() * length + 1)
		console.log(key, list.find(key))
	}
	// //搜索不存在的值
	console.log('null:', list.find(length + 1))
	// //搜索5000次统计时间
	console.time('search 5000')
	for (let j = 0; j < 5000; j++) {
		let key = Math.floor(Math.random() * length + 1)
	}
	console.timeEnd('search 5000')
}
