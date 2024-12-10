import path from 'node:path';

import Koa from 'koa';
import Router from '@koa/router';
import staticServe from 'koa-static';

class ResponseBodyBase<T = unknown> {
  constructor(protected code: number, protected data: T) {}
}

interface RouterConfig {
  method: 'get' | 'post';
  path: string;
  getBody: (request: any) => any;
}

const app = new Koa();
const router = new Router();

const routerConfigs: RouterConfig[] = [
  {
    method: 'get',
    path: '/get',
    getBody: () => {
      return new ResponseBodyBase(200, { a: 1, b: 2 });
    },
  },
];

routerConfigs.forEach((config) => {
  router[config.method](config.path, async (ctx) => {
    ctx.response.body = await config.getBody(ctx.request);
  });
});

app.use(router.routes()).use(router.allowedMethods());

// app.use(async function (ctx, next) {
//   ctx.path = '/';
//   await next();
// });

app.use(staticServe(path.join(__dirname, '../static'), {}));

app.listen(7001, 'localhost');
