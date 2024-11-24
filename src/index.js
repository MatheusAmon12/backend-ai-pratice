import express from "express";
import routes from "./routes/posts.routes.js";

const app = express();

app.listen(3000, () => console.log("Server is running on port 3000"));

app.use(express.static("uploads"));

routes(app);