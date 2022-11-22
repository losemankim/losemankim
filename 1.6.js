let RpcClient = require(“bitcoind-rpc-client”);
let client = new RpcClient( {
     user: “test”,
     pass: “test”,
     host: “127.0.0.1”,
     port: 12345
});
(async function() {
   let to = “2NEq1TvW4n8yzfEtBca6wJftuHahJoFxnTS”
   let txHash = await client.sendToAddress(to, 5);
   let txPool =  await client.getRawMemPool();
   await client.generate(1);
   console.log(txHash);
   console.log(txPool);
}) ();
