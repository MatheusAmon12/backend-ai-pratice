import {  createPost, getAllPosts } from "../models/postsModel.js";
import fs from "fs";

const postsList = async (req, res) => {
    const posts = await getAllPosts();
    res.status(200).json(posts);
};

const addNewPost = async (req, res) => {
    const newPost = req.body;
    try {
        const createdPost = await createPost(newPost);
        res.status(201).json({
            createdPost, 
            message: "Post criado com sucesso!"
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Ocorreu um erro ao criar o post",
        });
    }
};

const imageUpload = async (req, res) => {
    const newPost = {
        description: "",
        imgUrl: req.file.originalname,
        alt: ""
    };
    try {
        const createdPost = await createPost(newPost);
        const imageUploadedName = `uploads/${createdPost.insertedId}.png`;
        fs.renameSync(req.file.path, imageUploadedName);
        res.status(201).json({
            createdPost, 
            message: "Post criado com sucesso!"
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Ocorreu um erro ao criar o post",
        });
    }
};

export {
    postsList,
    addNewPost,
    imageUpload
}