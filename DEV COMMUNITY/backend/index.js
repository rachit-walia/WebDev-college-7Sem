// // require or import all the modules here
// const express = require("express");
// require("dotenv").config();
// const mongoose = require("mongoose");
// const userRoute = require("./routes/userRoutes.js");

// // SET INSTANCES HERE ONLY
// const app = express();

// // VARIABLE CONDITION HERE ONLY
// const PORT = process.env.PORT || 4800;

// // RUN A MIDDLEWARE
// app.use(express.json());

// app.use(function (req, res, next) {
//     console.log("THIS IS A GLOBAL APP MIDDLEWARE");
//     next(); // Don't forget to call next()
// });

// // WE WILL MAKE ROUTES
// //  END POINTS : USER
// app.get("/", (req, res) => {
//     res.send({ message: "THIS IS A DASHBOARD" });
// });
// app.use("/api/user", userRoute);

// // DB CONNECTION FUNCTION
// async function dbConnect() {
//     try {
//         console.log("Connection URI:", process.env.CONNECTION_URI); // ✅ Debugging log
//         await mongoose.connect(process.env.CONNECTION_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("DB CONNECTED");
//     } catch (error) {
//         console.error("DB CONNECTION FAILED:", error.message);
//         process.exit(1);
//     }
// }

// // START SERVER AFTER DB CONNECTION
// dbConnect().then(() => {
//     app.listen(PORT, () => {
//         console.log("SERVER IS RUNNING ON PORT:", PORT);
//     });
// });



//REQUIRE OR IMPORT ALL THE MODULES HERE ONLY
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes");

//SET INSTANCES HERE ONLY
const app = express();



//VARIABLE DECLARATION HERE ONLY
const PORT = process.env.PORT || 4888;


// I WANT TO RUN A MIDDLEWARE
app.use(express.json());

app.use(function(req,res,next){
  console.log("THIS IS GLOBAL APP MIDDLWARE");
  next()
})

//WE WILLL MAKE ROUTES

//END POINTS : USER

app.get("/",(req,res)=>{
  res.send({message:"THIS IS DASHBOARD"})
})

app.use("/api/user",userRouter)


async function dbConnect() {
  await mongoose.connect(process.env.CONNECTION_URI).then(() => {
    console.log("DB CONNECTED");
  });
}

dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
  });
});