import "dotenv/config";
import { ObjectId } from "bson";
import connectToDatabase from "../config/dbConfig.js";

const databaseUrl = process.env.DATABASE_URL;
const mongoClientConnection = await connectToDatabase(databaseUrl);

const getAllPosts = async() => {
    const db = mongoClientConnection.db("project_instabytes");
    const postsColletions = db.collection("posts");
    const posts = await postsColletions.find({}).toArray();
    return posts;
};

const createPost = async(newPost) => {
    const db = mongoClientConnection.db("project_instabytes");
    const postsColletions = db.collection("posts");
    return postsColletions.insertOne(newPost);
};

const updateOnePost = async(postId, updatedPost) => {
    const db = mongoClientConnection.db("project_instabytes");
    const postsColletions = db.collection("posts");

    //convert string to object id that mongodb accepts
    const objectId = ObjectId.createFromHexString(postId);
    return postsColletions.updateOne({
        _id: new ObjectId(objectId)
    },
    {
        //$set is a mongodb operator that updates the document
        $set: updatedPost
    });
}

export {
    getAllPosts,
    createPost,
    updateOnePost
}