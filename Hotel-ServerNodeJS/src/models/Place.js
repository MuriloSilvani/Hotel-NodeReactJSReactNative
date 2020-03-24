const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({
    name: String,
    thumbnail: String,
    techs: [String],
    ativo: Boolean,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',    
    }
},{
    toJSON:{
        virtuals: true
    },
});

PlaceSchema.virtual('thumbnail_url').get(function(){
    return `http://localhost:3333/files/${this.thumbnail}`
});

module.exports = mongoose.model('Place', PlaceSchema);