const path = require('path')
const express = require('express')
const hbs = require('hbs') 
const geoCode = require('./utils/geocode')
const app = express() 

//Define path for express 
const staticContent = path.join(__dirname, '../Public')
const viewsPath = path.join(__dirname,'templates/views')
const partialPath = path.join(__dirname,'templates/partials')
console.log(partialPath)
 
//Define views dir for handlebars
app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialPath)

//set up static dir
app.use(express.static(staticContent))

app.get('' ,(req, res)=>{
    res.render('index', {
        "title" : "My Whether App",
        "name" : "Ashish Upadhye" 
    })
})

app.get('/about', (req, res)=>{
    res.render('about', {
        "title" : "About Me",
        "name" : "Ashish Upadhye" 
    })
})

app.get('/help', (req, res)=>{
    res.render('help', {
        "title" : "Help Document",
        "helpText" : "This is helpful text", 
        "name" : "Ashish Upadhye"
    })
})

// app.get('/index', (req, res)=>{
//     res.render('index', {
//         "title" : "Index",
//         "name" : "Ashish Upadhye"
//     })
// })
//  app.get('', (req, res)=>{
//     res.send("<h1>Hello Express</h1>");

//  })


// app.get('/help', (req, res)=>{
//     res.send("<h1>Help page</h1>")
// })

// app.get('/about', (req, res)=>{
//     res.send("About")
// })

app.get('/whether', (req, res)=>{
    if(!req.query.address){
        return res.send({
            error : "You must provide address"
        }) 
    }
   geoCode( req.query.address, (error, {latitude, longitude, location, forecast} = {} )=>{
        if(error){
           return res.send({ error })
        }
  
    res.send({
        location,
        forecast,
        address: req.query.address

    })
  })
})

app.get('*', (req, res)=>{
    res.render('404', {
         "title": "404",
         "errorMessage" : "Page Not Found",
         "name" : "Ashish Upadhye"
    })
})
 app.listen(6422, ()=>{
     console.log("Listining on 6422")
 })