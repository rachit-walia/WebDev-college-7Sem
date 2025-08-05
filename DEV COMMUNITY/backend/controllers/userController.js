const User = require("../models/userModel");

const registerUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    // Validation
    if (!firstName || !email || !password) {
        return res.status(400).send({ message: "Please Add all mandatory fields" });
    }

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: "Already Exist" });
    }

    // Create user
    const newUser = await User.create({
        firstName,
        lastName,
        email,
        password
    });

    res.status(201).json({ message: "USER CREATED", newUser });
};

module.exports = { registerUser };
