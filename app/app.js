import Koa from 'koa';

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = '<h3>Test</h3>';
});

export default app;