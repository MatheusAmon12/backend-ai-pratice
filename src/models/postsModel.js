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

export {
    getAllPosts,
    createPost
}