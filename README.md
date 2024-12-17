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

-If the cURL command is not formatted properly according to the description above, it may lead to parameter,validation,syntax or unexpected errors, as outlined below.

### Option 2: Invoke using Postman

Postman is another powerful tool used to invoke and test APIs, it has a user friendly interface and it provides tools to help test and debug complex APIs through better visualization and debugging logs than provided by the CLI.

**Prerequisites:**

-Make sure you create an account on [Postman](https://www.postman.com) and log into your account either on the Desktop App for Postman or using the Postman Web interface.

-On your Postman dashboard, click the 'New' button to create a new request.

![Postman Dashboard](https://i.postimg.cc/qgfCD4Zn/temp-Image-Sx-CQNq.avif)

-Select HTTP for our request type, since that directly invokes the public endpoint provided above.
![Http Request](https://i.postimg.cc/N01YRYRS/temp-Imagevq-FPDq.avif)

-Once you have done so, in your request dashboard you can see the kind of request you are about to invoke, the endpoint at which it is going to be invoked at and below it are different parameters you can adjust depending on how the API is built.
![request dashboard](https://i.postimg.cc/PfMW2wtr/temp-Image-HVRi-RH.avif)

-A few parameters need to be modified in order for this API to work correctly. First, enter the public endpoint provided in the enter URL box. Right now, our API does not typecheck the kind of request, so for now, it can be any kind(GET,PUT,POST etc.). Since our API gets triggered by an event, which expects an input JSON body, we need to customize those parameters.

-Under the body tab, change the input type to 'raw' and from the dropdown, select 'JSON'.Following this formatting will result in a correct request being sent and response being received. ![correct Postman format](https://i.postimg.cc/zBwqn5Y3/temp-Image-Ux9kb8.avif)

If all of the above steps, are followed, the response should be as below.
![Response](https://i.postimg.cc/bvT6bFFp/temp-Imagevn-CFCk.avif)

**Expected Errors:**
Depending on malformed input, multiple errors such as syntax, parameter, validation or unexpected errors can occur as outlined below.


### Option 3: Invoke directly using AWS

This option is available for internal testing using the AWS editor. To use this, log into your AWS account and create a lambda function. Use the code provided in the repository as the code in your lambda function. In the file explorer sidebar, deploy your function. After deploying, click on 'Test' and create tests in the following format to repeatedly test with the code.
![TestFormat](https://i.postimg.cc/9FxCLB8p/temp-Image5c-Oh4-Z.avif)

## Error Handling

There are multiple kinds of errors that could be faced while invoking the endpoint, mostly related to malformed input issues. These are the errors handled so far:

**JSON error**

If the event body is missing, incase for example directly invoking the endpoint without any headers or parameters, there will be no JSON body as input, hence invoking a Missing body error.

To fix this issue, check if cURL is installed, and check if the proper parameters are being sent to the endpoint.

**Syntax error**

Incase of syntax errors in the typing of the JSON body, the function will throw a syntax error. Syntax errors when thrown in related to malformed input usually occur with missing quotes or not escaping strings properly in your JSON input.

**Invalid Parameter Error**

This error is thrown in the case if either more than the required parameters are given, or the given parameters are not named ```firstName```, ```lastName``` or both. 

To fix this error, check if the parameter names in the JSON input are correct.

**Parameter error**

If one of the parameters (i.e. ```firstName``` or ```lastName```) is missing, this error will be thrown. 

To fix this, check if both the parameters are being sent and all parameters being sent have the correct name.

**Validation error**

This error occurs when the values for the ```firstName``` and ```lastName``` parameters are invalid. Invalid means the values in either field is either an ```empty string``` or has a ```whitespace``` between two characters.

``` "firstName" : "Ahraz A"```



The above describes the basic functionality and usage of a sample microservice built in Node.js Runtime using AWS Lambda, triggered using a REST API Gateway.
Thank you for reading.