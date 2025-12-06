import { FastifyReply, FastifyRequest } from "fastify";
import {
  createAccountService,
  getAccountService,
  depositService,
} from "../services/account.service";
import { getLogs as logServiceGetLogs } from "../services/log.service";

export async function getLogs(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as any;
  const logs = logServiceGetLogs(id);
  return reply.send(logs);
}

export async function createAccount(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const body = request.body as any;
  const account = await createAccountService(body.name, body.rules);
  return reply.send(account);
}

export async function getAccount(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as any;
  const account = await getAccountService(id);
  return reply.send(account);
}

export async function depositFunds(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = request.params as any;
  const { amount } = request.body as any;
  const result = await depositService(id, amount);
  return reply.send(result);
}
