import {  getAllPosts } from "../models/postsModel.js";

const postsList = async (req, res) => {
    const posts = await getAllPosts();
    res.status(200).json(posts);
}

const getPostById = (req, res) => {
    const id = req.params.id;
    const result = getPostById(id);
    res.status(200).json(result);
}

export {
    postsList,
    getPostById
}