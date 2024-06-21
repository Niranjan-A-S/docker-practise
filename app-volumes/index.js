const fsp = require('fs').promises;
const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/feedback', express.static('feedback'));

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'pages', 'feedback.html');
    res.sendFile(filePath);
});

app.get('/exists', (req, res) => {
    const filePath = path.join(__dirname, 'pages', 'exists.html');
    res.sendFile(filePath);
});

app.post('/create', async (req, res) => {
    try {
        const title = req.body.title;
        const content = req.body.text;

        const adjTitle = title.toLowerCase();

        const tempFilePath = path.join(__dirname, 'temp', adjTitle + '.txt');
        const finalFilePath = path.join(__dirname, 'feedback', adjTitle + '.txt');

        await fsp.writeFile(tempFilePath, content);
        const exists = fs.existsSync(finalFilePath);
        if (exists) res.redirect('/exists');

        else {
            await fsp.copyFile(tempFilePath, finalFilePath);
            await fsp.unlink(tempFilePath);
            res.redirect('/');
        }
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log.bind(this, `Server started on port ${PORT}`));

