// 首尾指针方式。 二分查找到元素。
// 比较元素左侧元素是否等于当前值
// 相等则以左值作为二分查找的有元素继续

/**
 * 查找第一个值等于给定值的元素
 * 数组有序，可重复
 */
function binaryFindFirst(arr, val) {
	if (!Array.isArray(arr) || arr.length === 0) return -1
	let left = 0,
		right = arr.length - 1
	while (left <= right) {
		const middle = Math.floor(left + ((right - left) >>> 1))

		if (arr[middle] === val) {
			if (middle === 0 || arr[middle - 1] < val) return middle
			right = middle - 1
		} else if (arr[middle] > val) {
			right = middle - 1
		} else {
			left = middle + 1
		}
	}
	return -1
}
/**
 * 查找最后一个等于给定值的元素
 * 数组有序，可重复
 */
function binaryFindLast(arr, val) {
	if (!Array.isArray(arr) || arr.length === 0) return -1
	let left = 0,
		right = arr.length - 1
	while (left <= right) {
		const middle = Math.floor(left + ((right - left) >>> 1))
		if (arr[middle] === val) {
			if (middle === arr.length - 1 || arr[middle + 1] > val) return middle
			//元素在middle
			left = middle + 1
		} else if (arr[middle] > val) {
			right = middle - 1
		} else {
			left = middle + 1
		}
	}
	return -1
}
/**
 * 查找第一个大于给定值的元素
 * 数组有序，可重复
 */
function binaryFindFirstBig(arr, val) {
	if (!Array.isArray(arr) || arr.length === 0) return -1
	let left = 0,
		right = arr.length - 1
	while (left <= right) {
		const middle = Math.floor(left + ((right - left) >>> 1))
		if (arr[middle] >= val) {
			if (middle === 0 || arr[middle - 1] < val) return middle
			right = middle - 1
		} else {
			left = middle + 1
		}
	}
	return -1
}

/**
 * 查找最后一个小于等于给定值的元素
 * 数组有序，可重复
 */
function binaryFindLastSmall(arr, val) {
	if (!Array.isArray(arr) || arr.length === 0) return -1
	let left = 0,
		right = arr.length - 1
	while (left <= right) {
		const middle = Math.floor(left + ((right - left) >>> 1))
		if (arr[middle] <= val) {
			if (middle + 1 === arr.length || arr[middle + 1] > val) return middle
			left = middle + 1
		} else {
			right = middle - 1
		}
	}
	return -1
}

let testArr = [1, 2, 2, 3, 3, 4, 5, 5, 7, 7, 8, 8, 8, 9, 10]
const firstIndex = binaryFindFirst(testArr, 8)
console.log('first', firstIndex)
const lastIndex = binaryFindLast(testArr, 8)
console.log('last', lastIndex)

const firstBigIndex = binaryFindFirstBig(testArr, 6)
console.log('firstBig', firstBigIndex, testArr[firstBigIndex])

const lastSmallIndex = binaryFindLastSmall(testArr, 7)
console.log('lastSmall', lastSmallIndex, testArr[lastSmallIndex])
