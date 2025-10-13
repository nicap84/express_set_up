import { Router } from 'express';

import { healthCheckHandler } from './health-check-controller.js';

const router = Router();

router.get('/', healthCheckHandler);

export { router as healthCheckRoutes };
