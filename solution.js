// MY SOLUTION

/*
	INPUT
	[2, 2, 1, 2, 2]
	
	RESULT
	[1,2,2]
	[2,2,2]
	[2,2,1]
	[2,1,2]

	Traversal Indexing
	[0,1] // Start Condition

	[1,2] // Middle Condition
	[3,4]
	[4,5]
	
	[5,0] // End Condition
*/
function solution(A) {

	const collection = A.length
	const theater = 3
	const elimination = (A.length - theater)
	const temp = []
	if (collection < 3) {
		return 0
	}
	for (let i = 0; i < collection; i++) {
		// Get Traversal Indexing
		const traversal = []
		let hot = 0
		for (let n = 0; n < elimination; n++) {
			let hit = i + n
			if (hit >= collection) {
				traversal.push(hot++)
			}
			traversal.push(hit)
		}

		const arr = A
		var res = arr.filter(function (eachElem, index) {
			return traversal.indexOf(index) == -1
		})
		if (!temp.includes(JSON.stringify(res))) {
			temp.push(JSON.stringify(res))
		}
	}
	console.log(temp)
	return temp.length
}
const A = [1, 2, 3, 4]
const result = solution(A)
console.log('Result : ', result)
