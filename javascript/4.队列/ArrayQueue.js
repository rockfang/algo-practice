/**
 * 数组实现队列
 * 这里用指定长度方式(不使用js中Array封装的方法)
 * 数据搬移思路
 */
class ArrayQueue {
	constructor(size) {
		this.items = new Array(size)
		this.size = size //大小
		this.head = 0
		this.tail = 0
	}
	// 平均时间复杂度 O(1)   （均摊法）
	enqueue(val) {
		if (this.tail === this.size) {
			//对列满
			if (this.head === 0) {
				throw Error('队列已满')
			}
			//可搬迁
			for (let i = this.head; i < this.tail; i++) {
				this.items[i - this.head] = this.items[i]
			}
			this.tail = this.tail - this.head
			this.head = 0
		}
		this.items[this.tail] = val
		this.tail++
	}
	// 时间复杂度 O(1)
	dequeue() {
		if (this.size <= 0 || this.head === this.tail) {
			console.log(this.head, this.tail)
			throw Error('队列为空')
		}
		const deVal = this.items[this.head]
		this.head++
		return deVal
	}

	display() {
		console.log('-------display---------')
		for (let i = this.head; i < this.tail; i++) {
			console.log(this.items[i])
		}
		console.log('-------display---------')
	}
}

//Test
const queue = new ArrayQueue(5)
queue.enqueue('a')
queue.enqueue('b')
queue.enqueue('c')
queue.enqueue('d')
queue.enqueue('e')
queue.display() // a b c d e
// queue.enqueue('f') //throw Error('队列已满')
//出队
console.log(queue.dequeue()) //a
console.log(queue.dequeue()) //b
console.log(queue.dequeue()) //c
console.log(queue.dequeue()) //d
console.log(queue.dequeue()) //e
// console.log(queue.dequeue()) //throw Error('队列为空'
queue.display() // 空
queue.enqueue('f')
queue.display() //f
