export async function executeTransaction(
  accountId: string,
  amount: number,
  recipient: string
) {
  // Simulate Qubic smart contract execution
  console.log(
    `Executing transaction for ${accountId}: ${amount} → ${recipient}`
  );
  // Return fake tx hash for hackathon demo
  return "0x" + Math.random().toString(16).slice(2, 10);
}
