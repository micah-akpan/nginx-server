const express = require('express')

const app = express()

app.get('/greet', (req, res) => {
    res.json({ message: 'Hello world' })
})

app.listen(3000, () => {
    console.log('server open for biz on port 3000')
})
