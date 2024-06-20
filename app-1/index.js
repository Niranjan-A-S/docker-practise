import express from 'express';
import { connectToDatabase } from './helper.js';

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hi there!</h1>');
});

const db = await connectToDatabase();
console.log(db);
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

console.log(`The app is running! in node version: ${process.version}`);