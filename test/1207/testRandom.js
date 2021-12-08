const MAX_LEVEL = 5
/**
 * 数值   概率
 * 1      0.5
 * 2
 */

function randomLevel() {
	let level = 1
	let base = 0.5
	while (Math.random() < base && level < MAX_LEVEL) {
		level += 1
	}
	return level
}

function insertSort(arr) {
	if (!Array.isArray(arr) || arr.length <= 1) return
	for (let i = 1; i < arr.length; i++) {
		const val = arr[i]
		let j = i - 1
		for (; j >= 0; j--) {
			if (arr[j] > val) {
				arr[j + 1] = arr[j]
			} else {
				break
			}
		}
		arr[j + 1] = val
	}
}

//Test
let testArr = [],
	i = 0
while (i < 100) {
	testArr[i] = randomLevel()
	i++
}

insertSort(testArr)

console.log(testArr)
