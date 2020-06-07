import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import { green, yellow } from 'https://deno.land/std@0.53.0/fmt/colors.ts';

import todoRouter from './routes/todo.ts';
import notFound from './middleware/notFound.ts';
import logger from './middleware/logger.ts';

const app = new Application();
const port: number = 8080;

app.use(logger.logger);
app.use(logger.responseTime);
app.use(todoRouter.routes());
app.use(todoRouter.allowedMethods());
app.use(notFound);

app.addEventListener('listen', ({ secure, hostname, port }) => {
  const protocol = secure ? 'https://' : 'http://';
  const url = `${protocol}${hostname ?? 'localhost'}:${port}`;
  console.log(`${yellow('Listening on Port:')} ${green(url)}`);
});

await app.listen({ port });
