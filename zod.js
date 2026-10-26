const { z } = require("zod");

const simpleSchema = z.object({
    name: z.string().trim()
        .min(2, "Name must be at least 2 characters"),

    email: z.string().trim().toLowerCase()
        .email("Enter a valid email"),

    password: z.string()
        .min(6, "Password must be at least 6 characters"),
});

const result = simpleSchema.safeParse(req.body);