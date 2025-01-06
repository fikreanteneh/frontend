import CustomFormField from "@/components/CustomFormField";
import OAuth from "@/components/OAuth";
import OrDivider from "@/components/OrDivider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
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

const Signup = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            fullName: "",
            confirmPassword: ""
        },
    });
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <Card className="w-full max-w-sm" >
                        <CardHeader>
                            <CardTitle className="text-2xl text-center">Sign Up</CardTitle>
                            {/* <CardDescription>
                                TODO: Description
                            </CardDescription> */}
                        </CardHeader>
                        <CardContent className="grid gap-6">
                            <OAuth />
                            <OrDivider />
                            <div className="grid gap-4">
                                <CustomFormField control={form.control} name="fullName" label="Full Name" placeholder="John Doe" type="text" />
                                <CustomFormField control={form.control} name="email" label="Email" placeholder="m@example.com" type="email" />
                                <CustomFormField control={form.control} name="password" label="Password" placeholder="********" type="password" />
                                <CustomFormField control={form.control} name="confirmPassword" label="Confirm Password" placeholder="********" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-2">
                            <Button className="w-full">Sign Up</Button>
                            <div className="flex flex-col w-full gap-1 text-left">
                                <p>
                                    Have an account? <a href="/signin" className="text-primary-paint hover:underline"> Sign in</a>
                                </p>
                                <a href="/forgotpassword" className="text-primary-paint hover:underline">
                                    Forgot password?
                                </a>
                            </div>

                        </CardFooter>
                    </Card>
                </form>
            </Form>
        </div>
    );
};

export default Signup;