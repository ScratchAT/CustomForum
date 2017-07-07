from flask import Flask, redirect, request
import json
app=Flask(__name__)

topics = [{
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

@app.route("/")
def index():
    return redirect("https://scratch.mit.edu/discuss/-1")

@app.route("/topics")
def topics():
    return json.dumps(topics)

@app.route("/posts/<id>")
def posts(id):
    try:
        return json.dumps(posts[id])
    except IndexError:
        pass

@app.route("/<topic>",methods=["POST"])
def post(topic):
    topics[topic].posts+=request.form.get("post")

if __name__ == '__main__':
    app.run()

    
