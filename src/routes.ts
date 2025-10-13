import { Router } from 'express';

import { healthCheckRoutes } from './features/health-check/health-check-routes.js';

export const apiV1Router = Router();

apiV1Router.use('/health-check', healthCheckRoutes);
