/** @type {*} */
var fs = require('fs')

function copy (src, dst) {
  fs.createReadStream(src).pipe(fs.createWriteStream(dst))
  // fs.writeFileSync(dst, fs.readFileSync(src))
}

function main (argv) {
  copy(argv[0], argv[1])
}

main(process.argv)
console.log(process.argv.slice(2))