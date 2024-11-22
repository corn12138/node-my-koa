import koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import dotenv from 'dotenv';

// 加载环境变量
dotenv.config();

const app = new koa();
const router = new Router();

// 中间件
app.use(bodyParser()); // 解析请求体

// 路由
router.get('/', async (ctx) => {
  ctx.body = 'Hello Koa';
});
router.post('/data', async (ctx) => {
    const data = ctx.request.body;
    ctx.body = {
      message: 'Data received successfully!',
      data,
    };
  });

//   应用路由
app.use(router.routes()).use(router.allowedMethods()); //  z这里的router.allowedMethods()是为了处理不支持的请求方法

// 启动服务
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});