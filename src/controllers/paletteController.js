/**
 * Controller for handling the communication with the palette module.
 * @author Smilla Sollén <ss226uk@student.lnu.se>
 * @version 1.0.0
 */
import Palette from '../models/Palette.js';
import { WcagColorService } from "wcag-color-service";
import ValidationError from '../errors/ValidationError.js';
import DatabaseError from '../errors/DatabaseError.js';

const wcagColorService = new WcagColorService();

export default class PaletteController {
    generatePalette(req, res) {
        const { basecolor, level, isLargeText } = req.body;

        if (!basecolor || !level) {
            return next(new ValidationError('Missing required fields.'));
        }

        const palette = wcagColorService.generatePalette({
            basecolor,
            level,
            isLargeText: isLargeText === 'true'
        });

        res.render('palette', { palette, basecolor, level, isLargeText });
    }

    async savePalette(req, res) {
        const { name, basecolor, colors, level, isLargeText } = req.body;

        try {
            const palette = new Palette({
                name,
                basecolor,
                colors: JSON.parse(colors),
                level,
                isLargeText: isLargeText === 'true'
            })

            await palette.save();
            res.redirect('/palette')
        } catch (errorr) {
            next(new DataBaseError('Failed to save palette.'));
        }
    }

    async showAllPalettes(req, res) {
        try {
            const palettes = await Palette.find().lean();
            res.render('palettes', { palettes });
        } catch (err) {
            next(new DatabaseError('Failed to fetch palettes.'));
        }
    }

    async deletePalette(req, res) {
        try {
            const { id } = req.params;
            await Palette.findByIdAndDelete(id);
            res.redirect('/palette');
        } catch (err) {
            next(new DatabaseError('Failed to delete palette.'));
        }
    }
}