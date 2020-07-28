const express = require("express");
const fs = require("fs");
const app = express(); 
const mongo = require('mongodb'); 
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const dbName = 'smartOrganiser';
const collection = 'items';

// https://www.w3schools.com/nodejs/nodejs_mongodb_insert.asp
//MongoClient.connect(url, function (err, db) {
//    if (err) throw err;
//    var dbo = db.db("mydb");
//    var myobj = { name: "Company Inc", address: "Highway 37" };
//    dbo.collection("customers").insertOne(myobj, function (err, res) {
//        if (err) throw err;
//        console.log("1 document inserted");
//        db.close();
//    });
//}); 

app.post("/api/test", (req, res, err) => {
    res.send(200);
});

app.post("/api/list", (req, res, err) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("smartOrganiser");
        dbo.collection("items").find({}).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
            db.close();
        });
    }); 
});

app.post("/api/add/:name/:comment/:reference", (req, res, err) => {
    req.params.comment = req.params.comment.replace("_"," ");
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("smartOrganiser");
        var item = { name: req.params.name, comment: req.params.comment, reference: req.params.reference};
        dbo.collection("items").insertOne(item, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    }); 
    console.log(req.params.name+" || "+req.params.comment+" || "+req.params.reference);
    res.sendStatus(200);
});

app.listen(3000, () => console.log("listening 3000..."));