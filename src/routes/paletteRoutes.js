import express from 'express'
import PaletteController from '../controllers/paletteController.js'

const router = express.Router()
const paletteController = new PaletteController()

router.post('/save', (req, res) => paletteController.savePalette(req, res))

export default router