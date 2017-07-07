const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

//temp
const topics = [{
    link: "/discuss/topic/269455/?atprivatesupercoolsohaha&postid=0",
    postName: "Welcome",
    reps: "1",
    views: "99999",
    owner: "DatOneLefty",
    date: "1499353235",
    latestowner: "herohamp",
    latestdate: "149935323543"

}, {
    link: "/discuss/topic/269455/?atprivatesupercoolsohaha&postid=1",
    postName: "Welcome2",
    reps: "1",
    views: "99999",
    owner: "DatOneLefty",
    date: "1499353235",
    latestowner: "herohamp",
    latestdate: "14993532352"
}];

const posts = [
    [{
        number: 1,
        time: 1499391922,
        username: "herohamp",
        text: "HELLO! Welcome to post number 0"
    }],
    [{
        number: 1,
        time: 1499391922,
        username: "herohamp",
        text: "HELLO! Welcome to post number 1"
    }]
]
app.get('/', function(req, res) {
    res.redirect('https://scratch.mit.edu/discuss/-1/');
})

app.get('/topics', function(req, res) {
    res.send(JSON.stringify(topics));
})

app.get('/posts/:id', function(req, res) {
    try {
        res.send(JSON.stringify(posts[req.params.id]));
    }
    catch (err) {}
})

app.post('/:topic', function(req, res) {
    topics[req.params.topic].posts += req.body.post;
    res.send("Post send");
})
var port = 8080;
app.listen(port, function() {
    console.log('Example app listening on port ' + port + '!')
})
