const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const publicationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
         default: 'https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg'
        },
    author: {
        type: ObjectId,
        ref: "User"
    },
    comments: [{
        type: ObjectId,
        ref: "Comment"
    }],
    likes: [{
        type: ObjectId,
        ref: "User"
    }]

});

module.exports = new Model('Publication', publicationSchema);