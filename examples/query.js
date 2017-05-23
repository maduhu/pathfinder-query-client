'use strict'

const Query = require('../src')

const phoneNumber = '+639019991234'

const client = Query.createClient({ address: '156.154.59.228' })
client.request(phoneNumber)
  .then(response => {
    console.log('RESPONSE MESSAGE')
    console.dir(response, { depth: null })
  })
  .catch(err => {
    console.log('ERROR')
    console.log(err)
  })
