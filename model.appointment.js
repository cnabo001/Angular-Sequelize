const Sequelize = require('sequelize');
// const db = require('./db');


module.exports = sequelize => {
    const Appointment = sequelize.define('Appointment', {
        id: {type: Sequelize.INTEGER(11), allowNull: false, autoIncrement: true, primaryKey: true},
        location: {type: Sequelize.STRING},
        service: {type: Sequelize.STRING},
        date: {type: Sequelize.DATE},//DATE
        time: {type: Sequelize.TIME},//TIME
        cost: {type: Sequelize.DOUBLE},//double
        paymentMethod: {type: Sequelize.BOOLEAN}//BOOLEAN
    }
    
    , {
        classMethods: {
            associate: function(models) {
                Appointment.hasmany(models.User, {as: 'onSchedule', through: 'AppointmentList', foreignKey: 'apptId'});
                Appointment.hasOne(models.PayTransaction, {as: 'Payments', foreignKey: 'payId'});
            }
        }
    }
    
    );

    return  Appointment;
};

