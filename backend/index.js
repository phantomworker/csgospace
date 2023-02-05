const express = require('express')
const path = require('path')
const app = express()

const loginUser = [
	
]

app.use(express.json())

app.post('/api/login', (req, res) => {
	console.log(req.body)
	res.json({error:1})
})

app.use(express.static(path.resolve(__dirname, 'client')))

app.listen(8081, () => console.log('Server has been started'))