import morgan from 'morgan';

import { buildApp } from './app.js';

const port = Number(process.env.PORT || 3000);
const app = buildApp();

const environment = process.env.NODE_ENV || 'development';
app.use(environment === 'development' ? morgan('dev') : morgan('tiny'));

const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Listen for the SIGTERM signal to gracefully shut down the server.
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});
