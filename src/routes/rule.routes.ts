import { FastifyInstance } from "fastify";

export default async function ruleRoutes(fastify: FastifyInstance) {
  // Placeholder for Phase 1
  fastify.get("/", async () => {
    return { message: "Rule routes placeholder - Phase 1" };
  });
}
