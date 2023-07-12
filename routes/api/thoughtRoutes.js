const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController');

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

router
    .route('/:thoughtID')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router
    .route("/:thoughtID/reactions")
    .post(addReaction)
    .delete(removeReaction);

module.exports = router;