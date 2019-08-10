const Dev = require('../models/Devs');

module.exports = {
    async store(req, res) {
        const { user } = req.headers;
        const { devId } = req.params;

        const loggedDev = await Dev.findById(user);
        const likedDev = await Dev.findById(devId);
        
        if (!likedDev) {
            return res.status(400).json({ error: "Liked Dev doesn\'t exists"});
        }

        if (likedDev.likes.includes(loggedDev._id)) {
            console.log('Match!');
        }

        if (!loggedDev.likes.includes(likedDev._id)) {
            loggedDev.likes.push(likedDev._id);
            await loggedDev.save();
        }

        return res.json(loggedDev);
    }
};