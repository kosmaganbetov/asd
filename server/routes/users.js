const express = require ('express');
const User = require("../models/User.js")
const {nanoid} = require("nanoid");
const router = express.Router();


router.get('/:id', async (req,res)=>{
    try{
        const user = await User.findById(req.params.id).select('name lastname email -_id')
        console.log(user);
        res.send(user)
    }catch(e){
        res.status(404)
    }
    
})
router.post('/', async (req, res) => {
    try {
        const user = new User(req.body);
        user.generateToken();
        await user.save();
        res.send(user);
    } catch(error) {
        return res.status(400).send(error);
    }
});

router.post('/sessions', async (req, res) => {
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send({error: 'User not found'});

    const isMatch = await user.checkPassword(req.body.password);

    if(!isMatch) return res.status(400).send({error: "Password is wrong!"});

    return res.send({message: 'Username and password correct!', user});
});

router.post('/secret', async (req, res) => {
    const token = req.get('Authorization');
    if(!token) return res.status(401).send({error: 'No token present'});

    const user = await User.findOne({token});

    if(!user) return res.status(401).send({error: 'Wrong token'});

    return res.send({message: 'secret word', username: user.username});
})

router.delete('/sessions', async (req, res) => {
    const token = req.get('Authorization');
    const successMessage = {message: 'Success'};

    if(!token) return res.send(successMessage);

    const user = await User.findOne({token});

    if(!user) return res.send(successMessage);

    user.token = nanoid();
    await user.save({ validateBeforeSave: false });

    return res.send(successMessage);
})

module.exports = router;