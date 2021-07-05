const mongoose = require('mongoose')

const dbUrl = `mongodb://127.0.0.1:27017/graph-ql`

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('db connected')
}).catch(() => {
    console.log('db not connected')
})