const express = require('express')
const path = require('path')
const app = express()
const port = 4200

app.use('', express.static(path.join(__dirname, 'dist/angularPractice')))

app.get('/api/events', function (req, res) {
    res.send([
        {
            id: '1',
            name: 'Event 1',
            location: {
                id: '1',
                name: 'IHG Hotel'
            }
        },{
            id: '2',
            name: 'Event 2',
            location: {
                id: '1',
                name: 'IHG Hotel'
            }
        },{
            id: '3',
            name: 'Event 3',
            location: {
                id: '2',
                name: 'Lowe Hotel'
            }
        },{
            id: '4',
            name: 'Event 4',
            location: {
                id: '2',
                name: 'Lowe Hotel'
            }
        }
    ])
})

app.get('/api/contacts', function (req, res) {
    res.send([
        {
            id: 'a000001',
            name: 'Name One'
        },{
            id: 'b000002',
            name: 'Name Two'
        },{
            id: 'c000003',
            name: 'Name Three'
        },{
            id: 'd000004',
            name: 'Name Four'
        },{
            id: 'e000005',
            name: 'Name Five'
        },{
            id: 'f000006',
            name: 'Name Six'
        },{
            id: 'g000007',
            name: 'Name Seven'
        }
    ])
})

app.listen(port, () => {
    console.log(`backend: http://localhost:${port}`)
})
