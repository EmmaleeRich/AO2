import { mongoose } from 'mongoose';

const url = process.env.CONNECTION_URL;
export const connDb = async () => {
    try {
        await mongoose.connect(url);
        console.log('Connected to MongoDB Cloud');
    } catch (error) {
        console.log('Database connection failure', error);
    }
}
