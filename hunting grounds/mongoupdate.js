const {MongoClient,ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Users',(err,db)=>{

    if(err){
        return console.log('Unable to connect to the database server.');
    }
    console.log('Successfuly connected to the server.');

    //filter,update,options,callback
    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectID('58859129b6941e3ce7fc6db3')
    // },{
    //     //set update operator!
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result);
    // });

        db.collection('Users').findOneAndUpdate({
        Name:'Charlotte'
    },{
        //set update operator!
        $set:{
            Name:'Charlotte Camacho'
        },
        $inc:{
            Age:1
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });


    //db.close();
});
