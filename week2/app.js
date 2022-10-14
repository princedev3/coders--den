//{}[]

//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

let Challenge = "30 Days Of JavaScript"
const Challenge1 = "30 Days Of JavaScript"
var Challenge2 = "30 Days Of JavaScript"

//Print the string on the browser console using console.log()

console.log(Challenge)
console.log(Challenge1)
console.log(Challenge2)

//Print the length of the string on the browser console using console.log()
console.log(Challenge.length)

//Change all the string characters to capital letters using toUpperCase() method

let toUperCase = Challenge.toLocaleUpperCase()

console.log(toUperCase)

//Change all the string characters to lowercase letters using toLowerCase() method

let toLowCase = Challenge.toLocaleLowerCase()

console.log(toLowCase)

//Cut (slice) out the first word of the string using substr() or substring() method
let wordSlice = Challenge.slice(0,3)
console.log(wordSlice)

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

let wordDay = Challenge.slice(3,7)
console.log(wordDay)

//Check if the string contains a word Script using includes() method
let stringInclude = Challenge.includes("Script")
console.log(stringInclude)

//Split the string into an array using split() method

let stringSplit = Challenge.split("")
console.log(stringSplit)

//Split the string 30 Days Of JavaScript at the space using split() method

let newSplit = Challenge.split(" ")
console.log(newSplit)

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let appSplit = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"

console.log( appSplit.split(" "))

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method

let thirtyDays = "30 Days Of JavaScript"

let dayReplace = thirtyDays.toLowerCase().replace("javascript","Python")

console.log(dayReplace)

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

let indexCharacter = Challenge.charAt(15)
console.log(indexCharacter)

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

let charWord = Challenge.charCodeAt("j")

console.log(charWord)


//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

let wordIndeax = Challenge.indexOf("a")

console.log(wordIndeax)

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

let wordLastIndex = Challenge.lastIndexOf("a")

console.log(wordLastIndex)

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let indexLast = Challenge.lastIndexOf(Challenge.length)

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let firstIndex = Challenge.indexOf("3")
console.log(firstIndex)


//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let findWord = Challenge.search("3")

console.log(findWord)

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '

let wordTrim = ' 30 Days Of JavaScript '

console.log(wordTrim.trim())

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true

let starTwith = Challenge.startsWith("30")

console.log(starTwith)

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true

let endWith = Challenge.endsWith("JavaScript")

console.log(endWith)

//Use match() method to find all the a’s in 30 Days Of JavaScript

let matchA =Challenge.match(/a/g)
console.log(matchA)

//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

let newstr = "30 Days Of"

let laterSti = "JavaScript"

console.log(newstr.concat(laterSti))

//Use repeat() method to print 30 Days Of JavaScript 2 times
let newRepeat = Challenge.repeat(2)
console.log(newRepeat)

// Level TWO

//Using console.log() print out the following statement:

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

//Using console.log() print out the following quote by Mother Teresa:

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")


//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let num= "10"
console.log(typeof num)

console.log(typeof parseInt(num))

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let numValue = parseFloat("9.8")
console.log(numValue)

console.log(Math.ceil(numValue))

console.log(parseInt(numValue)+1)

//Check if 'on' is found in both python and jargon

let onCheck = "python"

console.log(onCheck.match(/on/gi))
console.log(onCheck.match("on"))


let alphaCheck = "jargon"

console.log(alphaCheck.match(/on/gi))
console.log(alphaCheck.match("on"))


//I hope this course is not full of jargon. Check if jargon is in the sentence.


let alphaSearch = "I hope this course is not full of jargon"

console.log(alphaSearch.search("jargon"))
console.log(alphaSearch.match("jargon"))
console.log(alphaSearch.match(/jargon/gi))

//Generate a random number between 0 and 100 inclusively.

console.log(parseInt(Math.random()*10) + "-" + Math.ceil(Math.random()*100))


//Generate a random number between 50 and 100 inclusively.
console.log(Math.floor((Math.random()+5)*10))

console.log(Math.ceil((Math.random()+9)*10))

//Generate a random number between 0 and 255 inclusively.

console.log(Math.floor(Math.random()))

console.log(Math.floor((Math.random()+9)*25))

//Access the 'JavaScript' string characters using a random number.
let str= "javascript"
for(let i= 0;i<str.length;i++){
    console.log(str[Math.floor(Math.random()*8)])
}
//{}[]

//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

let sentence = "You cannot end a sentence with because because because is a conjunction"

console.log(sentence.substring(30,55))


//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let string = 'Love is the best thing in this world. Some found their love and some are still looking for their love'
console.log(string.search('love'))


//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let matchstring = "You cannot end a sentence with because because because is a conjunction"

console.log(matchstring.match(/because/gi))

//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentenceC = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

console.log(sentenceC.search(/\d+/g,))
















