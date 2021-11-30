function bubbleSort(arr) {
	if (!Array.isArray(arr) || arr.length <= 1) {
		return false
	}
	let size = arr.length
	for (let i = 0; i < size - 1; i++) {
		let ordered = true // 假定每轮比较之前已经有序
		for (let j = i + 1; j < size; j++) {
			if (arr[i] > arr[j]) {
				ordered = false
				let temp = arr[i]
				arr[i] = arr[j]
				arr[j] = temp
			}
		}
		if (ordered) return //有序后不再继续冒泡
	}
}

function insertSort(arr) {
	if (!Array.isArray(arr) || arr.length <= 1) {
		return
	}

	const size = arr.length
	for (let i = 1; i < size; i++) {
		//移动元素
		let j = i - 1
		let el = arr[i]
		for (; j >= 0; j--) {
			if (arr[j] > el) {
				arr[j + 1] = arr[j]
			} else {
				break
			}
		}
		arr[j + 1] = el
	}
}

function selectSort(arr) {
	if (!Array.isArray(arr) || arr.length <= 1) {
		return
	}
	let size = arr.length
	for (let i = 0; i < size - 1; i++) {
		let minIndex = i
		for (let j = i + 1; j < size; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j
			}
		}
		if (minIndex === i) continue //最小索引就是当前元素时不用再交换操作
		let temp = arr[i]
		arr[i] = arr[minIndex]
		arr[minIndex] = temp
	}
}

//Test
const arr = [5, 2, 4, 1, 9]
insertSort(arr)
console.log(arr)

const arr2 = [5, 2, 4, 1, 9]
bubbleSort(arr2)
console.log(arr2)

const arr3 = [5, 2, 4, 1, 9]
selectSort(arr3)
console.log(arr3)
