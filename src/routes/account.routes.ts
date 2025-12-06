import { FastifyInstance } from "fastify";
import {
  createAccount,
  getAccount,
  depositFunds,
  getLogs,
} from "../controllers/account.controller";

// Add this at the end

export default async function accountRoutes(fastify: FastifyInstance) {
  fastify.post("/", createAccount);
  fastify.get("/:id", getAccount);
  fastify.post("/:id/deposit", depositFunds);
  fastify.get("/:id/logs", getLogs);
}
