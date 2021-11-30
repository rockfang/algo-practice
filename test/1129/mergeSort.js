function merge(leftArr, rightArr) {
	let leftIndex = 0,
		rightIndex = 0,
		temp = []

	while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
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

function mergeSort(arr) {
	if (!Array.isArray(arr) || arr.length <= 1) return arr
	const middle = Math.floor(arr.length / 2)
	const left = arr.slice(0, middle)
	const right = arr.slice(middle)

	return merge(mergeSort(left), mergeSort(right))
}

//Test
const testArr = []
let i = 0
while (i < 10) {
	testArr.push(Math.floor(Math.random() * 1000))
	i++
}
console.log(testArr)
console.log(mergeSort(testArr))
