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
    generatePalette(req, res, next) {
        try {
            const { basecolor, level, isLargeText } = this.#validateGenerateInput(req.body);
            const palette = this.#createPalette(basecolor, level, isLargeText);
            this.#renderPalette(res, palette, basecolor, level, isLargeText);
        } catch (error) {
            next(error);
        }
    }

    async savePalette(req, res, next) {
        try {
            const paletteData = this.#validateSaveInput(req.body);
            await this.#savePaletteToDB(paletteData);
            this.#handleSuccess(req, res, `Palette "${paletteData.name}" saved successfully!`);
        } catch (error) {
            next(error instanceof ValidationError ? error : new DatabaseError('Failed to save palette.'));
        }
    }

    async showAllPalettes(req, res, next) {
        try {
            const palettes = await this.#fetchAllPalettes();
            res.render('palettes', { palettes });
        } catch {
            next(new DatabaseError('Failed to fetch palettes.'));
        }
    }

    async deletePalette(req, res, next) {
        try {
            await this.#deletePaletteById(req.params.id);
            this.#handleSuccess(req, res, 'Palette deleted successfully.');
        } catch {
            next(new DatabaseError('Failed to delete palette.'));
        }
    }

    #validateGenerateInput({ basecolor, level, isLargeText }) {
        if (!basecolor || !level) {
            throw new ValidationError('Missing required fields.');
        }

        return {
            basecolor,
            level,
            isLargeText: String(isLargeText) === 'true'
        };
    }

    #validateSaveInput({ name, basecolor, colors, level, isLargeText }) {
        if (!name || !basecolor || !colors || !level) {
            throw new ValidationError('Missing required fields.');
        }

        return {
            name,
            basecolor,
            colors: JSON.parse(colors),
            level,
            isLargeText: isLargeText === 'true'
        };
    }

    #createPalette(basecolor, level, isLargeText) {
        return wcagColorService.generatePalette({ basecolor, level, isLargeText });
    }

    async #savePaletteToDB(paletteData) {
        const palette = new Palette(paletteData);
        await palette.save();
    }

    async #fetchAllPalettes() {
        return await Palette.find().sort({ createdAt: -1 }).lean();
    }

    async #deletePaletteById(id) {
        await Palette.findByIdAndDelete(id);
    }

    #renderPalette(res, palette, basecolor, level, isLargeText) {
        res.render('palette', { palette, basecolor, level, isLargeText });
    }

    #handleSuccess(req, res, message) {
        req.flash('success', message);
        res.redirect('/palette');
    }
}