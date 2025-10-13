import type { Express } from 'express';
import express from 'express';

import { apiV1Router } from './routes.js';

export function buildApp(): Express {
  const app = express();
  app.use(express.json());
  app.use('/api/v1', apiV1Router);
  return app;
}
