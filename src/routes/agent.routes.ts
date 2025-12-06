import { FastifyInstance } from "fastify";
import { agentRequest } from "../controllers/agent.controller";

export default async function agentRoutes(fastify: FastifyInstance) {
  fastify.post("/request", agentRequest);
}
