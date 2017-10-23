//console.log(process.env.NODE_ENV);
/*if (process.env.NODE_ENV === 'production') {

    module.exports = require('./apiUrl.pqt')
} else {
    module.exports = require('./apiUrl.dev')
}
*/

const ApiUrl = process.env.NODE_ENV === 'production' ?
    require('./apiUrl.pqt') :
    require('./apiUrl.dev');

export default ApiUrl;