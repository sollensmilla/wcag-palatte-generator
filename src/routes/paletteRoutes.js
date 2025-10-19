import express from 'express'
import PaletteController from '../controllers/paletteController.js'
import PaletteValidator from '../middleware/PaletteValidator.js'

const router = express.Router()

const paletteController = new PaletteController()
const validator = new PaletteValidator()

router.get('/', (req, res) => paletteController.showAllPalettes(req, res));
router.post('/generate', (req, res, next) => validator.validate(req, res, next), (req, res) => paletteController.generatePalette(req, res));
router.post('/save', (req, res) => paletteController.savePalette(req, res));
router.post('/delete/:id', (req, res) => paletteController.deletePalette(req, res));

export default router;