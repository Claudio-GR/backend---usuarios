import express from 'express';
import cors from 'cors';
import { logger } from 'logger-express';
import 'dotenv/config';
import usersRoutes from './routes/users.routes.js';
import loginRoutes from './routes/login.routes.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger());

app.use(usersRoutes);
app.use(loginRoutes);

app.listen(PORT, console.log(`Server on http://localhost:${PORT}`));
