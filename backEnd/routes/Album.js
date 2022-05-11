const express = require("express");
const router = express.Router();
const Album = require("../model/Album");

const SECRET = "RESTAPI";
//get all ablum
router.get("/ablum", async (req, res) =>{
    const albums = await Album.find();
    res.json({
        status: "success",
        albums
    });
})

router.get('/ablum/:id',  async (req, res) =>{
    await Album.findById(req.user, function(err, user) {
     res.send(user);
  });
 });
// add album
router.post("/albums", async (req, res) => {
    const album = await Album.create({
        
        userId: req.body.userId,
        name: req.name,
        // date: req.date
       
    })
    res.json({
        status: "success",
       album
    })
})
//update album
router.put("/album/:id", async (req, res) => {
    const album = await Album.updateOne({_id: req.params.id, user: req.user}, {body: req.body.body});
    if(album.modifiedCount > 0){
        res.json({
            status: "album updated",
        })
    }else {
        res.json({
            status: "User can not update this album"
        })
    }

})



module.exports = router;