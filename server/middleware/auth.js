const auth = require('basic-auth');
const compare = require('tsscmp');

const basicAuth = (req, res, next) => {
    const credentials = auth(req);

    if (!credentials || !check(credentials.name, credentials.pass)) {
        res.setHeader('WWW-Authenticate', 'Basic realm="example"');
        return res.status(401).send('Access denied');
    }

    next();
};

function check(name, pass) {
    const validName = 'admin';
    const validPass = 'password';

    return compare(name, validName) && compare(pass, validPass);
}

module.exports = basicAuth;