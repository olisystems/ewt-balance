const { web3, timeConverter, getBalance } = require("./utils");
const walletAddress = "0x86a5A44CFf58638784c2028e7181CEDe57933321";

async function main() {
  const latestBlockNumber = await web3.eth.getBlockNumber();
  console.time("totalTime");
  for (let i = 12087407; i < latestBlockNumber; i++) {
    const block = await web3.eth.getBlock(i);
    const time = timeConverter(block.timestamp);
    const timeslice = time.slice(-8);
    if (timeslice === "00:00:00") {
      const balance = await getBalance(walletAddress, i);
      console.log(
        `Block No.: ${i}, Local Time: ${time}, Timestamp [UNIX]: ${block.timestamp}, Balance [wei]: ${balance}`
      );
    }
  }
  console.timeEnd("totalTime");
}

main();
