function getTransactionCategory(){
	
	return[
	{
		"id":1,
		"name": "Food"
	},
	{
		"id":2,
		"name": "Home"
	}
	]
};

function getTransactionData()
{
	return [
	{
		"id":1,
		"transactionID":"TX121331",
		"Category":"Food",
		"Location":"Kitchener",
		"Date":"Jan-26,2017"
	},
	{
		"id":1,
		"transactionID":"TX125675",
		"Category":"Home",
		"Location":"Waterloo",
		"Date":"Jan-28,2017"
	}
	]
};





/*
function CheckEntery(form)
{
	var errorMessage = "";
	var valid = true;
	if(checkUsername(form.username.value) == false)
	{
		valid = false;
	}
	if(valid == false)
	{
		alert("Enter username");
		return false;
		
	}
	
	return true; 
}

function checkUsername(username)
{
	if(username.trim().length == 0)
	{
		return false;
	}
	
}
*/