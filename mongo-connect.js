const {MongoClient,ObjectID}=require('mongodb');
// MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
// if (err){
//     return console.log('Unable to connect the database');
// }
// console.log('Connected to database');
// db.collection('Todos').insertOne({
//     text:'Something to do',
//     completed:false
// },(err,result)=>{
//     if(err){
//         return console.log('Insertion failed');
//     }
//     console.log(JSON.stringify(result.ops,undefined,2));
// });
//     db.collection('Users').insertOne({
//         _id:'124',
//         name: 'rootUJ',
//         age:'21',
//         location:'Mumbai'
//     }, (err, result) => {
//         if (err) {
//             return console.log('Insertion failed');
//         }
//         console.log(JSON.stringify(result.ops, undefined, 2));
//     });
// db.close();
//});
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('unable to connect to db');
    }
    console.log('Connected to db sucessfully');
    db.collection('YoUJ').insertOne({
        Yofactor:'Terminal-Junkiee',
        _id:'150',
        Mood:'Enthusiatic'
    },(err,result)=>{
        if (err){
           return console.log('unable to add collection');
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    db.close();
})