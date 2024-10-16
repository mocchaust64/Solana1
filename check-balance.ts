// import { Connection,  PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

// const publicKey = new PublicKey("4Y2QEEKxA2vSybvB9qZAtfMMYFY8ByXi2Avstq82MBCf"); // Ensure this is a valid base58 string

// const connection = new Connection("https://api.devnet.solana.com","confirmed");

// const balanceInLamports = await connection.getBalance(publicKey);

// const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL;


// console.log(
//     `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSol}!`,
//   );

import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

const suppliedPublicKey = process.argv[2];

if (!suppliedPublicKey) {
  throw new Error("Provide a public key to check the balance of.");
}

const connection = new Connection("https://api.devnet.solana.com","confirmed");

const publicKey = new PublicKey(suppliedPublicKey);

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL= balanceInLamports / LAMPORTS_PER_SOL;

console.log('✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}! ')
console.log(
    `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`,
  );

