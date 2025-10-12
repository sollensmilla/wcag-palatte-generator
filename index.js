/**
 * The starting point of the application.
 *
 * @author Smilla Sollén <ss226uk@student.lnu.se>
 * @version 1.0.0
 */

import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const app = express()
const PORT = 3015

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
