import express from "express";
import userRouter from "./routes/users.js";

export function createApp() {
    //initialize
    const app = express();
    
    //register router to app
    app.use("/api/users", userRouter)
    
    return app;
}