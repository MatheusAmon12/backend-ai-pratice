import express from "express";
import routes from "./routes/posts.routes.js";
import connectToDatabase from "./config/dbConfig.js";

const app = express();
const databaseUrl = process.env.DATABASE_URL;
const mongoClientConnection = await connectToDatabase(databaseUrl);

app.listen(3000, () => console.log("Server is running on port 3000"));

routes(app);

export {
    mongoClientConnection,
}