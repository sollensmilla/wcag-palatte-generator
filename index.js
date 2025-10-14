/**
 * The starting point of the application.
 *
 * @author Smilla Sollén <ss226uk@student.lnu.se>
 * @version 1.0.0
 */


import express from 'express'
import bodyParser from 'body-parser'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { getHomePage } from './src/controllers/mainController.js'
import PaletteController from './src/controllers/paletteController.js'

const app = express()
const PORT = process.env.PORT || 3015

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.set('views', join(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')
app.use(express.static(join(__dirname, 'src', 'public')))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', getHomePage)
app.post('/generate', PaletteController.generatePalette)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})