import express from 'express'
import PaletteController from '../controllers/PaletteController.js'
import PaletteValidator from '../middleware/PaletteValidator.js'
import RequestContext
 from '../utils/RequestContext.js'
const router = express.Router()

const paletteController = new PaletteController()
const validator = new PaletteValidator()

router.get('/', (req, res, next) =>
  paletteController.showAllPalettes(new RequestContext(req, res, next))
);
router.post('/generate', (req, res, next) =>
  validator.validate(req, res, next),
  (req, res, next) =>
    paletteController.generatePalette(new RequestContext(req, res, next))
);
router.post('/save', (req, res, next) =>
  paletteController.savePalette(new RequestContext(req, res, next))
);
router.post('/delete/:id', (req, res, next) =>
  paletteController.deletePalette(new RequestContext(req, res, next))
);

export default router;