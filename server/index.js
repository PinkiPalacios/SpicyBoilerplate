const path = require('path')

const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const compress = require('compression')

// Define server port
const PORT = 3003

// Create app instance
const app = express()

// Gzip Compression
app.use(compress())

// Logging
app.use(morgan('combined'))

// Body Parsing
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Storybook
// app.use(
//   '/storybook',
//   express.static(path.join(__dirname, '../storybook-static'))
// )

// Catch-all Route for SPA routes (THIS MUST ALWAYS BE AFTER ALL OTHER ROUTES)
app.use(express.static(path.join(__dirname, '../build'))) // Static folder
app.all('/*', (req, res) =>
  res.sendFile(path.join(__dirname, '../build/index.html'))
)

// Start Server
app.listen(PORT, () => {
  console.log(`Static server listening on port ${PORT}!`)
})

// Kill server on SIGTERM
process.on('SIGTERM', () => {
  process.exit(0)
})
