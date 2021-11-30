/**
 * 快排。 找pivot 分区 每次分区排好一个位置(partition).再对partition两侧的数组进行重复操作
 * 递推公式 quickSort(arr,p,r) = quickeSort(arr,p,partition) + quickSort(arr,partition+1,r)
 * 终止条件 p >= r
 */

function swap(arr, i, j) {
	if (i === j) return
	const temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}
function partition(arr, left, right, pivotIndex) {
	let slow = left,
		pivot = arr[pivotIndex]

	for (let i = left; i < right; i++) {
		if (arr[i] < pivot) {
			swap(arr, i, slow)
			slow++
		}
	}
	swap(arr, slow, pivotIndex)
	return slow
}

function _quickSort(arr, left, right) {
	if (left === right) return
	const pivotIndex = right
	let p = partition(arr, left, right, pivotIndex)

	_quickSort(arr, left, p - 1 < left ? left : p - 1)
	_quickSort(arr, p + 1 > right ? right : p + 1, right)
}
function quickSort(arr) {
	if (!Array.isArray(arr) || arr.length <= 1) return

	_quickSort(arr, 0, arr.length - 1)
}

//Test
let testArr = []
let i = 0
while (i < 10) {
	testArr.push(Math.floor(Math.random() * 1000))
	i++
}
console.log(testArr)
quickSort(testArr)
console.log(testArr)
