#!/usr/bin/env node

// IMPORTS
import fs from 'fs'
import minimist from 'minimist'
import path from 'path'
import { fileURLToPath } from 'url'

// INIT
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const infile = path.join(__dirname, '..', 'webcredits', 'webcredits.json')
console.log(infile)

globalThis.data = {
  amount: 5,
  timestamp: Math.round(Date.now() / 1000)
}
var argv = minimist(process.argv.slice(2))
console.log(argv)

data.amount = argv.amount || parseInt(argv._[0]) || data.amount
data.currency = argv.currency || data.currency
data.timestamp = argv.timestamp || data.timestamp
console.log('data', data)
data.source = argv.source || data.source
data.destination = argv.destination || data.destination
data.description = argv.description || data.description

var credit = {}
if (data.source) credit.source = data.source
if (data.amount) credit.amount = data.amount
if (data.currency) credit.currency = data.currency
if (data.destination) credit.destination = data.destination
if (data.timestamp) credit.timestamp = data.timestamp
console.log('credit', credit)
if (data.description) credit.description = data.description

// MAIN
var credits = JSON.parse(fs.readFileSync(infile))
if (data.amount) {
  credits.push(credit)
}

// WRITE
fs.writeFileSync(infile, JSON.stringify(credits, null, 1))
