const express = require('express')
const router = express.Router()
const uuid = require('uuid')
const members = require('../../Members')


// route to get all members
router.get('/', (req, res) => {
    res.json(members)
})

// rout to get single user


router.get('/:id', (req, res) => {
    // res.send(req.params.id)
    const foundMember = members.some(member => member.id === parseInt(req.params.id))

    if (foundMember) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)))

    } else {
        res.status(400).json({ msg: `No member with the ID ${req.params.id}` })
    }


})


// create a member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }
    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: `Add name and email` })
    }

    members.push(newMember)
    res.json(members)
})


// update a member
router.put('/:id', (req, res) => {
    const found = members.some(member.id === parseInt(req.params.id))

    if (found) {
        const updateMenmber = req.
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                members.name = updateMenmber.name ? updateMenmber.name : member.name

                member.email = updateMenmber.email ? updateMenmber.email : member.email


                res.json({ msg: `member updated`, member })
            }


        });
    } else {
        res.status(400).json({ msg: `no member with ID ${req.params.id}` })
    }

})

module.exports = router