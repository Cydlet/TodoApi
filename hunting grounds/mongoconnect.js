//new instance of ObjectID
// var obj = new ObjectID();
// console.log(obj);

//pull stuff from objects to make variables!
// var user = {name:'aero', age:1};

//makes "name" into a variable.
// var{name} = user;

//const MongoClient = require('mongodb').MongoClient;
//object destructuring. bottom same as top, but has object ID
const {MongoClient,ObjectID}= require('mongodb');



//url () then callback
MongoClient.connect('mongodb://localhost:27017/Users',(err,db)=>{
    //error handling(the return prevents console.log from running.)
    if(err){
        return console.log('Unable to connect to the database server.');
    }
    console.log('Successfuly connected to the server.');





        //makes a collection || lets you insert a doccument
    // db.collection('Todos').insertOne({
    //     text: 'Something is here!',
    //     completed:false
    // },(err,result)=>{
    //     if(err)
    //     {
    //         //passes the error
    //         return console.log('Unable to insert todo: ',err);
    //     }
    //     //ops, filter, indentation
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });
    

        //just another example!
//     db.collection('Users').insertOne({
//         //you can specify ID instead of random, but why would you want that lol
//         //_ID: 3000
//         Name: 'Sulfur',
//         Age: '15',
//         Location: 'CA',
//         Occupation: 'Student'
//     },(err,result)=>{
//         if(err)
//         {
//             //passes the error
//             return console.log('Unable to insert User: ',err);
//         }
//         //ops, filter, indentation, gets timestamp! and some other neat things with it.
//         console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
//     });



    db.close();
});
