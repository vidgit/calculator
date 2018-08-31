function addNumbers(){
    console.log("Inside add numbers")
    var python = require("python-shell")
    var path = require("path")
    var a = document.getElementById("a").value
    var b = document.getElementById("b").value
    document.getElementById("a").value=""
    document.getElementById("a").value=""
    document.getElementById("log").value=""
    var options = {
        scriptPath: path.join(__dirname, '/../engine/'),
        args: [a,b]
    }

    var add = new python('main.py', options);

    add.on('message', function (message) {
        console.log("new message!!")
        console.log(message);
        document.getElementById("log").value+=message;
    })
}