const models = require('../models');
const { model } = require('mongoose');

module.exports = {

    post: (req, res, next) => {
        const { comment, postId } = req.body;
        const { _id } = req.user;
        

        models.Comment.create({ comment, author: _id })
            .then((createdComment) => {
                return Promise.all([
                    models.Publication.updateOne({ _id: postId }, { $push: { comments: createdComment } }),
                    models.Comment.findOne({ _id: createdComment._id })
                ]);
            })
            .then(([modifiedObj, commentObj]) => {
                res.send(commentObj);
            })
            .catch(next);
    }
}