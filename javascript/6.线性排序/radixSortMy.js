//数组中每个元素由小写字母组成，长度为3. 对数组按字母ASCII顺序排序
function radixSort(arr, elLength) {
	if (!Array.isArray(arr) || arr.length <= 1) return
	let index = elLength - 1
	while (index >= 0) {
		countingSort(arr, index)
		--index
	}
}

//转ASCII码比较，和桶索引对应
function findMaxVal(arr, index) {
	let maxCharCode = arr[0][index].charCodeAt() //index取值 0 1 2
	for (let i = 0; i < arr.length; i++) {
		//字母比较会按ASCII比较
		if (arr[i][index].charCodeAt() > maxCharCode) {
			maxCharCode = arr[i][index].charCodeAt()
		}
	}
	return maxCharCode
}
// 计数排序，假设数组中存储的都是非负整数。
function countingSort(arr, index) {
	if (!Array.isArray(arr) || arr.length <= 1) return arr

	//1. 确定桶大小。取值范围为 [0,maxVal]
	const maxVal = findMaxVal(arr, index)

	//1. 生成当前值计数桶
	const countArr = new Array(maxVal + 1).fill(0)
	for (let i = 0; i < arr.length; i++) {
		countArr[arr[i][index].charCodeAt()] += 1
	}
	//2. 叠加桶内数据。生成计数为小于等于当前值的计数
	for (let i = 1; i < countArr.length; i++) {
		countArr[i] += countArr[i - 1]
	}

	//3. 计数排序法，生成排序结果
	const sortedArr = new Array(arr.length)
	for (let j = arr.length - 1; j >= 0; j--) {
		let val = arr[j]
		let count = countArr[val[index].charCodeAt()]
		//"例：小于等于5的数值有3个。由此如果顺序排这些数，值5应该排在第3个位置，即索引为2的位置"
		sortedArr[count - 1] = val
		countArr[val[index].charCodeAt()] -= 1
	}
	//拷贝回原数组
	for (let i = 0; i < arr.length; i++) {
		arr[i] = sortedArr[i]
	}
}
//Test
let arr = []
let src = 'abcdefghijklmnopgrstuvwxyz'.split('')
for (let i = 0; i < 10; i++) {
	let word = ''
	for (let j = 0; j < 3; j++) {
		let index = Math.floor(Math.random() * 26)
		word += src[index]
	}
	arr.push(word)
}
console.log(arr)
// countingSort(arr, 2)
// countingSort(arr, 1)
// countingSort(arr, 0)
radixSort(arr, 3) //3 为单个元素长度

console.log(arr)
