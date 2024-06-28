const express = require('express');
const path = require('node:path');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    const filePath = path.join(process.cwd(), 'views', 'welcome.html');
    return res.sendFile(filePath)
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`)
});

