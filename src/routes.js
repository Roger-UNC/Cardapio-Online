const { Router } = require('express');

const ClienteController = require('./controller/ClienteController');
const RestauranteController = require('./controller/RestauranteController');
const ProdutoController = require('./controller/ProdutoController');
const ReservaController = require('./controller/ReservaController');

const routes = new Router();

routes.post('/cliente', ClienteController.store);
routes.get('/cliente', ClienteController.index);
routes.get('/:id/cliente', ClienteController.find);
routes.delete('/:id/cliente', ClienteController.delete);
routes.put('/:id/cliente', ClienteController.update);

routes.post('/restaurante', RestauranteController.store);
routes.get('/restaurante', RestauranteController.index);
routes.get('/:id/restaurante', RestauranteController.find);
routes.delete('/:id/restaurante', RestauranteController.delete);
routes.put('/:id/restaurante', RestauranteController.update);

routes.post('/restaurante/:restaurante_id/produto', ProdutoController.store);
routes.get('/produto', ProdutoController.index);
routes.get('/:id/produto', ProdutoController.find);
routes.delete('/:id/produto', ProdutoController.delete);
routes.put('/:id/produto', ProdutoController.update);

routes.post('/restaurante/:restaurante_id/reserva', ReservaController.store);
routes.get('/reserva', ReservaController.index);
routes.get('/:id/reserva', ReservaController.find);
routes.delete('/:id/reserva', ReservaController.delete);
routes.put('/:id/reserva', ReservaController.update);

module.exports = routes;