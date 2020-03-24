const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    status: Boolean,
    approved: Boolean,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',    
    },
    place:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Place',    
    }
});

module.exports = mongoose.model('Booking', BookingSchema);