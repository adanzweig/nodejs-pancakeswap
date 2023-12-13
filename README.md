# PancakeSwap Transaction Executor

This project contains a script to execute transactions on the PancakeSwap platform using Hardhat and Ethers.js. The script interacts with the PancakeSwap Router and Factory contracts to swap WETH for USDC.

## Features

- Interaction with Ethereum blockchain using Hardhat.
- Fetching pool addresses from PancakeSwap Factory.
- WETH and USDC contract interaction.
- Approval and execution of swap transactions on PancakeSwap.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine.
- A basic understanding of Ethereum and smart contracts.

## Installation

To install the necessary dependencies, run the following command:

```bash
npm install
```

## Usage

To execute the script, run the following command:

```bash
node index.js
```

## Configuration

Ensure you have the following files in the appropriate directories:

- ABIs for PancakeSwap Router, Factory, USDC, and WETH in the `abis` folder.
- Update the contract addresses and signer address in `index.js` as per your requirements.

## Contributing to PancakeSwap Transaction Executor

To contribute to this project, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`.
4. Push to the original branch: `git push origin <project_name>/<location>`.
5. Create the pull request.

Alternatively, see the GitHub documentation on [creating a pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contributors

- [@adanzweig](https://github.com/adanzweig)