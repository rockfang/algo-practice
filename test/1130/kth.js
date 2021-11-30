/**
 * 求一个无序数组中第k大元素，要求时间复杂度O(n)
 * 快排思路。找到partition的位置p
 * 若 p > k 继续去左边找，若p < k去右侧找。 重复此操作指导p = k
 * O = n + n/2 + n/4+...+1 =
 */
function swap(arr, i, j) {
	if (i === j) return
	const temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}
function partition(arr, left, right) {
	const pivot = arr[right]
	let slow = left
	for (let i = left; i < right; i++) {
		if (arr[i] > pivot) {
			swap(arr, slow, i)
			slow++
		}
	}
	swap(arr, slow, right)
	return slow
}
function kthNum(arr, k) {
	const size = arr.length
	if (k > size) return -1
	let p = partition(arr, 0, size - 1)
	while (p !== k - 1) {
		if (p < k - 1) {
			p = partition(arr, p + 1, size - 1)
		} else {
			p = partition(arr, 0, p - 1)
		}
	}
	return arr[p]
}

let testArr = [31, 2, 5, 4, 22, 15]
console.log(testArr)
console.log(kthNum(testArr, 3))
