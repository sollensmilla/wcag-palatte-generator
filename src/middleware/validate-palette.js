import ValidationError from "../errors/ValidationError.js";

export function validatePalette(req, res, next) {
  const { basecolor, level } = req.body;

  if (!basecolor || !level) {
    return next(new ValidationError("Missing required fields."));
  }

  const hexColorRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
  if (!hexColorRegex.test(basecolor)) {
    return next(new ValidationError("Invalid base color format."));
  }

  next();
}