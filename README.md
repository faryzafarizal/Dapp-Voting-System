# CNS4205
# 🗳️ Decentralized Voting System using Blockchain

## Overview

This is a decentralized voting system built using **Ethereum blockchain**, **Solidity smart contracts**, and a **React.js frontend**. The system ensures transparency, security, and immutability in the voting process, eliminating the risk of vote tampering or centralized control.

Users can cast votes securely via their crypto wallets (like MetaMask), and results are stored and verified on the blockchain.

## ✨ Features

- 🗳️ Secure vote casting via Ethereum smart contracts
- 🔐 Wallet integration using MetaMask
- 🧑‍💼 Admin Panel to create and manage elections
- 👥 Voter Panel to cast votes and view results
- 🌐 Decentralized and transparent election process
- 📦 IPFS support for uploading candidate images (optional)

## 🔧 Tech Stack

| Layer       | Technology                        |
|-------------|-----------------------------------|
| Blockchain  | Ethereum, Solidity, Hardhat       |
| Frontend    | React.js, Tailwind CSS            |
| Wallet      | MetaMask, Ethers.js               |
| Decentralized Storage | IPFS (optional)         |

## 🛠️ Installation

### Prerequisites

- Node.js and npm
- MetaMask extension
- Hardhat (for smart contract development)
- Git

### Setup Steps

1. **Clone the repository**

```bash
git clone https://github.com/your-username/DApp-Voting-System.git
cd DApp-Voting-System
```

2. **cd into backend
```bash
cd backend
```

3. **Make sure node is installed, validate the by checking version
```bash
npm -v
```

4. **install hardhat & chainlink if not installed
```bash
npm install --save-dev hardhat
npm install @chainlink/contracts@^0.5.1
```

5. **do npm install
```bash
npm install
```

6. **compile smartcontracts, skip sudo on windows powershell
```bash
sudo npx hardhat compile
```

7. **create the blockchain node, skip sudo on windows powershell
```bash
sudo npx hardhat node
```

8. **split the new terminal window, skip sudo on windows powershell
```bash
sudo npx hardhat run scripts/deploy.js --network localhost
sudo npx hardhat run scripts/deployFundMe.js --network localhost
```

9. **now configure the metamask wallet and import accounts

10. **cd into frontend and copy the abi and contract address in contract.js from HelloSolidity.json
```bash
cd ..
cd frontend
```

11. **install react dependencies
```bash
npm install
```

12. **run the react side
 ```bash
 npm run
```

