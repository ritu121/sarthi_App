const express = require("express");
const router = express.Router();
const Post = require("../model/Photos");

const SECRET = "RESTAPI";

router.get("/posts", async (req, res) =>{
    const posts = await Post.find();
    res.json({
        status: "success",
        posts
    });
})

router.post("/posts", async (req, res) => {
    const post = await Post.create({
        albumId: req.body.albumId,
        userId: req.body.userId,
        name: req.name,
        img: req.body.img
       
    })
    res.json({
        status: "success",
        post
    })
})

router.put("/posts/:id", async (req, res) => {
    const post = await Post.updateOne({_id: req.params.id, user: req.user}, {body: req.body.body});
    if(post.modifiedCount > 0){
        res.json({
            status: "Post updated",
        })
    }else {
        res.json({
            status: "User can not update this post"
        })
    }

})

router.delete("/posts/:id", async (req, res) => {
    const post = await Post.deleteOne({_id: req.params.id, user: req.user});
    console.log(post);
    if(post.deletedCount > 0){
        res.json({
            status: "Post Deleted",
        })
    }else {
        res.json({
            status: "not authorise to delete",
        })
    }
    
})

module.exports = router;