import express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import {register} from "./controllers/auth.js";
import router from "./routes/auth.js"
// import User from "./models/user.js";

// Configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());    
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
//Routes 
app.post("/auth/register",register);
app.post("/auth",router);


// Mongoose Setup MongoDb
const PORT = process.env.PORT || 3002;
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology : true,
}).then(()=>{
    app.listen(PORT,()=>{ console.log("SERVER RUNNING AT PORT :",PORT )})
}).catch((error)=>{
    console.log(error)
})
// Mongo data adding
