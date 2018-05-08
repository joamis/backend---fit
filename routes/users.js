let express = require('express');
let router = express.Router();

let User = require('../model/users.js');
let jwt = require('jsonwebtoken');

router.post('/user', (req, res) => { console.log(req.body);
    User.login(req.body, (err, user) => {
        if (err || !user || !user.length) {
            res.status(401).json({
                title: 'Unable to log in',
                error: {message: 'Bad credentials'}
            });
        }
        else {
            const username = user[0].login
            const payload = {
                username: username
            };

            let token = jwt.sign(payload, req.app.get('privateKey'), {
                expiresIn: 144000
            });
            res.json({
                token: token,
                user: user[0]
            });
        }
    });
});

router.post('/addUser', (req, res) => {
    console.log('pppp');
    const user = new User(req.body);
    User.addUser(user, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.send(user);
    });
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
