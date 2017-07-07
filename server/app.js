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
    link: "/discuss/-1/post/1",
    postName: "Welcome",
    reps: "1",
    views: "99999",
    owner: "DatOneLefty",
    date: "1499353235",
    latestowner: "herohamp",
    latestdate: "149935323543",
    posts: []

}, {
    link: "/discuss/-1/post/1",
    postName: "Welcome2",
    reps: "1",
    views: "99999",
    owner: "DatOneLefty",
    date: "1499353235",
    latestowner: "herohamp",
    latestdate: "14993532352",
    posts: []
}];
app.get('/', function(req, res) {
    res.redirect('https://scratch.mit.edu/discuss/-1/');
})

app.get('/topics', function(req, res) {
    res.send(JSON.stringify(topics));
})

app.post('/:topic', function(req, res) {
    topics[req.params.topic].posts += req.body.post;
    res.send("Post send");
})

app.listen(8080, function() {
    console.log('Example app listening on port 3000!')
})
