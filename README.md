# Simple App to Fetch Data from a Database

<!-- Insert image in this folder to this README -->
> ![How MI fetches data from a database](./readme-imgs/MI.png)

## How to Call the DB via a Micro Integrator Dataservice
* Run the sql script `bankinfo.sql` in your MySQL database
* Import the `Test` folder into [Integration Studio](https://wso2.com/micro-integrator/) (Go to Download -> Other Components -> Integration Studio)
* Import the `mysql-connector-java-8.x.x.jar` (according to your MySQL version) into the `IntegrationStudio.app/Contents/Eclipse/runtime/microesb/lib` folder (on Mac)
* Left click on the `TestCompositeExporter` and select `Export Project Artifacts and Run`
* Call the API using the following command:
```bash
curl -X GET "http://localhost:8290/account/1" -H "accept: application/json"
```

## Expose the REST API via API Manager
>![Interaction between MI and APIM](./readme-imgs/MI+APIM.png)


## Use Identity Server for App Login and API Security (3rd party Key Manager for API Manager)
>![Interaction between MI, APIM, and IS](./readme-imgs/MI+APIM+IS.png)