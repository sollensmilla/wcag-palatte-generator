import express from 'express'
import PaletteController from '../controllers/PaletteController.js'
import PaletteValidator from '../middleware/PaletteValidator.js'

const router = express.Router()

const paletteController = new PaletteController()
const validator = new PaletteValidator()

router.get('/', (req, res, next) => paletteController.showAllPalettes(req, res, next));
router.post('/generate', (req, res, next) => validator.validate(req, res, next), (req, res, next) => paletteController.generatePalette(req, res, next));
router.post('/save', (req, res, next) => paletteController.savePalette(req, res, next));
router.post('/delete/:id', (req, res, next) => paletteController.deletePalette(req, res, next));

export default router;