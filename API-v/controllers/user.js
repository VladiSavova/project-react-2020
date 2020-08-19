const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');

module.exports = {
    get: (req, res, next) => {
        models.User.findById(req.query.id).populate('posts')
            .then((user) => res.send(user))
            .catch(next)
    },

    post: {
        register: (req, res, next) => {
            const { username, password, carModel, avatar, rePassword } = req.body;

            if (!username.match(/^[a-zA-z0-9]{3,}$/)) {
                return res.status(401).send('Username must consist only letters and digits and to be atleast 3 charecters long!');
            }

            if (password.length < 6) {
                return res.status(401).send('Password must be atleast 6 characters long');
            }

            if (password !== rePassword) {
                return res.status(401).send('Passwords do not match!');
            }
            
            models.User.create({ username, password, carModel, avatar })
                .then((createdUser) => {
                    const token = utils.jwt.createToken({ id: createdUser._id });
                    res.header('Authorization', token).send(createdUser)
                })
                .catch(next)
        },

        login: (req, res, next) => {
            const { username, password } = req.body;
            models.User.findOne({ username })
                .then((user) => {
                    if (!user) {
                        res.status(401).send('Invalid username');
                        return
                    }

                    return Promise.all([user, user.matchPassword(password)])
                })
                .then(([user, match]) => {

                    if (!match) {
                        res.status(401).send('Invalid password');
                        return;
                    }

                    const token = utils.jwt.createToken({ id: user._id });
                    res.header('Authorization', token).send(user);
                })
                .catch(next);
        },

        verifyLogin: (req, res, next) => {
            const token = req.body.token || '';

            Promise.all([
                utils.jwt.verifyToken(token),
                models.TokenBlacklist.findOne({ token })
            ])
                .then(([data, blacklistToken]) => {
                    if (blacklistToken) { return Promise.reject(new Error('blacklisted token')) }

                    models.User.findById(data.id)
                        .then((user) => {
                            return res.send({
                                status: true,
                                user
                            });
                        });
                })
                .catch(err => {

                    if (['token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
                        res.status(401).send('UNAUTHORIZED!');
                        return;
                    }

                    res.send({
                        status: false
                    });
                })
        },

        logout: (req, res, next) => {
            const token = req.cookies[config.authCookieName];
            console.log('-'.repeat(100));
            console.log(token);
            console.log('-'.repeat(100));
            models.TokenBlacklist.create({ token })
                .then(() => {
                    res.clearCookie(config.authCookieName).send('Logout successfully!');
                })
                .catch(next);
        }
    },

    put: (req, res, next) => {
        const id = req.params.id;
        console.log(id);
        const { username, carModel, avatar } = req.body;

        if (!username.match(/^[a-zA-z0-9]{3,}$/)) {
            return res.status(400).send('Username must consist only letters and digits and to be atleast 3 charecters long!');
        }

        models.User.updateOne({ _id: id }, { username, carModel, avatar })
            .then((updatedUser) => res.send(updatedUser))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.User.deleteOne({ _id: id })
            .then((removedUser) => res.send(removedUser))
            .catch(next)
    }
};