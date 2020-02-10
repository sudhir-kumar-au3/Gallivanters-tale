const Creator  = require('../models/CreatorModel')

const addCreator = (req,res) =>{
    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    }
    console.log("BodyData:- ",data);
    Creator.findOne({
        where: {
            email: req.body.email
        }
    }).then(author => {
        if(!author){
            Creator.create(data)
            .then(author => {
                res.json(author)
            })
            .catch(error =>{
                    res.status(500).json({error:error.message})
                })
           
        }else{
            res.json({error:"Email id already taken"})
        }
    }).catch(error => {
        res.status(500).json({error: error.message})
    })
}
module.exports = {
    addCreator
}