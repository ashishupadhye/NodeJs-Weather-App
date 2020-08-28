const request = require('request');
const { json } = require('express');
const { Console } = require('console');
const geoCode = require('./utils/geocode')

const address = process.argv[2];
console.log(process.argv)
if(!address){
  return console.log("please provide address")
}
else{
    geoCode(address,(error, data)=>{
        console.log("Error", error)
        console.log("Data", data)
})
}
const url = 'http://api.weatherstack.com/current?access_key=f193673ce485f58f584e91e3abfede64&query=Pune'; 

request({url : url, json : true}, (error,response)=>{
    if(error){
        Console.log("Unable to connect service")
    }else if(response.body.error){
        console.log("Unable to find Location")
    }
    else{
    console.log(response.body.current.weather_descriptions + "It is currently " +response.body.current.temperature +" degrees") 
    }
})
   // console.log()
   // console.log(response.body.location)

  // const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Pune.json?access_token=pk.eyJ1IjoiYXNoaXNodXBhZGh5ZSIsImEiOiJja2U1Z3hhMzExMzJuMnJtd3lncG1xbjZ6In0.fMOxIco-PBiefXqU2m16ow';

//    request({url : geocodeURL, json : true}, (error, response)=>{
//        if(error){
//            console.log("Unablle to connect service")
//        }else if(response.body.features.length === 0){
//             console.log("Try another way to connect")
//        }
//        else{
//         const longitude = response.body.features[0].center[0];
//         const latitude = response.body.features[0].center[1];
//         console.log(longitude, latitude);
//        }
//    })







