import { Connection, clusterApiUrl, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));

const publicKey = new PublicKey("enYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN");

const balance = await connection.getBalance(publicKey);

const balanceInSol = balance / LAMPORTS_PER_SOL;

console.log(`The balance of the account at ${publicKey} is ${balanceInSol} SOL`);
console.log(`✅ Finished!`);
