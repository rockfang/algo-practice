class SimpleStack {
	constructor(size) {
		this.size = size // 栈大小
		this.count = 0 // 元素数量
		this.items = Array(size).fill() //数组实现顺序栈
	}

	push(el) {
		if (this.count == this.size) return false
		this.items[this.count] = el
		this.count++
		return true
	}
	pop() {
		if (this.count === 0) {
			throw Error('栈中元素为空')
		}
		const result = this.items[this.count - 1]
		this.count--
		return result
	}
}
//Test
const stack = new SimpleStack(5)
stack.push(1)
stack.push(2)
stack.push(true)
stack.push('hi')
stack.push(5)

console.log(stack)
console.log(stack.pop())
console.log('-------------')
console.log(stack) //实际通过count控制访问
