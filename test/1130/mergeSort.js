/**
 * 归并
 * mergeSort(arr,p,r) = merge(mergeSort(arr,p,q),mergeSort(arr,q,r))
 */

function merge(leftArr, rightArr) {
	let i = 0,
		j = 0,
		temp = []
	while (i < leftArr.length && j < rightArr.length) {
		if (leftArr[i] < rightArr[j]) {
			temp.push(leftArr[i])
			i++
		} else {
			temp.push(rightArr[j])
			j++
		}
	}

	return temp.concat(leftArr.slice(i)).concat(rightArr.slice(j))
}

function _mergeSort(arr) {
	if (arr.length === 1) return arr
	let middle = Math.floor(arr.length / 2)
	let leftArr = arr.slice(0, middle)
	let rightArr = arr.slice(middle)
	return merge(_mergeSort(leftArr), _mergeSort(rightArr))
}

function mergeSort(arr) {
	if (!Array.isArray(arr) || arr.length <= 1) return arr

	return _mergeSort(arr)
}
//test
const arr = [1, 5, 7, 9, 2, 3, 5, 6, 8, 11]
console.log(mergeSort(arr))
