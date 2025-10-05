import express from 'express';
import { connectDB } from '../utils/database';

const app = express();
app.use(express.json()); // для парсинга JSON

app.get('/', (req, res) => {
    res.send('API запущено');
});


const start = async () => {
    await connectDB();
    // Здесь запуск сервера:
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Сервер запущен на порту ${PORT}`);
    });
};

start();

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Сервер запущен на порту ${PORT}`);
// });