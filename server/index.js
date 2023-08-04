const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
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


app.post("/insert", async(req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const address = req.body.address;
    const department = req.body.department;
    const status = req.body.status;

    const employee = new Employee({
        name: name,
        age: age,
        address: address,
        department: department,
        status: status
    });

    try{
        await employee.save();
        res.send("inserted data");
    }
    catch(err){
        console.log(err);
    }
}
)


// app.put("/update", async(req,res)=>{
//     const id = req.body.id;
//     try{
//         await Employee.findById(id, (err, updatedEmployee)=>{
//             updatedEmployee.name = req.body.name;
//             updatedEmployee.age = req.body.age;
//             updatedEmployee.address = req.body.address;
//             updatedEmployee.department = req.body.department;
//             updatedEmployee.status = req.body.status;
//             updatedEmployee.save();
//             res.send("updated");
//         })
//     }
//     catch(err){
//         console.log(err);
//     }
// })




app.listen(4000, ()=>{
    console.log("server is running on port 4000");
})