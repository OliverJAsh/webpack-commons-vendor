const vendorB = require('./vendor/b');

console.log({ vendorB })

import(/* webpackChunkName: "a" */ './a').then(a => {
    console.log({ a })
})

import(/* webpackChunkName: "b" */ './b').then(b => {
    console.log({ b })
})
