import {  createPost, getAllPosts, updateOnePost } from "../models/postsModel.js";
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

const updatePostById = async (req, res) => {
    const postId = req.params.id;
    const imgUrl = `http://localhost:3000/${postId}.png`;
    const post = {
        imgUrl,
        description: req.body.description,
        alt: req.body.alt
    };
    try {
        const updatedPost = await updateOnePost(postId, post);
        res.status(200).json(updatedPost);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Ocorreu um erro ao atualizar o post",
        });
    }
};

export {
    postsList,
    addNewPost,
    imageUpload,
    updatePostById
}