class BinarySearchTree {
	constructor() {
		this.tree = null
	}

	find(num) {
		let p = this.tree

		while (p !== null) {
			if (num == p.value) {
				return p
			} else if (num < p.value) {
				p = p.left
			} else {
				p = p.right
			}
		}
		return null
	}

	insert(num) {
		const node = new Node(num)
		if (this.tree == null) {
			this.tree = node
			return
		}

		let p = this.tree
		while (p !== null) {
			if (num <= p.value) {
				if (p.left == null) {
					p.left = node
					return
				}
				p = p.left
			} else {
				if (p.right == null) {
					p.right = node
					return
				}
				p = p.right
			}
		}
	}

	delete(num) {
		let p = this.tree
		let pp = null
		// 1. 找到要删除的节点
		while (p !== null && p.value !== num) {
			pp = p
			if (num < p.value) {
				p = p.left
			} else {
				p = p.right
			}
		}
		if (p == null) return false //未找到删除数据

		// 2. 处理删除节点有左右子节点情形 --> 与右最小节点【替换】
		// 替换：把最小节点值赋给p(覆盖了旧p节点)，让p指向找到的最小节点
		if (p.left !== null && p.right !== null) {
			let minP = p.right
			let minPP = p
			while (minP !== null) {
				if (minP.left !== null) {
					minPP = minP
					minP = minP.left
				} else {
					//minP为右侧最小节点
					p.value = minP.value
					p = minP
					pp = minPP
					break
				}
			}
		}

		//3. 处理无子节点 | 只有单个子节点下的删除
		let child = null
		if (p.left !== null) {
			child = p.left
		} else if (p.right !== null) {
			child = p.right
		}

		//删除节点为根节点
		if (pp == null) {
			this.tree = child
		} else if (pp.left == p) {
			//删除节点在左树
			pp.left = child
		} else {
			//删除节点在右树
			pp.right = child
		}

		return true
	}

	findMax() {
		let max = this.tree
		while (max !== null) {
			if (max.right !== null) {
				max = max.right
			} else {
				break
			}
		}
		return max
	}

	findMin() {
		let min = this.tree
		while (min !== null) {
			if (min.left !== null) {
				min = min.left
			} else {
				break
			}
		}
		return min
	}
}

class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
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

console.log('findMin', b.findMin())
console.log('findMax', b.findMax())

console.log(b.find(3))
console.log('--------------')
console.log(b.delete(7))
console.log(b)
console.log('--------------')
