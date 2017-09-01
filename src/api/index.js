const data = require('./mock-data.js')
const LATENCY = 16

export function getAllMessages (cb) {
	console.log(2222);
  setTimeout(() => {
    cb(data)
  }, LATENCY)
}