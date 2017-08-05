var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'wsj2008',
    database: 'baidunews'
});

/* 后台路由页面 */
//获取所有新闻列表
router.get('/getnews', function(req, res, next) {
    connection.query('SELECT * FROM `news`', function(err, rows, next) {
        res.json(rows);
    });
});
//模态框取值
router.get('/curnews', function(req, res) {
    var newsid = req.query.newsid;
    connection.query('SELECT * FROM `news` WHERE id=?', [newsid], function(err, rows) {
        res.json(rows);
    });
});
//确认更新
router.post('/update', function(req, res) {
    var newsid = req.body.id;
    newstitle = req.body.newstitle;
    newstype = req.body.newstype;
    newsimg = req.body.newsimg;
    newstime = req.body.newstime;
    newssrc = req.body.newssrc;
    connection.query('UPDATE `news` SET `newstitle` =?,`newstype` =?,`newsimg` =?,`newstime` =?,`newssrc` =? WHERE `id` =?', [newstitle, newstype, newsimg, newstime, newssrc, newsid], function(err, rows, fields) {
        res.json(rows);
    });
});
//确认删除
router.post('/delete', function(req, res) {
    var newsid = req.body.newsid;
    connection.query("DELETE FROM `news` WHERE `news`.`id` = ?", [newsid], function(err, result) {
        res.json(result);
    });
});
//提交新闻
router.post('/insert', function(req, res) {
    var newstitle = req.body.newstitle;
    newstype = req.body.newstype;
    newsimg = req.body.newsimg;
    newstime = req.body.newstime;
    newssrc = req.body.newssrc;
    connection.query("INSERT INTO `news`(`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`)VALUES(?,?,?,?,?)", [newstitle, newstype, newsimg, newstime, newssrc], function(err, result) {
        if (!err) {
            res.json(result);
        }
    });
});
module.exports = router;
