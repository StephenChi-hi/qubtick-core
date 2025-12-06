import { v4 as uuidv4 } from "uuid";

interface Account {
  id: string;
  name: string;
  rules: any;
  balance: number;
}

const accounts: Record<string, Account> = {}; // in-memory store for hackathon MVP

export async function createAccountService(name: string, rules: any) {
  const id = "acc_" + uuidv4().slice(0, 6);
  const account = { id, name, rules, balance: 0 };
  accounts[id] = account;
  return account;
}

export async function getAccountService(id: string) {
  return accounts[id] || null;
}

export async function depositService(id: string, amount: number) {
  const account = accounts[id];
  if (!account) throw new Error("Account not found");
  account.balance += amount;
  return { success: true, balance: account.balance };
}
