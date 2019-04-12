const validator = require('Validator')
const isEmpty = require('is-empty')

module.exports = function validateRegisterInput(data) {
	let errors = {}
	if(isEmpty(data.name))
	{
		data.name = ""
	}
	if(isEmpty(data.email))
	{
		data.email = ""
	}
	if(isEmpty(data.password))
	{
		data.password = ""
	}
	if(isEmpty(data.password1))
	{
		data.password1 = ""
	}


	if(validator.isEmpty(data.name))
	{
		errors.name = "Name field is required!"
	}

	if(validator.isEmpty(data.email))
	{
		errors.email = "email field is required!"
	}else if(!validator.isEmail(data.email))
	{
		errors.email = "Email is invalid!"
	}

	if(validator.isEmpty(data.password))
	{
		errors.password = "password field is required!"
	}
	if(validator.isEmpty(data.password1))
	{
		errors.password1 = "Confirm password field is required!"
	}
	if(!validator.equals(data.password, data.password1))
	{
		errors.password1 = "Passwords do not match!"
	}

	return {
		errors,
		isValid: isEmpty(errors)
	}

	
}



