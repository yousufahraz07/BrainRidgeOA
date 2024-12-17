/*
The below is code for a simple AWS Lambda function that takes in two input parameters, firstName and lastName.
It is triggered by an API Gateway event and returns "Hello, my name is {firstName} {lastName}" if all the
parameters are provided and are well defined, otherwise it returns an error message with a 400 Bad Request status code 
defining the reason for the error.
*/


export const handler = async (event) => {


   

    
    let firstName, lastName;            //Variables to store the first and last names

    try {
        if (!event.body)                       //Special case: If endpoint is accessed without a body, throw a 400 Bad Request error with a message.
        {
        throw { kind: "JSON Error", message: "Request body is missing." };
    }
  
            // if (event.httpMethod !== "GET") {    // OPTIONAL: Checking if the request type is GET, can be modified
            //     throw {                          //           to enforce typechecking for other kinds of requests.     
            //         kind: "Request Error",
            //         message: `Wrong request type.
            //         Received: ${event.httpMethod}. 
            //         Expected: GET.`,
            //     };
            // }

       let input;                  //Variable to store the input JSON
           
        try{
         input = JSON.parse(event.body);        //Validating if input JSON is correctly formatted; if not, throws an error
         
        }
        catch(error)
        {
            throw { kind : "Syntax Error", message : " Invalid Input"}
        }

        const allowedParams = ['firstName', 'lastName'];    //Validating if the input JSON has the correct parameters
        const invalidRequest = Object.keys(input).filter(key => !allowedParams.includes(key)); //filtering out invalid parameters

        if (invalidRequest.length > 0) {    //if there is more than one invalid parameter, throw an error. Prints the parameters received
            return {                       //and the expected parameters.
                statusCode: 400,
                body: JSON.stringify({
                    error: "Invalid Parameters Error",
                    message: `Received parameters: ${JSON.stringify(input)}
                                  Expected parameters: "{firstName:{Your First Name}, lastName:{Your Last Name}}"`
                }),
            };
        }

        if (input.firstName==undefined && input.lastName==undefined) {      //checks if both the first and last name parameters are defined. 
           throw { kind : "Parameter Error", message : "First Name and Last Name are missing."} //If not, throws an error and reflects which one(first and/or last name) is missing in the error message body.
        } else if (input.firstName==undefined) {
            throw { kind : "Parameter Error", message : "First Name is missing."}
        } else if (input.lastName==undefined) {
            throw { kind : "Parameter Error", message : "Last Name is missing."}
        }

        firstName = input.firstName.trim(); //Trims the leading and trailing spaces from the first and last names.
        lastName = input.lastName.trim();

        if(firstName=="" && lastName=="") //Validates if the first and/or last name inputs are empty strings. 
        {                                 //If so, throws an error indicating which parameter is empty.
            throw { kind : "Validation Error", message : "First Name and Last Name should not be empty."};

        }
        if(firstName=="")
        {
            throw { kind : "Validation Error", message : "First Name should not be empty."}
        }
        if(lastName=="")
        {
            throw { kind : "Validation Error", message : "Last Name should not be empty."}
            
        }
        if(firstName.includes(" ") && lastName.includes(" ")) //Validates if the first and/or last name inputs contain a space.
        {                                                     //If so, throws an error indicating which parameter contains a space.
            throw { kind : "Validation Error", message : "First Name and Last Name should not contain a space."}

        }
        if(firstName.includes(" "))
        {
            throw { kind : "Validation Error", message : "First Name should not contain a space."}

        }
        if(lastName.includes(" "))
        {
            throw { kind : "Validation Error", message : "Last Name should not contain a space."}
            
        }
        
    } catch (error) {

        if(error.kind == "Validation Error" || error.kind == "Parameter Error" || error.kind == "Request Error" || error.kind =="Syntax Error" || error.kind == "JSON Error") //If the error kind is one of the above, returns a 400 Bad Request status code with the error message.
        {
        return {
            statusCode: 400,    //throws a 400 Bad Request status code if one of the above validation errors occur.
            body: JSON.stringify({ error : error.kind, message: error.message })
        };
    }
    }

    const response = {
        statusCode: 200, //If all the validation checks pass, returns a 200 OK status code with the desired output.
        body: JSON.stringify({ "message": `Hello, my name is ${firstName} ${lastName}` })
    };

    return response;
};
