import 'dotenv/config';
import express from 'express';
import { inngest, functions } from './ingest/index.js';
import { serve } from 'inngest/express';

const app = express();

app.use(express.json());

app.use("/api/inngest", serve({ client: inngest, functions }));

app.get('/health', (req, res) => {
  res.send("Hello world")
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} http://localhost:${process.env.PORT}`);
});
