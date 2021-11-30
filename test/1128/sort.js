function insertSort(arr) {
	if (!Array.isArray(arr) || arr.length <= 1) {
		return
	}
	let size = arr.length
	for (let i = 1; i < size; i++) {
		let j = i - 1
		let cur = arr[i]
		for (; j >= 0; j--) {
			if (arr[j] > cur) {
				arr[j + 1] = arr[j]
			} else {
				break
			}
		}
		arr[j + 1] = cur
	}
	return arr
}

console.log(insertSort([3, 1, 5, 2, 4]))
