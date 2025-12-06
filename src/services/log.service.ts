const logs: any[] = [];

export function logEvent(event: any) {
  logs.push({ ...event, timestamp: new Date() });
  console.log("Event logged:", event);
}

export function getLogs(accountId: string) {
  return logs.filter((log) => log.accountId === accountId);
}
