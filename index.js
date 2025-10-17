/**
 * The starting point of the application.
 *
 * @author Smilla Sollén <ss226uk@student.lnu.se>
 * @version 1.0.0
 */
import bodyParser from 'body-parser'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { getHomePage } from './src/controllers/mainController.js'

import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose'
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err))

import express from 'express'
const app = express()
const PORT = process.env.PORT || 3015

import PaletteController from './src/controllers/paletteController.js'
const paletteController = new PaletteController()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.set('views', join(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')
app.use(express.static(join(__dirname, 'src', 'public')))
app.use(bodyParser.urlencoded({ extended: true }))

configureFlash(app);

import paletteRoutes from './src/routes/paletteRoutes.js'
app.use('/palette', paletteRoutes)
app.get('/', getHomePage)

import { errorHandler } from './src/middleware/error-handler.js';
app.use(errorHandler);

import configureFlash from './src/middleware/configure-flash.js';

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})