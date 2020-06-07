import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import { green, yellow } from 'https://deno.land/std@0.53.0/fmt/colors.ts';

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
  console.log(`${yellow("Listening on Port:")} ${green(url)}`);
});

await app.listen({ port });
