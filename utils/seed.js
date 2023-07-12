const connection = require("../config/connection");

const { User, Thought } = require("../models");

const { getRandomReaction, getRandomThought, getRandomName } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
    console.log("connected");

    let userCheck = await connection.db.listCollections({ name: "users" }).toArray();
    if (userCheck.length) {
        await connection.db.dropCollection("users");
    }

    let thoughtCheck = await connection.db.listCollections({ name: "thoughts" }).toArray();
    if (thoughtCheck.length) {
        await connection.db.dropCollection("thoughts");
    }

    const user = [];

    for (let i = 0; i < 10; i++) {
        const fullName = getRandomName();

        const first = fullName.split(" ")[0];
        const last = fullName.split(" ")[1];

        const username = `${first}_${last}${Math.floor(Math.random() * 100)}`;
        const email = `${first}.${last}${Math.floor(Math.random() * 100)}@email.com`;

        user.push({
            username,
            email,
        });
    }

    const insertedUsers = await User.collection.insertMany(user);

    for (let i = 0; i < insertedUsers.insertedCount; i++) {
        const currentUserId = insertedUsers.insertedIds[i];

        const numFriends = Math.floor(Math.random() * 5);

        for (let j = 0; j < numFriends; j++) {
            const randomFriendIndex = Math.floor(Math.random() * insertedUsers.insertedCount);

            if (randomFriendIndex !== i) {
                const randomFriendId = insertedUsers.insertedIds[randomFriendIndex];
                await User.findByIdAndUpdate(currentUserId, { $addToSet: { friends: randomFriendId } });
            }
        }
    }

    const thought = [];

    for (let i = 0; i < 10; i++) {
        const num = Math.floor(Math.random() * 3);

        for (let j = 0; j < num; j++) {
            const thoughtText = getRandomThought();
            const createdAt = new Date().toLocaleDateString();
            const randomUserIndex = await User.find({});
            const userIndex = i;
            const username = randomUserIndex[userIndex].username;
            const reactions = [];
            for (let k = 0; k < num; k++) {

                const reactionData = getRandomReaction();
                reactions.push([reactionData]);
            }


            thought.push({
                thoughtText,
                createdAt,
                username,
                reactions,
            });
        }
    }
    const userThoughts = await Thought.collection.insertMany(thought);

    for (let i = 0; i < userThoughts.insertedCount; i++) {
        const username = thought[i].username;
        const userId = await User.find({ username: username });
        const thoughts = thought[i]._id;
        await User.findByIdAndUpdate(userId[0]._id, { $addToSet: { thoughts: thoughts } });
    }

    console.table(user);
    console.table(thought);
    console.info("Seeding complete");
    process.exit(0);
});