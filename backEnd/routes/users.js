const express = require("express");
const router= express.Router();

const User = require("../model/user");
const bodyparser = require("body-parser");
const { body, param, validationResult } = require('express-validator');

router.use(bodyparser());
// Get route to fetch the All Users
router.get("/", async (req, res) => {
    const users = await User.find();
    res.json({
        users
    });
})
// POST route-- create data

router.get("*", async (req, res) => {
    res.status(404).json({
        status: "failed",
        message: "API NOT FOUND"
    });

    
})

//get user by ID


router.get('/:id',  async (req, res) =>{
    await User.findById(req.user, function(err, user) {
     res.send(user);
  });
 });



// PUT route-- Add User
router.put("/:id", param("id").isMongoId(), async (req, res) => {
    try{
        await User.updateOne({_id: req.params.id}, req.body);
        return res.json({
             status: "Success",
            data : user
        });
    }catch(e){
        console.log(e);
        return res.status(500).json({
            status: "failed",
            message: e.message
        });
    }
});

// PATCH route-- update user
router.patch("/:id", async (req, res) => {
    try{
        await User.updateOne({_id: req.params.id}, req.body);
        return res.json({
             status: "Success",
            // data : user
        });
    }catch(e){
        console.log(e);
        return res.status(500).json({
            status: "failed",
            message: e.message
        });
    }
});


module.exports = router;     