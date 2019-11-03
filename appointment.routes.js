const controller = require('./user.controller');
const express = require('express');
const router = express.Router();

router.get('/allAppointments', controller.allAppointments);
router.get('/:id', controller.singleAppointment);
//router.put('/saveUserFav', controller.saverUserFav)
router.post('/addAppointment', controller.saveAppointment);

module.exports = router;
