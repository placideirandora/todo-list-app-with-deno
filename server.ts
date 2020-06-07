import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();
const router = new Router();
const port: number = 8080;

router.get('/', ({ response }: { response: any }) => {
  response.body = {
    message: 'hello deno, nahasesekaye kbx!',
  };
});

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', ({ secure, hostname, port }) => {
  const protocol = secure ? 'https://' : 'http://';
  const url = `${protocol}${hostname ?? 'localhost'}:${port}`;
  console.log(`Listening on Port: ${port}`);
});

await app.listen({ port });
