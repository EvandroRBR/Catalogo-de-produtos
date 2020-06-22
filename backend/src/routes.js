import { Router } from 'express';

import UserController from './app/controller/UserController';

const routes = new Router();

routes.get('/products', UserController.index);
routes.post('/products/filter', UserController.show);
routes.post('/products', UserController.create);
routes.put('/products', UserController.update);
routes.delete('/products/:id', UserController.delete);

export default routes;
