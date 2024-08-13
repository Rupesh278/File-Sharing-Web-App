import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DBconnection = async () => {
    const MONGODB_URI = `mongodb://rupeshreddy5129:Projects@2024@ac-16hbbjq-shard-00-00.ciopegu.mongodb.net:27017,ac-16hbbjq-shard-00-01.ciopegu.mongodb.net:27017,ac-16hbbjq-shard-00-02.ciopegu.mongodb.net:27017/?ssl=true&replicaSet=atlas-11i30o-shard-0&authSource=admin&retryWrites=true&w=majority&appName=File-Sharing`
    try {
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting the database', error.message);
    }
};

export default DBconnection;