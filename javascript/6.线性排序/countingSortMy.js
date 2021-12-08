function genCArr(arr) {
	//1. 确定cArr数组大小，即取值范围。此处以 分数0-100
	let cArr = new Array(101).fill(0)
	for (let i = 0; i < arr.length; i++) {
		let val = arr[i]
		cArr[val] += 1
	}
	//2. cArr变化为存储累计计数 (每个位置存小于当前位置的个数)
	for (let i = 1; i < cArr.length; i++) {
		cArr[i] += cArr[i - 1]
	}
	return cArr
}

function countingSort(arr) {
	/**
	 * 计数
	 * 准备工作： 原始数组arr
	 *   计数数组cArr
	 */
	let cArr = genCArr(arr)
	let size = arr.length
	let sortedArr = new Array(size)
	for (let j = size - 1; j >= 0; j--) {
		let val = arr[j]
		let count = cArr[val]
		sortedArr[count - 1] = val
		cArr[val] -= 1
	}
	return sortedArr
}

//test
let testArr = []
let i = 0
while (i < 100) {
	testArr[i] = Math.floor(Math.random() * 100)
	i++
}
console.log(testArr)
console.log(countingSort(testArr))
