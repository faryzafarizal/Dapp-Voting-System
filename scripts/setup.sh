#1. Start here
# Huge credit to chatGPT to allow all of us to have a try.
#2. cd into backend
cd backend

#3. make sure node is installed, validate the by checking version
npm -v

#4. install hardhat & chainlink if not installed
npm install --save-dev hardhat
npm install @chainlink/contracts@^0.5.1

#5. do npm install
npm install

#6. compile smartcontracts, skip sudo on windows powershell
sudo npx hardhat compile

#7. create the blockchain node, skip sudo on windows powershell
sudo npx hardhat node

#8. split the new terminal window, skip sudo on windows powershell
sudo npx hardhat run scripts/deploy.js --network localhost
sudo npx hardhat run scripts/deployFundMe.js --network localhost

#9. now configure the metamask wallet and import accounts

#10. cd into frontend and copy the abi and contract address in contract.js from HelloSolidity.json
cd ..
cd frontend

#11. install react dependencies
npm install

#12. run the react side
 



