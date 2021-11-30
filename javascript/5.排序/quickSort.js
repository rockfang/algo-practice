/**
 * 快排
 *
 * 分区分完了，也就排完了
 */
function swap(arr, i, j) {
	const temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}
/**
 * 分区函数做了这几件事：
 * 1. 遍历一轮，把数据分区
 * 2. 把分区后的分区位置返回(作为下一次分区位置)
 */
function partition(arr, pivotIndex, left, right) {
	const pivot = arr[pivotIndex]
	let startIndex = left
	for (let i = left; i < right; i++) {
		if (arr[i] < pivot) {
			swap(arr, i, startIndex)
			startIndex++
		}
	}
	swap(arr, startIndex, pivotIndex)
	return startIndex
}
function _quickSort(arr, leftIndex, rightIndex) {
	if (leftIndex >= rightIndex) return
	let pivotIndex = rightIndex
	//找到分区索引
	let partitionIndex = partition(arr, pivotIndex, leftIndex, rightIndex)

	_quickSort(
		arr,
		leftIndex,
		partitionIndex - 1 < leftIndex ? leftIndex : partitionIndex - 1
	)
	_quickSort(
		arr,
		partitionIndex + 1 > rightIndex ? rightIndex : partitionIndex + 1,
		rightIndex
	)
}
function quickSort(arr) {
	if (!Array.isArray(arr) || arr.length <= 1) return

	_quickSort(arr, 0, arr.length - 1)
}
//Test
const testArr = []
let i = 0
while (i < 10) {
	testArr.push(Math.floor(Math.random() * 1000))
	i++
}
console.log('unsort', testArr)
quickSort(testArr, 0, testArr.length - 1)
console.log('sort', testArr)
