import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();
const port: number = 8080;

router.get("/", ({ response }: { response: any }) => {
  response.body = {
    message: "hello deno, nahasesekaye kbx!",
  };
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log('running on port ', port);
await app.listen({ port });