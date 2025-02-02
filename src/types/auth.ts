import { z } from "zod";

export const SignInSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
});

export const SignUpSchema = z.object({
    fullName: z.string().min(3, {
        message: "Full Name must be at least 3 characters."
    }),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});


export const ForgotPasswordSchema = z.object({
    email: z.string().email("Invalid email address."),
});