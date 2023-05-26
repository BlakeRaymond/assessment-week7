/* ADD TO ZERO - RUNTIME = O(n^2) */

function addToZero(arr) {

    for (let i in arr) {
        for (let j in arr) {
            if (arr[i] + arr[j] === 0) {
                return true
            }
        }
    }
    return false
}

console.log(addToZero([]))
console.log(addToZero([1]))
console.log(addToZero([1, 2, 3]))
console.log(addToZero([1, 2, 3, -2]))

/* UNIQUE CHARACTERS RUNTIME = O(n^2) */

function uniqueChar(str) {

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false
            }
        }
    }
    return true
}

console.log(uniqueChar('Monday'))
console.log(uniqueChar('Moonday'))

/* PANGRAM SENTENCE -- I WORKED WAY TOO LONG ON THIS AND COULDn't FIGURE IT OUT.. HOW DO I CHECK IF A VALUE IS NOT IN SOMETHING???*/

// function isPangram (str) {

//     let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
//                     'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
//                     's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]

//     let letters = []

//     for (let i = 0; i < str.length; i++) {
//         letters.push(str[i])
//         console.log(letters)
//     }

//     if (!letters)

// }

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// console.log(isPangram("I like cats, but not mice"))

/* LONGEST WORD RUNTIME = O(n) */

function findLongestWord(list)  {

    let count = 0

    for (let i = 0; i < list.length; i++) {   
        
        let str = list[i].split('')

           if (str.length > count) { 
           count = str.length
        }
    }

    return count
}

console.log(findLongestWord(["hello", "hi"]))