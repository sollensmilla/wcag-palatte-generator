import ValidationError from "../errors/ValidationError";

export function validatePalette(req, res, next) {
    const { basecolor, name, level } = req.body;

    if (!basecolor || !name || !level) {
        return next(new ValidationError("Missing required fields."));
    }

    const hexColorRegex = /^#([0-9A-F]{3}){1,2}$/i;
    if (!hexColorRegex.test(basecolor)) {
        return next(new ValidationError("Invalid base color format."));
    }

    next();
}