import mongoose from 'mongoose'
const mongodbHost = process.env.MONGODB_HOST || 'localhost'
const mongodbPort = process.env.MONGODB_PORT || 27017
const mongodbName = process.env.MONGODB_NAME || 'login_role'
const mongodbUri = `mongodb://${mongodbHost}:${mongodbPort}/${mongodbName}`

mongoose.connect(mongodbUri,{
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log('base de dato conectada')).catch( err => console.log(err))