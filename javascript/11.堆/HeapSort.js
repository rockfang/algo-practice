class HeapSort {
	constructor(originArr) {
		this.originArr = originArr
	}
	//且认为传入数据第一个元素就是空的。这里传入数据第一个元素用-1占位
	heapify2() {
		let arr = this.originArr
		//堆 [3,]
		for (let i = 2; i < arr.length; i++) {
			while (Math.floor(i / 2) > 0 && arr[i] > arr[Math.floor(i / 2)]) {
				//swap
				const temp = arr[i]
				arr[i] = arr[Math.floor(i / 2)]
				arr[Math.floor(i / 2)] = temp
				i = Math.floor(i / 2)
			}
		}
	}
	/**
	 * 我们对下标从 n/2​ 开始到 1 的数据进行堆化，
	 * 下标是 n/2 + 1 到 n 的节点是叶子节点，我们不需要堆化。
	 * 实际上，对于完全二叉树来说，下标从 n/2 + 1 到 n 的节点都是叶子节点。
	 */
	buildHeap() {
		const startIndex = Math.floor(this.originArr.length / 2)
		for (let i = startIndex; i >= 1; i--) {
			this.heapify(this.originArr, this.originArr.length, i)
		}
	}
	//堆化。 让堆中索引为i的子树满足堆的特性
	heapify(arr, len, i) {
		while (true) {
			let maxPos = i
			if (2 * i <= len && arr[i] < arr[2 * i]) {
				maxPos = 2 * i
			}
			if (2 * i + 1 <= len && arr[maxPos] < arr[2 * i + 1]) {
				maxPos = 2 * i + 1
			}
			if (maxPos == i) break
			this.swap(arr, i, maxPos)
			i = maxPos
		}
	}
	//堆化后。移除最大元素
	removeMax() {
		if (!this.originArr || this.originArr.length === 0) return false
		let count = this.originArr.length - 1
		this.originArr[1] = this.originArr[count]
		--count
		this.originArr = this.originArr.slice(0, count)
		this.heapify(this.originArr, this.originArr.length, 1)
	}

	swap(arr, i, j) {
		const temp = arr[i]
		arr[i] = arr[j]
		arr[j] = temp
	}
	//type 'desc' 降序 'asc' 升序
	sort(type) {
		this.buildHeap() //建堆
		if (type == 'desc') {
			return
		}
		//大顶堆和小顶堆变换
		if (type == 'asc') {
			let len = this.originArr.length - 1
			while (len > 1) {
				this.swap(this.originArr, 1, len) //堆顶元素与最末元素交换
				len--
				this.heapify(this.originArr, len, 1) //堆化除了最后一个元素之外的tree
			}
		}
	}

	print() {
		console.log('-------------------')
		console.log(this.originArr)
	}
}

//Test
// let arr = [-1] //占位第一个元素
// for (let i = 0; i < 10; i++) {
// 	const random = Math.floor(Math.random() * 30)
// 	arr.push(random)
// }
// console.log(arr)
// console.log('-----------------')
// const h = new HeapSort(arr)
// h.heapify2()
// h.print()
// ====================
let arr2 = [-1] //
for (let i = 0; i < 10; i++) {
	const random = Math.floor(Math.random() * 30)
	arr2.push(random)
}
console.log(arr2)
const h = new HeapSort(arr2)
h.buildHeap()
h.print()
// h.removeMax()
// h.print()
h.sort('asc')
h.print()
