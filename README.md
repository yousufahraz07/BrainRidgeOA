** # BrainRidgeOA **
This repository contains code for an AWS Lambda function that takes in two input parameters, firstName and lastName. It is triggered using a REST API Gateway. When triggered, it returns the message : "Hello, my name is {First Name}  {Last Name}", if all the validation checks pass.

## Technologies used
    -AWS Lambda
    -Node.js
    -API Gateway
    -JSON
    -Postman

## How to use the API

The API is public, and does not require authentication to access. 
The public API endpoint is : https://kmsftyc4g0.execute-api.ca-central-1.amazonaws.com/default/ReturnName
The API does not perform request typechecking as of now(it is commented out), so any requests(GET,POST,PUT,DELETE etc.) will result in the same response.

### Option 1; Invoke usking cURL
    -cURL(client URL) is a famous tool to invoke REST APIs using the command-line interface. The API can be 
    invoked using the provided endpoint in the correct cURL format, ensuring you have the correct type of request(GET,POST,PUT etc.), content(ex: json) and parameters(ex: firstName, lastName).
    -Correct format :
            curl -X POST https://kmsftyc4g0.execute-api.ca-central-1.amazonaws.com/default/ReturnName \
            -H "Content-Type: application/json" \
            -d '{"firstName": "{YOUR_FIRST_NAME}", "lastName": "{YOUR_LAST_NAME}"}'
    
    
    -Expected errors:
        -If the cURL command is not formatted properly according to the description above



