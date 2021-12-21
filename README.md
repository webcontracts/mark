<div align="center">
  <h1>Mark</h1>
</div>

<div align="center">  
<i>Web Contract to Mark Anything</i>
</div>

---

<div align="center">
<h4>Documentation</h4>
</div>
  
---
  
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/webcontracts/mark/blob/gh-pages/LICENSE)
[![npm](https://img.shields.io/npm/v/webcontract-mark)](https://npmjs.com/package/webcontract-mark)
[![npm](https://img.shields.io/npm/dw/webcontract-mark.svg)](https://npmjs.com/package/webcontract-mark)
[![Github Stars](https://img.shields.io/github/stars/webcontracts/mark.svg)](https://github.com/webcontracts/mark/)
  
# ⚡️ Introduction

Mark is a web contract implementation of the [marking](https://github.com/project-bitmark/marking/wiki#marking) concept.  It allows you to mark anything!

# Data Model

A Mark is a data structure used in conjunction with the [marking](https://github.com/project-bitmark/marking/wiki#marking) concept.

It allows an agent (source) to mark another person, place or thing (destination), including marking links.

The data structure follows the [linkedobjects](https://linkedobjects.org/) specification, and should be compatible with JSON-LD

## Web Credit

Here is a full example of a [Web Credits](https://webcredits.org/) Object

```
{
  "@id": "cuid:a74xt3jbin",
  "@type": "Credit",
  "source": "https://melvincarvalho.com/#me"
  "amount": 100,
  "currency": "Mark",
  "destination": "http://webr3.org/nathan#me",
  "description": "for technical help",
  "context": "https://github.com/project-bitmark/bitmark",
  "timestamp": 1640111035
}
```

## Web Ledger

A [web ledger](https://webledgers.org/) in this case can be derived from the credit object

Both the webledger and the web credits will appear as JSON in the `webcredits` directory, which is in the `.gitignore` so that it can be a separate entity

## Web Contract

The Web Contract is a single file that operates on the webcredits data store and is described [here](https://github.com/webcontracts/mark/webcontracts/blob/gh-pages/mark.js)

## Signing

Currently signing is done out of band using the [gitmark](https://git-mark.com/) protocol, but explicit signing will be added, in future

# ✍️ API

```
mark.js <amount> [description]
```

The following switches are allowed
```
--source      # the source of the mark
--amount      # how much
--currency    # the currency
--destination # what is being marked
--description # a description of why
--context     # optional additional context
--timestamp   # unix style timestamp
--infile      # custom file to use for credits
--indir       # custom dir to use for credits
```

or from npm 

```JavaScript
import mark from 'webcontracts-mark'

function mark(source, amount, currency, destination, timesamp, description, context, indir, infile)
```



# ⚖️ License

- MIT
