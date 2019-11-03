'use strict'

const models = require('../../models/db');

exports.allAppointments = (req, res) => {
  models.Appointment.findAll()
  .then(Appointments => {
    res.json(Appointments);
  })
  .catch(error => {
    console.log(error);
    res.status(404).send(error);
  })
}

exports.singleAppointment = (req, res) => {
  let id = req.params.id;

  models.Appointment.findById(id)
  .then(Appointment => {
    res.json(Appointment);
  })
  .catch(error => {
    console.log(error);
    res.status(404).send(error);
  })
}

exports.saveAppointmentFav = (req, res) => {
  let type = req.body.apptType;
  let time = req.body.Time;
  let AppointmentId = req.body.AppointmentId;

  models.Appointment.create({
    type,
    time,
    AppointmentId
  })
  .then(() => {
    res.json({sucess: 'Sucess, appointment added for Appointment!'});
  })
  .catch(error => {
    console.log(error);
    res.status(404).send(error);
  })
}

exports.saveAppointment = (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  let phone = req.body.phone;


  models.Appointment.create({name, email, password, phone})
  .then(Appointment => {
    res.json(Appointment);
  })
  .catch(error => {
    console.log(error);
    res.status(404).send(error);
  })

}
