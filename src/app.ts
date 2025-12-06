import Fastify, { FastifyServerOptions } from "fastify";
import accountRoutes from "./routes/account.routes";
import agentRoutes from "./routes/agent.routes";
import ruleRoutes from "./routes/rule.routes";

export interface AppOptions extends FastifyServerOptions {}

// Create Fastify instance
const app = Fastify({ logger: true });

// Register routes
app.register(accountRoutes, { prefix: "/accounts" });
app.register(agentRoutes, { prefix: "/agent" });
app.register(ruleRoutes, { prefix: "/rules" });

export default app;
export { app };
