const multer = require('multer');
const firebaseStorage = require('multer-firebase-storage');
const firebase = require('./firebase.config');
const serviceAccount = require('../drive-222ea-firebase-adminsdk-e6gzb-463bb98607.json');


const storage = firebaseStorage({
    credential: firebase.credential.cert(serviceAccount),
    bucketName: 'drive-222ea.appspot.com',
    unique: true,
})


const upload = multer({
    storage: storage,
})

module.exports = upload;

//when a file come from frontedn to server, then server help to handel the file