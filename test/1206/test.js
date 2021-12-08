const MAX_LEVEL = 5
// 该 randomLevel 方法会随机生成 1~MAX_LEVEL 之间的数，且 ：
//        50%的概率返回 1
//        25%的概率返回 2
//      12.5%的概率返回 3 ...
function randomLevel() {
	let level = 1
	while (Math.random() < 0.5 && level < MAX_LEVEL) {
		level++
	}
	return level
}

function insertSort(arr) {
	if (!Array.isArray(arr) || arr.length <= 1) {
		return
	}

	const size = arr.length
	for (let i = 1; i < size; i++) {
		//移动元素
		let j = i - 1
		let el = arr[i]
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

//Test
let testArr = []
let i = 0
while (i < 100) {
	testArr[i++] = randomLevel()
}
insertSort(testArr)
console.log(testArr)
