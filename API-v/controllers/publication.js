const models = require('../models');
const { model } = require('mongoose');

module.exports = {
    get: (req, res, next) => {
        models.Publication.find().populate('author')
            .then((publications) => {
                res.send(publications)
            })
            .catch(next);
    },

    getById: (req, res, next) => {
        models.Publication.findById(req.query.id)
            .populate('author')
            .populate({
                path: 'comments',
                populate: {
                    path: 'author'
                }
            })
            .then(publication => {
                res.send(publication);
            })
            .catch(next);
    },

    post: (req, res, next) => {
        const { title, carModel, description, image } = req.body;
        const { _id } = req.user;

        if (!title || !carModel || !description) {
            return res.status(400).send('Invalid data!');
        }
        models.Publication.create({ title, carModel, description, image, author: _id })
            .then((createdPublication) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { posts: createdPublication } }),
                    models.Publication.findOne({ _id: createdPublication._id })
                ]);
            })
            .then(([modifiedObj, publicationObj]) => {
                res.send(publicationObj);
            })
            .catch(next);
    },

    likePost: (req, res, next) => {
        const _id = req.query.id;
        const userId = req.user;

        models.Publication.updateOne({ _id }, { $push: { likes: userId } })
            .then(modifiedPublication => {
                res.send(modifiedPublication);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { description } = req.body;
        models.Publication.updateOne({ _id: id }, { description })
            .then((updatedPublication) => res.send(updatedPublication))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.query.id;
        models.Publication.deleteOne({ _id: id })
            .then((removedPublication) => res.send(removedPublication))
            .catch(next)
    }
};