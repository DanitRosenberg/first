const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");




app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended:true
}));
app.get('/myNode',(request,res)=>{
    if (fs.existsSync('data.json')){
        fs.readFile('data.json',(error,buffer)=>{
            if (error){
                res.status(500);
                res.send("error"); 
            }else{
                let json = JSON.parse(buffer.toString());
                res.send("in json object: "+json.data);
            }
        })
    }else{
        res.status(500);
        res.send("File doesn't exist"); 
    }
    //res.header("bubuHeader","1234567");
    //userAgent = request.headers['user-agent'];
    //if(userAgent){
    //    res.send(`got it with user agent: "${userAgent}"`);
    //}
    //else res.send("Got it"); //Respond to user
});

app.post('/myNode', (request,res)=>{
    const body = request.body.data;
    res.send(`you send with post:"${body}"`); //Respond to user

})


app.put('/myNode', (request,res)=>{
    let json = { data: request.body.data };
    
    fs.writeFile('data.json',JSON.stringify(json),error=>{
        if(error){
            res.status(500);
            res.send("error");
        }else{
            res.send("File was written successfully");
        }
    });
    //const body = request.body.data;
    //res.send(`you send with put:"${body}"`); //Respond to user

})

app.delete('/myNode',(request,res)=>{
    res.send("Delete it"); //Respond to user
});


app.listen(3000, ()=>{
    console.log("Server is listenning on port 3000");
});