const mongoose = require('mongoose');
// const employees = require('./employees.json')
// const Employees = require('./Models/employee')

// const { db } = require('./Models/employee')

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log('connection failed')
    }
    else {
        console.log('Connection working')
    }
}
)

// mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err) => {
//     if (err) console.log("Connection to the database failed")
//     else {
//         db.collection("employees").countDocuments(function (err, count) {
//             if (count === 0) {
//                 Employees.insertMany(employees)
//                     .then((res) => console.log(res))
//                     .catch((err) => console.log(err))
//             }
//         });
//         console.log("Connected to the database successfully")
//     }
// });