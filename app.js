const express = require('express')
const app = express()
const port = 3000
const { spawn } = require('child_process');

app.use(express.urlencoded({
    extended: true
}))


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post("/getSentiment", (req, res) => {
    const text = req.body["text"];
    const pythonProcess = spawn('python', ['./Analyser/sentimentScript.py']);

    // Send input data to Python script
    pythonProcess.stdin.write(text);
    pythonProcess.stdin.end();

    // Listen for Python script output
    pythonProcess.stdout.on('data', outputData => {
        res.end(outputData);
    });

    // Listen for errors
    pythonProcess.stderr.on('data', err => {
        res.end(err);
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})