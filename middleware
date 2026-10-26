
const express = require("express");

consst { z } = require("zod");

 const app = express()

app.use(express.json());


const signupSchema = z.object({
    name: z.string()
        .trim()
         min(2, "Name must be at least 2 characters"),

    email: z.string()
        .trim()
        .toLowerCase()
        .email("Enter a valid email),

    password: z.string()
        .min(6, "Password must be at least 6 characters"),
});


app.post("/register", (req, res) => {
    const result = signupSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            message: "Validation failed",
            errors: result.error.issues.map((issue) => ({
                field: issue.path.join("."),
                message: issue.message
            })),
        });
    }

    const { name, email, password } = result.data;

    return res.status(201).json({
        message: Validation successful",
        user: {
            name,
            email,
        },
    });
});

app.listen(3000, () => {
    consolee.log("Server running on port 3000");
});
