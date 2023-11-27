# Simple App to Fetch Data from a Database

## Run the React App
* Run the following commands in the `react-frontend` folder:
```bash
npm install && npm start
```
* The React App should be running on `http://localhost:3000`

## Call the DB via a Micro Integrator Dataservice
> ![How MI fetches data from a database](./readme-imgs/MI.png)

* Run the sql script `bankinfo.sql` in your MySQL database
* Import the `Test` folder into [Integration Studio](https://wso2.com/micro-integrator/) (Go to Download -> Other Components -> Integration Studio)
* Import the `mysql-connector-java-8.x.x.jar` (according to your MySQL version) into the `IntegrationStudio.app/Contents/Eclipse/runtime/microesb/lib` folder (on Mac)
* Left click on the `TestCompositeExporter` and select `Export Project Artifacts and Run`
* Call the API using the following command and test first:
```bash
curl -X GET "http://localhost:8290/services/BankInfoDataService/account/1" -H "accept: application/json"

curl -X GET "http://localhost:8290/services/BankInfoDataService/transaction/1" -H "accept: application/json"
```
* Now the React App should be able to call the API and display the data

> **Troubleshooting Info**\
Don't use a semicolon after the SQL query in the dataservice as this leads to a syntax error\
Follow the [4 rules in the Info box](https://apim.docs.wso2.com/en/4.2.0/integrate/examples/data_integration/json-with-data-service/#synapse-configuration) to get the output in JSON format otherwise there will be an error\
The header `accept: application/json` is required to get the output in JSON format otherwise it will be in XML format

## Expose the REST API via API Manager
>![Interaction between MI and APIM](./readme-imgs/MI+APIM.png)
* Start the [API Manager](https://wso2.com/api-manager/)
* Configure the embedded MI in Integration Studio to publish the API as a service to APIM by adding the service catalog configuration (Note: I'm running APIM on 9500 instead of default 9443):
```toml
[[service_catalog]]
apim_host = "https://localhost:9500"
enable = true
username = "admin"
password = "admin"
```
* Left click on the `TestCompositeExporter` and select `Export Project Artifacts and Run` again. This time it should be show up on the service catalog in APIM.
* Create an API out of the service and publish it
* Subscribe to the API and generate the keys from the developer portal
* Generate the access token from the developer portal as well
* Hard code the access token for now in the React App to call the API (will be changed in the next step)

> **Troubleshooting Info**\
If you get CORS errors, try deploying the sample PizzaShack API and call it from the Try Out tab in the publisher portal. If that also gives a CORS error, then restart the API Manager and try again. 

## Use Identity Server for App Login and API Security (3rd party Key Manager for API Manager)
>![Interaction between MI, APIM, and IS](./readme-imgs/MI+APIM+IS.png)

* Configure the Identity Server as a (3rd party Key Manager for the API Manager)[https://apim.docs.wso2.com/en/4.2.0/administer/key-managers/configure-wso2is-connector/]