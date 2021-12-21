#!/usr/bin/env node

// IMPORTS
import fs from 'fs'
import minimist from 'minimist'
import path from 'path'
import { fileURLToPath } from 'url'

// CONTRACT
function mark(credit, indir, infile) {

  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  indir = indir || path.join(__dirname, '..', 'webcredits')
  infile = infile || path.join(indir, 'webcredits.json')


  var ret = { "@type": "Credit" }
  if (credit.source) ret.source = credit.source
  if (credit.amount) ret.amount = credit.amount
  if (credit.currency) ret.currency = credit.currency
  if (credit.destination) ret.destination = credit.destination
  if (credit.timestamp) ret.timestamp = credit.timestamp
  if (credit.description) ret.description = credit.description
  if (credit.context) ret.context = credit.context
  console.log('ret', ret)

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
    credits.push(ret)
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
var credit = {
  source: data.source,
  amount: data.amount,
  currency: data.currency,
  destination: data.destination,
  description: data.description,
  context: data.context,
  timestamp: data.timestamp
}
mark(credit, indir, infile)

// EXPORT
export default mark
