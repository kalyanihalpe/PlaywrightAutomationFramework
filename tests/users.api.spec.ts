// import {test, expect} from "@playwright/test";

// let AUTH_TOKEN={'Authorization':'Bearer cec5b9d5f18030b14a3d81318b360ed2ee4573d227688ee4d48bdbb4c4d4b6e0'};

// test("Fetch a single user", async({request})=>
// {
//     let response=await request.get("https://gorest.co.in/public/v2/users/8680372", {headers:AUTH_TOKEN});

//     console.log(response);

//     let responseBody=await response.json();
//     console.log(responseBody);

//     console.log("Response Code is : "+response.status());
//     console.log("Response Message is : "+response.statusText());
    
// })


// test("Fetch data for multiple user", async({request})=>
// {
//     let response=await request.get("https://gorest.co.in/public/v2/users", {headers:AUTH_TOKEN});

//     console.log(response); // JS Object in return

//     let responseBody=await response.json(); // conversion of JS object to JSON string format
//     console.log(responseBody);

//     console.log("Response Code is : "+response.status());
//     console.log("Response Message is : "+response.statusText());
//     expect(response.status).toBe(200);
// })

// test("Creating a fresh Resource", async({request})=>
// {
//     let userData = {
//                         "name": "Nishant Automation",
//                         "email": `nltech${Date.now()}@gmail.com`,
//                         "gender": "male",
//                         "status": "active"
//                     }

//     let response=await request.post("https://gorest.co.in/public/v2/users", {headers:AUTH_TOKEN, data:userData});

//     console.log(response); // JS Object in return

//     let responseBody=await response.json(); // conversion of JS object to JSON string format
//     console.log(responseBody);

//     console.log("Response Code is : "+response.status());
//     console.log("Response Message is : "+response.statusText());
   
// })

// test("Updating created Resource", async({request})=>
// {
//     let userData = {
//                         "name": "Nishant Goel Trainer",
//                         "email": `nltech${Date.now()}@gmail.com`,
//                         "gender": "male",
//                         "status": "inactive"
//                     }

//     let response=await request.put("https://gorest.co.in/public/v2/users/8680951", {headers:AUTH_TOKEN, data:userData});

//     console.log(response); // JS Object in return

//     let responseBody=await response.json(); // conversion of JS object to JSON string format
//     console.log(responseBody);

//     console.log("Response Code is : "+response.status());
//     console.log("Response Message is : "+response.statusText());
   
// })


// test("Deleting the created Resource", async({request})=>
// {
//     let response=await request.delete("https://gorest.co.in/public/v2/users/8680951", {headers:AUTH_TOKEN});

//     console.log(response); // JS Object in return

//     console.log("Response Code is : "+response.status());
//     console.log("Response Message is : "+response.statusText());
   
// })