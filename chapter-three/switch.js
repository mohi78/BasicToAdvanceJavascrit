var date = new Date()

var today = date.getDay()

//0,sunday 1, monday
switch(today){
	case 0:	
		console.log('Today is sunday')
		break
	case 1:	
		console.log('Today is monday')
		break
	case 2:	
		console.log('Today is tuseday')
		break
	case 3:	
		console.log('Today is wednesday')
		break	
	case 4:	
		console.log('Today is thursday')
		break		
	case 5:	
		console.log('Today is friday')
		break	
	case 6:	
		console.log('Today is saturday')
		break				
}