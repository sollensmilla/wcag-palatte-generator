import ValidationError from "../errors/ValidationError.js";

export function validatePalette(req, res, next) {
  const { basecolor, level } = req.body;

  try {
    validateRequiredFields(basecolor, level);
    validateHexColor(basecolor);
    next();
  } catch (error) {
    next(error);
  }
}

function validateRequiredFields(basecolor, level) {
  if (!basecolor || !level) {
    throw new ValidationError("Missing required fields.");
  }
}

function validateHexColor(basecolor) {
  const hexColorRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
  if (!hexColorRegex.test(basecolor)) {
    throw new ValidationError("Invalid base color format.");
  }
}
