const request = require('request');

const geoCode = (address, callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYXNoaXNodXBhZGh5ZSIsImEiOiJja2U1Z3hhMzExMzJuMnJtd3lncG1xbjZ6In0.fMOxIco-PBiefXqU2m16ow';
    
        request({url, json : true}, (error, { body})=>{
            if(error){
                callback('Unablle to connect service', undefined)
            }else if(body.features.length === 0)
            callback('Try another way to connect', undefined)
            else{
                callback(undefined, {
                longitude : body.features[0].center[0],
                latitude : body.features[0].center[1],
                location : body.features[0].place_name,
                forecast : "This is static forecast of cities"
              })
            }
        })
    }

    module.exports = geoCode