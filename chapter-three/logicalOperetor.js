//logical operetor min `&& || `

//A && B
//true && true	= true
//true && false = false
//false && true	= false
//false && false = false

//A || B
//true || true = true
//true || false = true
//false || true = true
//false || false = false

var A = 90
var B = 30
var C = 90
var D = 30

if(A > B && C > D ){
	console.log('A is greter than B && C is greter than D')
}else{
	console.log('number not accorate')
}

if(A > B || C > D ){
	console.log('A is greter than B OR C is greter than D')
}else{
	console.log('number not accorate')
}