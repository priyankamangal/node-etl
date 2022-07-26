var app = require('express')();
var http = require('http').createServer(app);
var cron = require('node-schedule');
var listner=app.listen(8888, function(){
	console.log('Listening on port ' +listner.address().port);
});
var bodyParser = require('body-parser');
const mongoose = require("mongoose");
const NestDeviceModel = require("./model/nestDevice.model");
const HoneyWellDeviceModel = require("./model/honeywellDevice.model");

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/MDevice", { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
    if (!err) {
        console.log("Connected To Local MongoDB Database !");
    }
    else {
        console.log("Connection Failed !");
    }
});

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
});
const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

var rule = new cron.RecurrenceRule();

rule.minute = new cron.Range(0, 59, 1);

cron.scheduleJob(rule, function(){
    console.log(rule);
    console.log('To Get Data of Device Every 1 Min');
});


app.post('/UpNestDevice', function (req,res) {
    var req = req.body;
    let deviceId = res.deviceId;

    var deviceData = new NestDeviceModel(req);
	deviceData.save(function (err) {
		if (err) {
			console.log(err);
		}
		else {
			console.log("Device Inserted !")
		}
	});
	res.send("Success");
});

app.post('/UpHoneyWellDevice', function (req,res) {
    var req = req.body;
    let deviceId = res.deviceId;

    var deviceData = new HoneyWellDeviceModel(req);
	deviceData.save(function (err) {
		if (err) {
			console.log(err);
		}
		else {
			console.log("Device Inserted !")
		}
	});
	res.send("Success");
});