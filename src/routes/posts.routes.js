import express from "express";
import { addNewPost, imageUpload, postsList} from "../controllers/postsController.js";
import { upload } from "../middlewares/setUploadedFileDest.js";

const routes = (app) => {   
    app.use(express.json());

    app.get("/posts", postsList);

    app.post("/posts", addNewPost);

    app.post("/posts/upload", upload.single("image"), imageUpload);
}

export default routes;