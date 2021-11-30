/**
 * 第 k 大元素
 */
function swap(arr, i, j) {
	let temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}
function partition(arr, left, right) {
	const pivot = arr[right]
	let startIndex = left //起始索引。注意当不满足for循环条件时，也返回它(即单个元素返回本身)
	for (let i = left; i < right; i++) {
		if (arr[i] > pivot) {
			swap(arr, i, startIndex)
			startIndex++
		}
	}
	swap(arr, startIndex, right)
	return startIndex
}

function kthNum(arr, k) {
	const size = arr.length
	if (k > size) {
		return -1
	}
	//找到分区元素所在索引
	let p = partition(arr, 0, size - 1)
	while (p + 1 !== k) {
		if (p + 1 < k) {
			p = partition(arr, p + 1, size - 1) //在右侧
		} else {
			p = partition(arr, 0, p - 1) //在左侧
		}
	}
	return arr[p]
}
//test
const arr = [1, 7, 2, 5, 3, 8, 4, 9, 6]
//第3大元素
console.log(kthNum(arr, 3))
