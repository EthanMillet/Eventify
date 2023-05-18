const mongoose = require('mongoose');

const { Schema } = mongoose;

const EventSchema = new Schema({
    name: {
        type: String, 
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    photos: [{type: Schema.Types.ObjectId, ref: 'Photo'}],
    videos: [{type: Schema.Types.ObjectId, ref: 'Video'}],
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]

})