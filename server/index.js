const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://divyanshulohar:8385@cluster0.i35bqm8.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));
const employeeSchema = new mongoose.Schema({
    name: String,
    age: Number,
    address: String,
    department: String,
    status: String
});

const Employee = mongoose.model("Employee", employeeSchema);

app.get("/getData", async(req,res)=>{
    try{
        const data = await Employee.find();
        res.send(data);
    }
    catch(err){
        console.log(err);
    }

})





app.listen(4000, ()=>{
    console.log("server is running on port 4000");
})