var Express =  require("express");
var bodyParser = require("body-parser");

var app = Express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var MongoClient = require("mongodb").MongoClient;
var CONNECTION_STRING = "mongodb+srv://paul:paul123@cluster0.okprp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";



const DATABASE = "testdb";
var db;

app.listen(49146,()=>{
    MongoClient.connect(CONNECTION_STRING,{useNewUrlParser:true},(error,client)=>{
        database=client.db(DATABASE);
        console.log("Mongo DB Connection Successfull");
    })
});

app.get('/',(request,response)=>{
    response.send('Hello World!');
})

app.get('./department', (request,response)=>{

    database.collection("Department").find({}).toArray((error,result)=>{
        if(error){
            console.log(error);
        }

        response.send(result);
    })

})