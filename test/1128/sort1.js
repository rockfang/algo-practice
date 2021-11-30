function insertSort(arr) {
	if (!Array.isArray(arr) || arr.length <= 1) {
		return
	}
	const size = arr.length
	for (let i = 1; i < size; i++) {
		const el = arr[i]
		let j = i - 1
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
const arr = [4, 1, 5, 3, 2]
console.log(arr)
insertSort(arr)
console.log(arr)
