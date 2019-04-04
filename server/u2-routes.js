// shapes api server - v2 unprotected routes

require('dotenv').config();

const { debug } = require('./utils');
const Router = require('koa-router');

// handle routes

const router = new Router({
  prefix: '/u2'
});

const hello = 'Hello, World!';

router.get('/hello', async ctx => {
  debug(`text: ${hello}`);
  ctx.body = {
    text: hello,
    status: hello
  };
});

const shapes = [ 'Circle', 'Rectangle', 'Square', 'Triangle' ];

router.get('/shapes', async ctx => {
  const shape = shapes[Math.floor((Math.random() * shapes.length))];
  debug(`shape: ${shape}`);
  ctx.body = {
    shape,
    status: `${shape}`
  };
});

const forms = [ 'Box', 'Cone', 'Cube', 'Sphere' ];

router.get('/forms', async ctx => {
  const form = forms[Math.floor((Math.random() * forms.length))];
  debug(`form: ${form}`);
  ctx.body = {
    form,
    status: `${form}`
  };
});

module.exports = router;

// end of file
