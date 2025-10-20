import mongoose from 'mongoose'

const paletteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  basecolor: { type: String, required: true },
  colors: { type: mongoose.Schema.Types.Mixed, required: true },
  level: { type: String, enum: ['AA', 'AAA'], required: true },
  isLargeText: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Palette', paletteSchema)