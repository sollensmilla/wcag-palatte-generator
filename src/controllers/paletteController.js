/**
 * Controller for handling the communication with the palette module.
 * @author Smilla Sollén <ss226uk@student.lnu.se>
 * @version 1.0.0
 */

import { WcagColorService } from "wcag-color-service";

const wcagColorService = new WcagColorService();

export default class PaletteController {
    generatePalette(req, res) {
        try {
            const { basecolor, level, isLargeText } = req.body;

            const palette = wcagColorService.generatePalette({
                basecolor,
                level,
                isLargeText: isLargeText === 'true'
            });

            res.render('palette', { palette, basecolor, level, isLargeText });
        } catch (error) {
            console.error(error)
            res.status(500).send('Something went wrong while generating the palette.')
        }
    }
}