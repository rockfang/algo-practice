//归并排序
// 数组拆分；直到left = right;数组归并，需要额外内存空间
function mergeSort(arr) {
	arr = _mergeSort(arr)
	return arr
}

function _mergeSort(arr) {
	if (!Array.isArray(arr) || arr.length <= 1) return arr
	const middle = Math.floor(arr.length >> 1)
	// console.log('middle', middle)
	const leftArr = arr.slice(0, middle)
	const rightArr = arr.slice(middle)
	return merge(_mergeSort(leftArr), _mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
	let leftIndex = 0,
		rightIndex = 0,
		leftSize = leftArr.length,
		rightSize = rightArr.length,
		temp = []
	while (leftIndex < leftSize && rightIndex < rightSize) {
		if (leftArr[leftIndex] < rightArr[rightIndex]) {
			temp.push(leftArr[leftIndex])
			leftIndex++
		} else {
			temp.push(rightArr[rightIndex])
			rightIndex++
		}
	}
	return temp
		.concat(leftArr.slice(leftIndex))
		.concat(rightArr.slice(rightIndex))
}

//Test
let arr = []
for (let i = 0; i < 20; i++) {
	arr[i] = Math.floor(Math.random() * 25)
}
console.log(arr)
console.log('----------------')
console.log(mergeSort(arr))
