import Koa from 'koa';
import Router from '@koa/router';

class ResponseBodyBase<T = unknown> {
  constructor(protected code: number, protected data: T) {}
}

interface RouterConfig {
  method: 'get' | 'post';
  path: 'string';
  getBody: () => ResponseBodyBase;
}

const app = new Koa();
const router = new Router();

const routerConfigs: RouterConfig[] = [];

routerConfigs.forEach((config) => {
  router[config.method]('/', (ctx, next) => {
    ctx.response.body = { a: 1, b: 2 };
    next();
  });
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(7001, 'localhost');
