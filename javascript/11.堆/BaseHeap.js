class BaseHeap {
	constructor(capacity) {
		this.arr = new Array(capacity + 1)
		this.capacity = capacity
		this.count = 0
	}

	insert(num) {
		if (this.count >= this.capacity) {
			throw Error('堆满了')
		}
		this.count++
		this.arr[this.count] = num
		let i = this.count
		// const j = Math.floor(i / 2) //父节点
		while (Math.floor(i / 2) > 0 && this.arr[i] > this.arr[Math.floor(i / 2)]) {
			this.swap(this.arr, i, Math.floor(i / 2))
			i = Math.floor(i / 2)
		}
	}

	swap(arr, i, j) {
		const temp = arr[i]
		arr[i] = arr[j]
		arr[j] = temp
	}

	print() {
		console.log(this.arr)
	}
}

//Test
const h = new BaseHeap(10)
h.insert(1)
h.insert(2)
h.insert(4)
h.insert(5)
h.insert(6)
h.insert(7)
h.print()
