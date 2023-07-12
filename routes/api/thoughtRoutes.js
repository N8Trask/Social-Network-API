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

router.route('/').get(getAllThoughts).post(createThought);

router
    .route('/:thoughtID')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;