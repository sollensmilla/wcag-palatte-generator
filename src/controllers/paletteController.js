/**
 * Controller for handling the communication with the palette module.
 * @author Smilla Sollén <ss226uk@student.lnu.se>
 * @version 1.0.0
 */
import Palette from '../models/Palette.js';
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

    async savePalette(req, res) {
        try {
            const { name, basecolor, colors } = req.body;

            let parsedColors
            try {
                parsedColors = JSON.parse(colors)
            } catch (err) {
                console.warn('Colors was not valid JSON, saving raw:', colors)
                parsedColors = colors
            }

            await Palette.create({ name, basecolor, colors: parsedColors })
            res.redirect('/palette')
        } catch (error) {
            console.error(error)
            res.status(500).send('Something went wrong while saving the palette.')
        }
    }


    async showAllPalettes(req, res) {
        try {
            const palettes = await Palette.find().lean();
            res.render('palettes', { palettes });
        } catch (error) {
            console.error(error);
            res.status(500).send('Something went wrong while fetching palettes.');
        }
    }

}