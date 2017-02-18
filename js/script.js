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
	}
}