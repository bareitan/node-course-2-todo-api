// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err) {
        return console.log('Unable to connect ot MongoDB server')
    }
    console.log('Connected to MongoDB server')
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectId("590a0f0c3840301a056600e3")
    }, {
            $set: {
                completed: true
            }
        }, {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result)
    })

    // db.collection('Users').deleteMany({name: 'Andrew'})
    // db.collection('Users').findOneAndDelete({
    //     id:new ObjectID('590a08056e37c33150576f50')}).then((results) => console.log(
    //         JSON.stringify(results,undefined,2))
    //     )

    // db.close()
});
