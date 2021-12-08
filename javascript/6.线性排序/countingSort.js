function findMaxVal(arr) {
	let max = arr[0]
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i]
		}
	}
	return max
}
// 计数排序，假设数组中存储的都是非负整数。
function countingSort(arr) {
	if (!Array.isArray(arr) || arr.length <= 1) return arr

	//1. 确定桶大小。取值范围为 [0,maxVal]
	const maxVal = findMaxVal(arr)

	//1. 生成当前值计数桶
	const countArr = new Array(maxVal + 1).fill(0)
	for (let i = 0; i < arr.length; i++) {
		countArr[arr[i]] += 1
	}
	//2. 叠加桶内数据。生成计数为小于等于当前值的计数
	for (let i = 1; i < countArr.length; i++) {
		countArr[i] += countArr[i - 1]
	}

	//3. 计数排序法，生成排序结果
	const sortedArr = new Array(arr.length)
	for (let j = arr.length - 1; j >= 0; j--) {
		let val = arr[j]
		let count = countArr[val] //找到当前值对应计数个数(<=val的个数)
		//"例：小于等于5的数值有3个。由此如果顺序排这些数，值5应该排在第3个位置，即索引为2的位置"
		sortedArr[count - 1] = val
		countArr[val] -= 1
	}
	//拷贝回原数组
	for (let i = 0; i < arr.length; i++) {
		arr[i] = sortedArr[i]
	}
}
//Test
let testArr = []
let i = 0
while (i < 100) {
	testArr[i] = Math.floor(Math.random() * 100)
	i++
}
console.log(testArr)
countingSort(testArr)
console.log(testArr)
