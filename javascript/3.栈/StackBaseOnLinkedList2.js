/**
 * 使用一个top指针用(无头)链表实现栈
 */
class StackBasedOnLinkedList2 {
	constructor() {
		this.top = null
	}

	push(val) {
		const newNode = new Node(val)
		if (this.top === null) {
			this.top = newNode
		} else {
			newNode.next = this.top
			this.top = newNode
		}
	}
	// B -> A -> null
	pop() {
		if (this.top === null) return null
		const topVal = this.top.el
		this.top = this.top.next
		return topVal
	}
}
class Node {
	constructor(val) {
		this.el = val
		this.next = null
	}
}
//Test
const stack = new StackBasedOnLinkedList2()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack)

console.log(stack.pop()) //3
console.log(stack.pop()) //2
console.log(stack.pop()) //1
