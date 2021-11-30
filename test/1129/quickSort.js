function swap(arr, i, j) {
	const temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}
function partition(arr, pivotIndex, left, right) {
	const pivot = arr[pivotIndex]
	let startIndex = left
	for (let i = left; i < right; i++) {
		if (arr[i] < pivot) {
			swap(arr, startIndex, i)
			startIndex++
		}
	}
	swap(arr, startIndex, pivotIndex)
	return startIndex
}
function _quickSort(arr, left, right) {
	if (left >= right) return // why??  终止条件
	const pivotIndex = right
	const partitionIndex = partition(arr, pivotIndex, left, right)
	_quickSort(arr, left, partitionIndex - 1 < left ? left : partitionIndex - 1)
	_quickSort(
		arr,
		partitionIndex + 1 > right ? right : partitionIndex + 1,
		right
	)
}

function quickSort(arr) {
	if (!Array.isArray(arr) || arr.length <= 1) return
	_quickSort(arr, 0, arr.length - 1)
}

//Test
let testArr = []
for (let i = 0; i < 10; i++) {
	testArr.push(Math.floor(Math.random() * 1000))
}
console.log(testArr)
quickSort(testArr)
console.log(testArr)
