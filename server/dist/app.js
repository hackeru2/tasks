"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var cors = require('cors');
const app = express_1.default();
app.use(cors());
var db = require("../database.js");
// const router: Router = express.Router();
const add = (a, b) => a + b;
app.get("/", (req, res, next) => {
    // console.log('add(5,5)', add(5, 5))
    var sql = "select * from task";
    var params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        // res.json({
        //     "message": "success",
        //     "data": rows
        // })
        res.send(rows);
    });
});
app.post("/:index/create", (req, res, next) => {
    // let index = Number(req.params.index);
    res.send("create");
});
app.put("/:index/update", (req, res, next) => {
    // let index = Number(req.params.index);
    res.send("update");
});
app.delete("/:index/delete", (req, res, next) => {
    // let index = Number(req.params.index);
    res.send("delete");
});
app.get("/:index", (req, res, next) => {
    let index = Number(req.params.index);
    console.log(req.params.index);
    res.send(vip_arr[index]);
});
app.listen(5000, () => console.log('ServerRunning'));
var vip_arr = [
    {
        "name": "דוגמא",
        "worth": "דוגמא",
        "date": "דוגמא",
        "source": "דוגמא",
        "country": "דוגמא",
        "tel": "דוגמא",
        "email": "דוגמא"
    }, {
        "name": "Bill Gates",
        "worth": "$90B",
        "date": "1.1.1955",
        "source": "microsoft",
        "country": "USA",
        "tel": "0555999230",
        "email": "nycity@gkam.co.iol"
    }, {
        "name": "Warren Buffett",
        "worth": "$84B",
        "date": "12.2.1931",
        "source": "Berkshire Hathaway",
        "country": "USA",
        "tel": "05465366239",
        "email": "expressjs@exco.com"
    },
    {
        "name": "Mark Zuckerberg",
        "worth": "$71B",
        "date": "3.4.1984",
        "source": "Facebook",
        "country": "USA",
        "tel": "05465366233",
        "email": "amir1001@gmail.com"
    },
    {
        "name": "Larry Ellison",
        "worth": "$57B",
        "date": "5.7.1945",
        "source": "Sun, Oracle",
        "country": "USA",
        "tel": "0552556443",
        "email": "zjnas@fmail.com"
    },
    {
        "name": "Michael Bloomberg",
        "worth": "$50B",
        "date": "23.4.1942",
        "source": "Bloomberg",
        "country": "USA",
        "tel": "0552556666",
        "email": "zabit@nurmagomerov.com"
    }
];
app.get("/api/users", (req, res, next) => {
    var sql = "select * from user";
    var params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        });
    });
});
app.get("/api/users", (req, res, next) => {
    var sql = "select * from user";
    var params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        });
    });
});
app.get("/api/user/:id", (req, res, next) => {
    var sql = "select * from user where id = ?";
    var params = [req.params.id];
    db.all(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": row
        });
    });
});
app.post("/api/task/", (req, res, next) => {
    var sql = 'INSERT INTO task (title, email, user_id , content ,date, tel) VALUES ( ? , ? , ? , ? , ? , ?)';
    // var params = [title, email, user_id, content, date, tel]
    db.run(sql, ['amir task', 'amir@dkf.com', ' 1', ' cnoedas asd', '1220', '043-2234-232'], function (err, result) {
        if (err) {
            res.status(400).json({ "error": err });
            return;
        }
        console.log({ _this: this });
        res.json({
            "message": "success",
            "data": this.lastID
        });
    });
});
