interface Rule {
  maxAmount: number;
  whitelistedRecipients: string[];
}

interface Request {
  amount: number;
  recipient: string;
}

export function evaluateRequest(request: Request, rules: Rule) {
  if (request.amount > rules.maxAmount) {
    return { approved: false, reason: "Exceeds max amount" };
  }

  if (!rules.whitelistedRecipients.includes(request.recipient)) {
    return { approved: false, reason: "Recipient not allowed" };
  }

  return { approved: true, reason: "Within rules" };
}
