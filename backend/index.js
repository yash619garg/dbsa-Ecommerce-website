// import libraries
import express, { urlencoded } from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser"
dotenv.config();

//database
import connectDB from "./config/connectDB.js";
connectDB();

// import middlewares

// import routes
import userRouter from "./routes/userRoutes.js";
import categoryRoute from "./routes/categoryRoute.js";
import productRoute from "./routes/productRoute.js";
import uploadRoute from "./routes/uploadRoute.js";
import blogRoute from "./routes/blogRoute.js";
import projectRoute from "./routes/projectRoute.js"



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes

app.use("/api/users", userRouter);
app.use('/api/category', categoryRoute);
app.use('/api/product', productRoute);
app.use('/api/upload', uploadRoute);
app.use('/api/blog', blogRoute);
app.use('/api/project', projectRoute);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname + "/uploads")));



const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})