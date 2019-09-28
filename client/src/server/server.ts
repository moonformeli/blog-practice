import express from 'express';
import next from 'next';
import nextRoutes from 'next-routes';
import path from 'path';

interface IRoutes {
  route: string;
  path: string;
}

interface INextRoutes {
  routes: IRoutes[];
}

const app = express();
const port = parseInt(process.env.PORT, 10) || 5000;
const isDev = process.env.NODE_ENV === 'development';
const nextServer = next({
  dev: isDev,
  dir: path.join(path.resolve(__dirname), '..'),
});

const nextRoute = new nextRoutes();

const nextRouteList: INextRoutes[] = [
  {
    // 홈
    routes: [
      {
        route: '/',
        path: '/index',
      },
    ],
  },
  {
    // Post
    routes: [
      {
        route: '/post/:id',
        path: '/post/post',
      },
    ],
  },
  {
    // About
    routes: [
      {
        route: '/about',
        path: '/about/about',
      },
    ],
  },
  {
    // Admin
    routes: [
      {
        route: '/admin',
        path: '/admin/admin',
      },
    ],
  },
];

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

(async () => {
  await nextServer.prepare();

  nextRouteList.forEach((routeGroup: INextRoutes) => {
    const { routes } = routeGroup;
    routes.forEach(route => {
      const name = route.route;
      nextRoute.add({ name, pattern: route.route, page: route.path });
    });
  });

  const handler = nextRoute.getRequestHandler(nextServer, async ({ req, res, route, query }: any) => {
    try {
      nextServer.renderToHTML(req, res, route.page, query).then(html => {
        res.send(html);
      });
    } catch (err) {
      console.error(err);
      nextServer.renderError(err, req, res, route.page, query);
    }
  });

  app.get('*', (req, res) => {
    try {
      handler(req, res);
    } catch (err) {
      console.error('app.get error', err);
    }
  });
})();
