const express = require('express');
const app = express();

app. get('/', (req, res)  => {
    res.json([{
        Fname:'john',
        Lname:'cena'
    },
    {
        Fname:'cody',
        Lname:'Rhodes'
    }
])
})
app.listen(5000, () => {
    console.log("Started");
})