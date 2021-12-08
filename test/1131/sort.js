/**
 * 插入排序
 * 时间复杂度O(n^2)  空间复杂度O(1)（原地排序）
 * 稳定排序算法
 * 基于比较
 */
function insertSort(arr) {
	if (!Array.isArray || arr.length <= 1) return
	for (let i = 1; i < arr.length; i++) {
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
/**
 * 归并排序
 * 时间复杂度O(nlogn)
 * 空间复杂度O(n)
 * 稳定排序算法
 * 基于比较
 */
//归并 start
function merge(left, right) {
	let i = 0,
		j = 0,
		temp = []
	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			temp.push(left[i++])
		} else {
			temp.push(right[j++])
		}
	}

	return temp.concat(left.slice(i)).concat(right.slice(j))
}

function mergeSort(arr) {
	if (!Array.isArray(arr) || arr.length <= 1) return arr
	//merge
	const middle = Math.floor(arr.length / 2)
	const left = arr.slice(0, middle)
	const right = arr.slice(middle)
	return merge(mergeSort(left), mergeSort(right))
}
//归并 end

/**
 * 快排
 * 时间复杂度O(nlogn)
 * 空间复杂度O(1)
 * 非稳定排序
 * 基于比较
 */
//快排 start
function swap(arr, i, j) {
	if (i === j) return
	const temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}

function partition(arr, left, right) {
	const pivotIndex = right
	const pivot = arr[pivotIndex]
	let slow = left
	for (let i = left; i < right; i++) {
		if (arr[i] < pivot) {
			swap(arr, slow, i)
			slow++
		}
	}
	swap(arr, slow, pivotIndex)
	return slow
}
function _qSort(arr, left, right) {
	if (left === right) return
	const p = partition(arr, left, right)
	_qSort(arr, left, p - 1 <= left ? left : p - 1)
	_qSort(arr, p + 1 >= right ? right : p + 1, right)
}

function qSort(arr) {
	if (!Array.isArray(arr) || arr.length <= 1) return
	const size = arr.length
	_qSort(arr, 0, size - 1)
}
//快排 end

//Test
let testArr = []
let i = 0
while (i < 10) {
	testArr[i] = Math.floor(Math.random() * 1000)
	i++
}
console.log(testArr)
// insertSort(testArr)
// testArr = mergeSort(testArr)
qSort(testArr)
console.log(testArr)
