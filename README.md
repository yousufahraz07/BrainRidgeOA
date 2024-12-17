 # BrainRidgeOA 
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
.The API does not perform request typechecking as of now(it is commented out), so any requests(GET,POST,PUT,DELETE etc.) will result in the same response.

### Option 1: Invoke usking cURL
cURL(client URL) is a famous tool to invoke REST APIs using the command-line interface. The API can be 
    invoked using the provided endpoint in the correct cURL format, ensuring you have the correct type of request(GET,POST,PUT etc.), Content(ex: json) and Parameters(ex: firstName, lastName).
    
**Intended format :**

            curl -X POST https://kmsftyc4g0.execute-api.ca-central-1.amazonaws.com/default/ReturnName \
            -H "Content-Type: application/json" \
            -d '{"firstName": "{YOUR_FIRST_NAME}", "lastName": "{YOUR_LAST_NAME}"}'
    

**Sample Input**:

 ```"{"firstName":"Ahraz", "lastName":"Yousuf"}"```
 
__Sample Command__:

            curl -X POST https://kmsftyc4g0.execute-api.ca-central-1.amazonaws.com/default/ReturnName \
            -H "Content-Type: application/json" \
            -d '{"firstName": "Ahraz", "lastName": "Yousuf"}'
            
**Expected Output**:
```{"message":"Hello, my name is Ahraz Yousuf"}```

**Expected errors:**

-If the cURL command is not formatted properly according to the description above, it may lead to parameter,validation or unexpected errors, as outlined below.

### Option 2: Invoke using Postman

Postman is another powerful tool used to invoke and test APIs, it has a user friendly interface and it provides tools to help test and debug complex APIs through better visualization and debugging logs than provided by the CLI.

**Prerequisites:**

-Make sure you create an account on [Postman](https://www.postman.com) and log into your account either on the Desktop App for Postman or using the Postman Web interface.

-On your Postman dashboard, ![Postman Dashboard](https://ibb.co/wMckKqq)





