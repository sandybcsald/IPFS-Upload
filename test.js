const { create, urlSource } = require ('ipfs-http-client')

async function main(){

let ipfs = create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https"
  });

const file = await ipfs.add(urlSource('http://gg.gg/y2dqy'))
console.log(file)
console.log(file.cid)
}

main();
