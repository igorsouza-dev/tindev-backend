const Dev = require('../models/Devs');

module.exports = {
    async store(req, res) {
        const { user } = req.headers;
        const { devId } = req.params;

        const loggedDev = await Dev.findById(user);
        const dislikedDev = await Dev.findById(devId);
        
        if (!dislikedDev) {
            return res.status(400).json({ error: "Disliked Dev doesn\'t exists"});
        }

        if (!loggedDev.dislikes.includes(dislikedDev._id)) {
            loggedDev.dislikes.push(dislikedDev._id);
            await loggedDev.save();
        }

        return res.json(loggedDev);
    }
};