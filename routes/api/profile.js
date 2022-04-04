const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const Profile = require('../../models/Profile');
const {check, validationResult} = require('express-validator');
const { route } = require('./auth');

//@route   Get api/profile/me
//@desc    Get current users profile
//@access  Private
router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name' , 'avatar']);
        
        if(!profile){
            return res.status(400).json({msg: 'there is no profile for this user'});
        }

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});

//@route   Post api/profile
//@desc    Create or Update user profile
//@access  Private
router.post(
    '/', 
    [ 
    auth, 
    [ 
        check('games', 'status is required')
            .not()
            .isEmpty(),       
    ]
    ], 
    async (req, res) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }

        const{
            team,
            tournamentResults,
            location,
            games,
            bio,
            youtube,
            twitter,
            facebook,
            instagram,
            date
        } = req.body;

        //build profile object
        const profileFields = {};
        profileFields.user = req.user.id;
        if(team) profileFields.team = team;
        if(tournamentResults) profileFields.tournamentResults = tournamentResults;
        if(location) profileFields.location = location;
        if(bio) profileFields.bio = bio;
        if(games) {
            profileFields.games = games.split(',').map(games => games.trim());
        }
        // build social object
        profileFields.socialMedia = {}
        if (youtube) profileFields.socialMedia.youtube = youtube;
        if (twitter) profileFields.socialMedia.twitter = twitter;
        if (facebook) profileFields.socialMedia.facebook = facebook;
        if (instagram) profileFields.socialMedia.instagram = instagram;

       
        try {
            let profile = await Profile.findOne({ user: req.user.id});

            if(profile){
                //update
                profile= await Profile.findOneAndUpdate(
                    { user: req.user.id },
                    { $set: profileFields},
                    { new: true}
                );

                return res.json(profile);
            }
            // create
            profile = new Profile(profileFields);

            await profile.save();
            res.json(profile);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('server error');
        }
    }
);


//@route   Get api/profile
//@desc    Get all profiles
//@access  Public
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name' , 'avatar']);
        res.json(profiles);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Na')
    }
});

//@route   Get api/profile/user/user_id
//@desc    Get profile by user ID
//@access  Public
router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', ['name' , 'avatar']);

        if(!profile) 
          return res.status(400).json({ msg: 'Profile not found'});

        res.json(profile);

    } catch (err) {
        console.error(err.message);
        if(err.kind == 'ObjectId'){
            return res.status(400).json({ msg: 'Profile not found'});
        }
        res.status(500).send('Server Na')
    }
});


//@route   Delete api/profile
//@desc    Delete profile, user & post
//@access  Private

router.delete('/', auth, async (req, res) => {
    //Remove profile
    try {
        //Remove profile
        await Profile.findOneAndRemove({ user: req.user.id });
        //Remove user
        await User.findOneAndRemove({ _id: req.user.id });      
        
        res.json({ msg: 'User deleted'});
    } catch (err) {
        
    }
})


module.exports = router;