const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Error while connecting to database');
    }
    db.collection('Users').find({ _id: new ObjectID('59f17c6db33d090db18e3b4b')}).toArray().then((docs)=>{
        console.log('found the document');
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        if(err){
            return console.log('unable to find the document');
        }
    });
    //db.close();
});