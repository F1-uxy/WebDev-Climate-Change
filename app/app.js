const express = require("express");
const fs = require("fs")
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();



app.use(express.static("public"));

app.get("/", (req,res) => {
    res.sendFile("index.html", (err) => {
        if (err){
            console.log(err)
        }
    })
})

app.post("/form", jsonParser, (req,res) => {

    // This adds the data to the file and does not write over previous data
    // It also keeps the file intact as just appending would break the JSON
    const newData = req.body
    const email = newData.email
    //First read in the file
    fs.readFile('form-data.json', (err, data) => {
        if (err) {
          console.error(err);
        } 
        else {
          console.log(data)
            
          //ExsitingData must be an array to push new data
          let dataArray = []

          //If the reading was successfull then start to append data
          existingData = JSON.parse(data);

          dataArray.push(existingData)

          // Append the new data to the existing data
          dataArray.push(newData);
    
          // Save the updated data to the file
          fs.writeFile('form-data.json', JSON.stringify(dataArray), err => {
              if (err) {
              
              console.error(err);
              res.sendStatus(500);
          }  
          else {
            res.sendStatus(200);
            
          }
          });
          
          res.send("Form Successfully Submited - Email Confirmation Sent To: " + email);

        }
      });

      
});
    


app.listen(port, () => {
    console.log("App listening on port " + port)
})