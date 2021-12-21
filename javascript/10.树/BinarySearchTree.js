/**
 * 二叉查找树是最常用的一种二叉树
 * 它支持快速插入、删除、查找操作
 * 各个操作的时间复杂度跟树的高度成正比
 * 理想情况下，时间复杂度是 O(logn)
 */
class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null
	}

	find(num) {
		let p = this.root
		while (p !== null) {
			if (p.value === num) {
				break
			}
			if (num < p.value) {
				p = p.left
			} else {
				p = p.right
			}
		}
		return p
	}

	insert(num) {
		const newNode = new Node(num)
		let p = this.root
		if (this.root == null) {
			this.root = newNode
			return
		}
		//从根节点开始；比较值，小于取左值继续，大于取右值继续
		while (p !== null) {
			if (num <= p.value) {
				if (p.left == null) {
					p.left = newNode
					return
				}
				p = p.left
			} else {
				if (p.right == null) {
					p.right = newNode
					return
				}
				p = p.right
			}
		}
	}

	delete(num) {
		let p = this.root // p指向要删除的节点，初始化指向根节点
		let pp = null // pp记录的是p的父节点
		while (p !== null && p.value !== num) {
			pp = p
			if (num < p.value) {
				p = p.left
			} else {
				p = p.right
			}
		}
		if (p == null) return false //未找到要删除的数据
		// 包含左右节点
		if (p.left !== null && p.right !== null) {
			//找到p右节点最小节点 --> 找到右侧最小节点替换
			let minRight = p.right
			let minRightPP = p // minRight的父节点
			while (minRight !== null) {
				if (minRight.left !== null) {
					minRightPP = minRight
					minRight = minRight.left
				} else {
					break
				}
			}
			//替换节点
			p.data = minRight.data
			p = minRight
			pp = minRightPP
		}
		// 删除节点是叶子节点或者仅有一个子节点
		let child
		if (p.left !== null) {
			child = p.left
		} else if (p.right !== null) {
			child = p.right
		} else {
			child = null
		}

		if (pp == null) {
			this.root = child
		} else if (pp.left == p) {
			pp.left = child
		} else {
			pp.right = child
		}
		return true
	}

	findMax() {
		let p = this.root
		while (p.right !== null) {
			p = p.right
		}
		return p
	}

	findMin() {
		let p = this.root
		while (p.left !== null) {
			p = p.left
		}
		return p
	}
}
//Test
const b = new BinarySearchTree()
b.insert(5)
b.insert(3)
b.insert(7)
b.insert(4)
console.log(b)
console.log('--------------')

console.log(b.find(3))
console.log('--------------')
console.log(b.findMax())
console.log(b.findMin())
console.log('--------------')

const delResult = b.delete(7)
console.log('delResult: ', delResult)
console.log(b)
