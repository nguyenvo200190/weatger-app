const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT || 3000
//Define paths for Espress config
const homePath =path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath =path.join(__dirname, '../templates/partials')
// Setup handlebars engin and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
//Setup static direct
app.use(express.static(homePath))


app.get('',(req,res)=>{
    res.render('HOMEPAGE',{
        title: "Weather App",
        name:'Nguyen author'
    })
})
app.get('/help',(req,res)=>{
    res.send({
        name: 'Nguyen',
        age:27
    })

})
app.get('/homepage',(req,res)=>{
    res.render('HOMEPAGE')

})
app.get('/weather',(req,res)=>{
    res.send("page weather ")

})
//app.com
//app.com/help
//app.com/about
app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:"404",
        name:"nguyen",
        errorMessage:"Help article not found"
    })

})
app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:"nguyen",
        errorMessage:'Page Not Found'
    })

})
app.listen(port, ()=>{
    console.log("Sever is up on port" +port)
})