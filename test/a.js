function count(val) {
	let count = 0
	while (val > 1) {
		val = val / 2
		count++
	}
	return count
}
console.log(count(24000))

// 2^0 2^1 2^2 ... ... 2^n
// 2^n = val --> n = ?
// 64 32 16 8 4 2 1
console.log('a' > 'b')
console.log('b' > 'a')
console.log('abc'[2])

console.log('a'.charCodeAt())

const SKIPLIST_P = 0.5
const MAX_LEVEL = 16
function randomLevel() {
	let level = 1
	while (Math.random() < SKIPLIST_P && level <= MAX_LEVEL) {
		level += 1
	}
	return level
}
for (let i = 0; i < 1000; i++) {
	console.log(randomLevel())
}
