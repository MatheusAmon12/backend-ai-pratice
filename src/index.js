import "dotenv/config";
import express from "express";
import routes from "./routes/posts.routes.js";

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Server is running on port 3000"));

app.use(express.static("uploads"));

routes(app);