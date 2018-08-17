# shardus-sphincs

Provides a simple interface to sphincs cryptographic functions, as used by the Shardus.

```JavaScript
const crypto = require('shardus-sphincs')

// Module has a constructor that takes in a 32-byte hex key as required by node-sodium for generic hashing
crypto('64f152869ca2d473e4ba64ab53f49ccdb2edae22da192c126850970e788af347')

// Uses json-stable-stringify to stringify an object in a consistent sorted manner; returns a string
crypto.stringify(obj)

/* 
  Returns a 32-byte random hex string by default, otherwise you can
  specify how many bytes you would like to generate
*/
crypto.randomBytes([bytes])

// Returns the hash of the input, output format can be specified as 'hex' or 'buffer'
crypto.hash(input [, fmt])

/*
  Returns the hash of the provided object as a hex string, optional
  parameter to hash the object without the "sign" field (default is
  false, can be passed true to hash without "sign")
*/
crypto.hashObj(obj [, removeSign])

// Generates and returns {publicKey, secretKey} as hex strings
await crypto.generateKeypair()

// Returns a signature obtained by signing the input with the sk
await crypto.sign(input, sk)

/*
  Attaches a sign field to the input object, containing a signed version
  of the hash of the object, along with the public key of the signer
*/
await crypto.signObj(obj, sk, pk)

// Returns true if the input was signed by the owner of the pk
await crypto.verify(input, sig, pk)

/* 
  Returns true if the hash of the object minus the sign field matches
  the signed message in the sign field
*/
await crypto.verifyObj(obj)
```

## Install

`npm install ULCproject/shardus-sphincs`

## Use

```JavaScript
const crypto = require('shardus-sphincs')
crypto('64f152869ca2d473e4ba64ab53f49ccdb2edae22da192c126850970e788af347')

let msg = crypto.hash('Hello world!')
console.log(msg)
```
