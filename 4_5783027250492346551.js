const express = require('express')
const https = require('https')
const app = express()

app.get('/', (req,res) => {

  https.get('https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x0e20E3216EA172fcf9eAa19723b119e090fD353f&address=0x000000000000000000000000000000000000dEaD&tag=latest&apikey=2Q8CZ6UIJMYSMM1K9B57EQZ7I8TFGZ4X1B', (res) => {
    res.on('data', (d) => {
      const data = JSON.parse(d)
      const burned = data.result / 1000000000
      let circ = 1000000000000000 - burned
      circ = JSON.stringify(circ)
      send(circ)
    })
  })
  function send(circ){
    res.send(circ)
  }
})

app.listen(5000, () => {
  console.log('running')
})

// 507375996907709676668606
// 1000000000000000000000000
// 492622867079181467910144
// console.log()
// 507384655047168815107894
// 1000000000000000
// 1000000000000000
