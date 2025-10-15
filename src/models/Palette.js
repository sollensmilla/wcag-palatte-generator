/**
 * Mongoose model for color palettes.
 * @author Smilla Sollén <ss226uk@student.lu.se>
 * @version 1.0.0
 */

import mongoose from 'mongoose'

const paletteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  basecolor: { type: String, required: true },
  colors: { type: mongoose.Schema.Types.Mixed, required: true },
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Palette', paletteSchema)