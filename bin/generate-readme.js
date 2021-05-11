'use strict'

const fs = require('fs')
const pkg = require('../package.json')

try {
  const readme = fs.readFileSync(`${__dirname}/../README-template.md`, 'utf-8')
    .replace(/\$\{VERSION\}/g, pkg.version)
  fs.writeFileSync(`${__dirname}/../README.md`, readme)
} catch (e) {
  console.error(e)
  process.exit(1)
}
