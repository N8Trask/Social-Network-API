const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');


router.route('/').get(getAllUsers).post(createUser);

router
    .route('/:userID')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/:userID/friends/:friendID')
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;