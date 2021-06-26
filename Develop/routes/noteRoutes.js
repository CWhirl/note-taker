const router = require('express').Router();
const save = require('../db/save');

router.get("/notes", (req, res) => {
    save
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err))
});

router.post("/notes", (req, res) => {
    save
        .saveNote(req.body)
        .then(note => res.json(note))
        .catch(err => res.status(500).json(err))
});

router.delete("/notes/:id", (req, res) => {
    save
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err))
});

module.exports = router