import express from "express";
import { addNewPost, postsList} from "../controllers/postsController.js";

const routes = (app) => {
    app.use(express.json());

    app.get("/posts", postsList);

    app.post("/posts", addNewPost);
}

export default routes;