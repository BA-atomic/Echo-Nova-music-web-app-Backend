const express = require('express');

const router = express.Router();

router.get('/get/search-list', async (req, res) => {
    //-----------------------------------------------------------------
    //- Gemini helped with the search params connection to the frontend
    //-----------------------------------------------------------------
    const { term, media, limit } = req.query;
    //-
    if (!!!term) {
        return res.status(400).json({ error: 'Term is required' });
    }
    //-
    try {
        const iTunesURL = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&media=${media}&limit=${limit}`;
        const response = await fetch(iTunesURL);
        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ 
            error: 'Internal Server Error',
        });
    }
});

module.exports = router;
