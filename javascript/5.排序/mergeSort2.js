/**
 * 归并排序
 * 仅利用数组的随机访问特性实现
 */
function merge(arr, p, m, r) {
	let leftIndex = p,
		rightIndex = m + 1,
		temp = new Array(r - p + 1),
		tIndex = 0

	while (leftIndex <= m && rightIndex <= r) {
		if (arr[leftIndex] < arr[rightIndex]) {
			temp[tIndex++] = arr[leftIndex++]
		} else {
			temp[tIndex++] = arr[rightIndex++]
		}
	}
	//剩余数据处理
	let start = leftIndex,
		end = m
	if (rightIndex <= r) {
		start = rightIndex
		end = r
	}
	while (start <= end) {
		temp[tIndex++] = arr[start++]
	}

	//temp数组赋值回
	for (let i = 0; i <= r - p; i++) {
		arr[p + i] = temp[i]
	}
}

function mergeBySentry(arr, p, m, r) {
	let leftArr = new Array(m - p + 2)
	let rightArr = new Array(m - p + 1)

	for (let i = 0; i <= m - p; i++) {
		leftArr[i] = arr[p + i]
	}

	for (let i = 0; i <= r - m; i++) {
		rightArr[i] = arr[m + 1 + i]
	}
	//哨兵
	leftArr[m - p + 1] = Number.POSITIVE_INFINITY
	rightArr[r - m] = Number.POSITIVE_INFINITY

	let leftIndex = 0,
		rightIndex = 0,
		k = p
	while (k <= r) {
		if (leftArr[leftIndex] <= rightArr[rightIndex]) {
			arr[k++] = leftArr[leftIndex++]
		} else {
			arr[k++] = rightArr[rightIndex++]
		}
	}
}

function _mergeSort(arr, p, r) {
	if (p >= r) return

	const m = p + Math.floor((r - p) / 2)

	_mergeSort(arr, p, m) //0 4
	_mergeSort(arr, m + 1, r) //5 9

	// merge(arr, p, m, r)
	mergeBySentry(arr, p, m, r)
}

function mergeSort(arr) {
	_mergeSort(arr, 0, arr.length - 1)
}

//Test
let arr = [1, 7, 2, 5, 3, 8, 4, 9, 10, 6]
mergeSort(arr)
console.log(arr)
