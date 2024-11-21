import { MongoClient } from "mongodb";

export default async function connectToDatabase(databaseUrl) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(databaseUrl);
        console.log("Conectando ao banco de dados...");
        await mongoClient.connect();
        console.log("Conectado ao banco de dados!");

        return mongoClient;
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
        process.exit();
    }
}