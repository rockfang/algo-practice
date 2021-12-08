/**
 * 桶排序
 * 思路：
 * 把数据根据bucketSize取值范围分成多个桶
 * 桶内进行插入/快速 排序
 * 合并排序后的桶
 *
 */
// 1,1,1,2,2,3,4,5
function createBuckets(arr, min, max, bucketSize) {
	//桶的数量
	const bucketCount = Math.floor((max - min) / bucketSize) + 1
	// console.log('bucketCount', bucketCount)

	//二维数组表示桶
	let buckets = []
	for (let i = 0; i < bucketCount; i++) {
		buckets[i] = []
	}
	//把数据顺序放入桶
	for (let i = 0; i < arr.length; i++) {
		const bucketIndex = Math.floor((arr[i] - min) / bucketSize)
		buckets[bucketIndex].push(arr[i])
	}
	return buckets
}
//插入排序
function insertSort(arr) {
	if (arr.length <= 1) return
	for (let i = 1; i < arr.length; i++) {
		let el = arr[i]
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
//快排 --start
function swap(arr, i, j) {
	const temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}

function partition(arr, left, right, pivotIndex) {
	const pivot = arr[pivotIndex]
	let slow = left
	for (i = left; i < right; i++) {
		if (arr[i] < pivot) {
			swap(arr, slow, i)
			slow++
		}
	}
	swap(arr, slow, pivotIndex)
	return slow
}
function _quickSort(arr, left, right) {
	if (left === right) return
	let pivotIndex = right
	let p = partition(arr, left, right, pivotIndex)
	_quickSort(arr, left, p - 1 <= left ? left : p - 1)
	_quickSort(arr, p + 1 >= right ? right : p + 1, right)
}
function quickSort(arr) {
	const size = arr.length
	if (size <= 1) return
	_quickSort(arr, 0, size - 1)
}
//快排 ---end

function sortBuckets(arr) {
	let sortedArr = []
	for (let i = 0; i < arr.length; i++) {
		// insertSort(arr[i])
		quickSort(arr[i])
		sortedArr = [...sortedArr, ...arr[i]]
	}
	return sortedArr
}

function bucketSort(arr, bucketSize) {
	if (!Array.isArray(arr) || arr.length <= 1 || bucketSize < 1) return
	let min = arr[0]
	let max = arr[0]
	// 1. 找到取值范围
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i]
		}

		if (arr[i] > max) {
			max = arr[i]
		}
	}
	//2. 分桶
	const buckets = createBuckets(arr, min, max, bucketSize)
	//3. 排序合并
	return sortBuckets(buckets)
}

//Test
let testArr = [],
	i = 0
while (i < 20) {
	const value = Math.floor(Math.random() * 20)
	testArr.push(value)
	i++
}
console.log(testArr)
const sortedArr = bucketSort(testArr, 2)
console.log(sortedArr)
