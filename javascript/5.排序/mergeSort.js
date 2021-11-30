/**
 * 归并排序，使用js数组封装的slice,concat等方法
 */

function merge(left, right) {
	let temp = [],
		leftIndex = 0,
		rightIndex = 0,
		leftSize = left.length,
		rightSize = right.length

	while (leftIndex < leftSize && rightIndex < rightSize) {
		if (left[leftIndex] < right[rightIndex]) {
			temp.push(left[leftIndex])
			leftIndex++
		} else {
			temp.push(right[rightIndex])
			rightIndex++
		}
	}
	return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

function mergeSort(arr) {
	if (!Array.isArray(arr) || arr.length <= 1) {
		return arr
	}

	const middle = Math.floor(arr.length / 2)
	const left = arr.slice(0, middle)
	const right = arr.slice(middle)
	return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([1, 7, 2, 5, 3, 8, 4, 9, 10]))
