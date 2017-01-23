const {MongoClient,ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

    if(err){
        return console.log('Unable to connect to the database server.');
    }
    console.log('Successfuly connected to the server.');

    //deleteMany || also take note that {_id: new ObjectID("")} can be used rather than text
    // db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text:'Doodie'}).then((result)=>{
    //     console.log(result);
    // });

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
        console.log(result);
    });
    //db.close();
});
