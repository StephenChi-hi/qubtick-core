import app from "./app";

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.listen({ port: PORT }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`🚀 QubTick Backend running at ${address}`);
});
