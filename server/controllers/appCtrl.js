const {Creator, BlogPost, Comment}  = require('../db/dbConfig');
const paginate = require('jw-paginate')
const getAllBlog = (req,res) =>{
    console.log("userId: ", req.params.blogId)
    if(req.params.blogId){
        BlogPost.findOne({
            where: {
                blogId: req.params.blogId
            },
            include:[Creator, Comment]
        })
        .then(data => {
            if(data){
                res.json(data)
            }
            else{
                res.json("error: no response")
            }
        })
        .catch(error => {
            res.status(500).json({error: error.message})
        })
    }
    else{
        BlogPost.findAll({
            include:[Creator,Comment],
            order: [['updatedAt', 'DESC']]
        })
        .then(data => {
            const page = parseInt(req.query.page) || 1;
            const pageSize = 9;
            const pager = paginate(data.length, page, pageSize);
            const pageOfData = data.slice(pager.startIndex, pager.endIndex + 1);
            console.log(pager);
            res.json({pager, pageOfData})
        })
        .catch(error => {
            res.status(500).json({error: error.message})
        })
    }
}
module.exports = {
    getAllBlog
}