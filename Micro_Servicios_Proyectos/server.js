const app = require('./app')
const { mongoConn } = require('./databases/configuration')
const dotenv = require('dotenv').config()

const conn = mongoConn()
app.set('port', process.env.PORT || 5000)

app.listen(app.get('port'), () => {
    console.log(`inicio por puerto: ${app.get('port')}`)
})