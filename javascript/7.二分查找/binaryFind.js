/**
 * 二分查找 循环实现
 * 数组必须有序 不存在重复
 */
function binaryFind(arr, val) {
	if (!Array.isArray(arr) || arr.length === 0) return -1
	let left = 0,
		right = arr.length - 1
	while (left <= right) {
		let middle = Math.floor(left + ((right - left) >>> 1))
		console.log(arr[middle] > val)
		if (arr[middle] === val) {
			return middle
		} else if (arr[middle] > val) {
			right = middle - 1
		} else {
			left = middle + 1
		}
	}
	return -1
}
/**
 * 二分查找 递归实现
 * 数组必须有序 不存在重复
 */
function _recBinaryFind(arr, left, right, val) {
	if (left > right) return -1
	let middle = Math.floor(left + ((right - left) >>> 1))
	if (arr[middle] === val) {
		return middle
	} else if (arr[middle] > val) {
		right = middle - 1
	} else {
		left = middle + 1
	}
	return _recBinaryFind(arr, left, right, val)
}

function recursiveBinaryFind(arr, val) {
	if (!Array.isArray(arr) || arr.length === 0) return -1
	return _recBinaryFind(arr, 0, arr.length - 1, val)
}

//Test
let testArr = [],
	i = 0
while (i < 100) {
	testArr[i] = i + 2
	i++
}
// const index = binaryFind(testArr, 55)
const index = recursiveBinaryFind(testArr, 55)
console.log('index', index)
