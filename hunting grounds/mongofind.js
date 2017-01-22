const {MongoClient,ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Users',(err,db)=>{

    if(err){
        return console.log('Unable to connect to the database server.');
    }
    console.log('Successfuly connected to the server.');
    //if find is null, it finds everything. Returns a mongoDB cursor
    //.then converts docs to an array also .then is a promise.
    // db.collection('Todos').find({
    //    //completed:false
    //    //looks for the ID!
    //    _id:new ObjectID('588402ecccf81b1b00b17f61')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err)=>{
    //     console.log('Unable to fetch notes!',err)
    // });

        db.collection('Users').find().count().then((count)=>{
        console.log(`Todos Unfinished: ${count}`);


    },(err)=>{
        console.log('Unable to fetch notes!',err);
    });

    //db.close();
});
