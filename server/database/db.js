import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://debspandan:Debc2529+@cluster0.mongodb.net/test?retryWrites=true&w=majority&ssl=true`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;