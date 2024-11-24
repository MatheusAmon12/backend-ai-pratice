import express from "express";
import { addNewPost, imageUpload, postsList, updatePostById} from "../controllers/postsController.js";
import { upload } from "../middlewares/setUploadedFileDest.js";

const routes = (app) => {   
    app.use(express.json());

    app.get("/posts", postsList);

    app.post("/posts", addNewPost);

    app.post("/posts/upload", upload.single("image"), imageUpload);

    app.put("/posts/upload/:id", updatePostById);
}

export default routes;