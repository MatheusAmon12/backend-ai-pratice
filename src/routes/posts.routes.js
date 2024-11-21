import express from "express";
import posts from "../model/posts.js";
import { getPosts } from "../controllers/posts/getAllPosts.js";

const getPostById = (id) => {
    return posts.find(post => post.id === Number(id));
}

const routes = (app) => {
    app.use(express.json());

    app.get("/", async (req, res) => {
        const posts = await getPosts();
        res.status(200).json(posts);
    });
    
    app.get("/:id", (req, res) => {
        const id = req.params.id;
        const result = getPostById(id);
        res.status(200).json(result);
    });
}

export default routes;