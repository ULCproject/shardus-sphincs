const sphincs = require("./node_modules/sphincs/dist/sphincs");

(async () => {
  const keyPair = await sphincs.keyPair()

  const message = new Uint8Array([104, 101, 108, 108, 111, 0]) // "hello"

  /* Combined signatures */

  const signed = await sphincs.sign(message, keyPair.privateKey)

  const verified= await sphincs.open(signed, keyPair.publicKey) // same as message
  /* Detached signatures */

  const signature = await sphincs.signDetached(message, keyPair.privateKey)

  const isValid = await sphincs.verifyDetached(signature, message, keyPair.publicKey) // true

  console.log(keyPair);
  console.log(message);
  console.log(signed);
  console.log(verified);
  console.log(signature);
  console.log(isValid);

  console.log("pk length:", keyPair.publicKey.length)
  console.log("sk length:", keyPair.privateKey.length)
  console.log("sign length:", signature.length)
  console.log("valid?:", isValid)
})();