const express = require('express');

const multer = require('multer');
const uploadConfig = require('./config/upload');

const UserControlle = require('./controllers/UserController');
const PlaceControlle = require('./controllers/PlaceController');
const DashBoardController = require('./controllers/DashBoardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

// User
routes.post('/newUser', UserControlle.store);
// routes.put('/updateUser/:id', UserControlle.update);
// routes.delete('/deleteUser/:id', UserControlle.destroy);
// routes.get('/listUser', UserControlle.index);
// routes.get('/listUser/:id', UserControlle.show);

// Place
routes.post('/newPlace', upload.single('thumbnail'), PlaceControlle.store);
// routes.put('/updatePlace/:id', PlaceControlle.update);
// routes.delete('/deletePlace/:id', PlaceControlle.destroy);
routes.get('/listPlace', PlaceControlle.index);
// routes.get('/listPlace/:id', PlaceControlle.show);

// DashBoard
routes.get('/listPlacesByUser', DashBoardController.show);

// Booking
routes.post('/place/:place_id/booking', BookingController.store);


module.exports = routes;