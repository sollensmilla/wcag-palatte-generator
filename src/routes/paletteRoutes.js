import express from 'express'
import PaletteController from '../controllers/paletteController.js'

const router = express.Router()
const paletteController = new PaletteController()

router.get('/', (req, res) => paletteController.showAllPalettes(req, res))
router.post('/save', (req, res) => paletteController.savePalette(req, res))
router.post('/delete/:id', (req, res) => paletteController.deletePalette(req, res));

export default router