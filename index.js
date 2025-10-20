import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import mongoose from 'mongoose';

import getHomePage from './src/controllers/mainController.js';
import paletteRoutes from './src/routes/paletteRoutes.js';

import FlashMiddleware from './src/middleware/FlashMiddleware.js';
import ErrorHandler from './src/middleware/ErrorHandler.js';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3015;

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
}
connectToDatabase();

app.set('views', join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(join(__dirname, 'src', 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

const flashMiddleware = new FlashMiddleware(app);
flashMiddleware.init();

app.use('/palette', paletteRoutes);
app.get('/', getHomePage);

app.use((err, req, res, next) => {
  const handler = new ErrorHandler(err, req, res, next);
  handler.handle();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
