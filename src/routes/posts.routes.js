import express from "express";
import cors from "cors";
import { addNewPost, imageUpload, postsList, updatePostById} from "../controllers/postsController.js";
import { upload } from "../middlewares/setUploadedFileDest.js";

export const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

const routes = (app) => {   
    app.use(express.json());

    app.use(cors(corsOptions));

    app.get("/posts", postsList);

    app.post("/posts", addNewPost);

    app.post("/posts/upload", upload.single("image"), imageUpload);

    app.put("/posts/upload/:id", updatePostById);
}

export default routes;