import ValidationError from "../errors/ValidationError.js";

export default class PaletteValidator {
  validate(req, res, next) {
    const { basecolor, level } = req.body;
    const validator = new PaletteValidator();

    try {
      validator.#validateRequiredFields(basecolor, level);
      validator.#validateHexColor(basecolor);
      next();
    } catch (error) {
      next(error);
    }
  }

  #validateRequiredFields(basecolor, level) {
    if (!basecolor || !level) {
      throw new ValidationError("Missing required fields.");
    }
  }

  #validateHexColor(basecolor) {
    const hexColorRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    if (!hexColorRegex.test(basecolor)) {
      throw new ValidationError("Invalid base color format.");
    }
  }
}

