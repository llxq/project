const fs = require('fs');
const express = require('express');
const app = express();

// app.use(express.static('src'));
app.use(express.static('dist'));
app.use(express.static('data'));

function getData(fileLoad, callback) {
    fs.readFile(fileLoad, (err, data) => {
        if (err) {
            return callback(err, null);
        } else {
            return callback(null, data);
        }
    })
}

// getData('./data/photoShare.json', (err, data) => {
//     if (err) {
//         console.log('读取文件失败');
//     } else {
//         console.log(JSON.parse(data.toString()));
//     }
// })

app.get('/photoShare', (req, res) => {
    getData('./data/photoShare.json', (err, data) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
            res.send(JSON.parse(data.toString()));
        }
    })
})

app.get('/newsList', (req, res) => {
    getData('./data/newsList.json', (err, data) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
             
            res.send(JSON.parse(data.toString()));
        }
    })
})

app.get('/newsInfo', (req, res) => {
    getData('./data/newsInfo.json', (err, data) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
             
            res.send(JSON.parse(data.toString()));
        }
    })
})


app.get('/comment', (req, res) => {
    getData('./data/comment.json', (err, data) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
             
            res.send(JSON.parse(data.toString()));
        }
    })
})


app.listen('8888', () => {
    console.log('8888端口启动了');
})