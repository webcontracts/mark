#!/usr/bin/env node

// IMPORTS
import fs from 'fs'
import minimist from 'minimist'
import path from 'path'
import { fileURLToPath } from 'url'

// CONTRACT
function mark(source, amount, currency, destination, timesamp, description, context, indir, infile) {
  var credit = { "@type": "Credit" }
  if (source) credit.source = source
  if (amount) credit.amount = amount
  if (currency) credit.currency = currency
  if (destination) credit.destination = destination
  if (timestamp) credit.timestamp = timestamp
  console.log('credit', credit)
  if (description) credit.description = description
  if (context) credit.context = context

  // MAIN
  var credits = []
  try {
    var d = fs.readFileSync(infile)
    var credits = JSON.parse(d)
  } catch (e) {
    if (!fs.existsSync(indir)) {
      console.log('making dir', indir)
      fs.mkdirSync(indir)
    }
    console.log('creating', infile)
    var d = JSON.stringify([], null, 1)
    fs.writeFileSync(infile, d)
  }

  if (data.amount) {
    credits.push(credit)
  }

  // WRITE
  fs.writeFileSync(infile, JSON.stringify(credits, null, 1))
}


// INIT
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const indir = path.join(__dirname, '..', 'webcredits')
const infile = path.join(indir, 'webcredits.json')
console.log(indir)
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
data.context = argv.context || data.context
data.indir = argv.indir || data.indir
data.infile = argv.infile || data.infile

// MAIN
mark(data.source, data.amount, data.currency, data.destination, data.timesamp, data.description, data.context, indir, infile)

// EXPORT
export default mark
