var express = require('express');
var mysql = require('mysql');
var app = express();

//express使用ejs作為模板引擎
app.set('view engine', 'ejs');
app.use(express.static('public'));

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port: '3306',
    database: "database",  //指定剛剛新增的Mask資料庫
    multipleStatements: true //新增此項，同時執行兩個語句
    // multipleStatements 預設是false 要記得設
})
//連線
connection.connect(function (error) {
    if (error) {
        console.log('連線失敗');
        return;
    }
    console.log('連線成功');
});



const getMC = (query) => new Promise((resolve) => {
    connection.query(query, function (error, rows) {
        if (error) {
            console.log(error);
        }
        resolve(rows);
    });
})
app.get('/memberCenter', async function (req, res) {
    // 我的收藏資料表撈資料
    const sq1 = 'SELECT * FROM favtable, itemimg, item WHERE favtable.itemId = itemimg.itemId AND itemimg.itemId = item.itemId AND userId = "u123456789" AND  itemimgLead = "1";'
    // 訂單管理 分別 準備出發 已出發 已取消撈資料
    const sq2 = 'SELECT * FROM `ordertable`, `itemimg`, `item` WHERE ordertable.itemId = itemimg.itemId AND itemimg.itemId = item.itemId AND itemImgLead = 1 AND orderDeter = 1;'
    const sq3 = 'SELECT * FROM `ordertable`, `itemimg`, `item` WHERE ordertable.itemId = itemimg.itemId AND itemimg.itemId = item.itemId AND itemImgLead = 1 AND orderDeter = 2;'
    const sq4 = 'SELECT * FROM `ordertable`, `itemimg`, `item` WHERE ordertable.itemId = itemimg.itemId AND itemimg.itemId = item.itemId AND itemImgLead = 1 AND orderDeter = 3;'
    const data = await getMC(sq1);
    const data1 = await getMC(sq2);
    const data2 = await getMC(sq3);
    const data3 = await getMC(sq4);
    res.render('memberCenter', { data, data1, data2, data3 })
})

// 原本的
// app.get('/memberCenter', function (req, res) {
//     //在inventory資料表中，查詢所有欄位的資料
//     connection.query('SELECT * FROM favtable, itemimg, item WHERE favtable.itemId = itemimg.itemId AND itemimg.itemId = item.itemId AND userId = "u123456789" AND  itemimgLead = "1"; '
//         , function (error, rows) {
//             if (error) {
//                 console.log(error);
//             }
//             // res.send(rows[0]); // [{},{}]
//             res.render('memberCenter', { data: rows })

//         });
// })



// 會員訂單>查看憑證 路徑
app.get('/Receipt', function (req, res) {
    //在inventory資料表中，查詢所有欄位的資料
    connection.query('SELECT orderNumber, orderDate, itemTitle, orderQua FROM ordertable, item WHERE ordertable.itemId = item.itemId;'
        , function (error, rows) {
            if (error) {
                console.log(error);
            }
            // res.send(rows[0].orderDate); // "2022-10-06T16:00:00.000Z"
            // .toLocaleDateString();日期的標準格式，轉換為僅保留日期(不含時間)的字串格式
            var chengData = rows[0].orderDate.toLocaleDateString()            
            res.render('Receipt', {
                data: rows,
                chengData: chengData
            })

        });
});



// 會員訂單>查看憑證>掃描QRcode 路徑
app.get('/receiptQr', function (req, res) {
    //在inventory資料表中，查詢所有欄位的資料
    connection.query('SELECT orderNumber, itemTitle, userName, orderDeter FROM ordertable, item, usertable WHERE usertable.userId = ordertable.userId AND ordertable.itemId = item.itemId AND orderDeter NOT IN ("3");'
        , function (error, rows) {
            if (error) {
                console.log(error);
            }
            res.render('receiptQr', { data: rows })

        });
})






app.listen(3000);
