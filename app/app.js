import Koa from 'koa';
import connectorsInit from './connectors';

connectorsInit();

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = '<h3>Test</h3>';
});

export default app;
