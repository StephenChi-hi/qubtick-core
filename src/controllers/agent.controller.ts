import { FastifyReply, FastifyRequest } from "fastify";
import { getAccountService } from "../services/account.service";
import { evaluateRequest } from "../services/rule.service";
import { executeTransaction } from "../services/qubic.service";
import { logEvent } from "../services/log.service";

export async function agentRequest(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const body = request.body as any;
  const account = await getAccountService(body.accountId);
  if (!account) {
    return reply.status(404).send({ error: "Account not found" });
  }

  const result = evaluateRequest(
    { amount: body.amount, recipient: body.recipient },
    account.rules
  );

  let txHash = null;
  if (result.approved) {
    // Call Qubic smart contract (stubbed for now)
    txHash = await executeTransaction(account.id, body.amount, body.recipient);
    // Update account balance locally for demo
    account.balance -= body.amount;
  }

  // Log event
  logEvent({
    accountId: account.id,
    request: body,
    decision: result.approved ? "approved" : "denied",
    txHash,
    reason: result.reason,
  });

  return reply.send({
    decision: result.approved ? "approved" : "denied",
    executed: result.approved,
    txHash,
    reason: result.reason,
  });
}
