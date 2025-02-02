import CustomFormField from "@/components/CustomFormField";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import OrDivider from "@/pages/auth/components/OrDivider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import OAuth from "./components/OAuth";
const formSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
});
const Signin = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="relative w-full max-w-sm border-none" >
                    {/* <BorderBeam /> */}
                    <CardHeader>
                        <CardTitle className="text-2xl text-center">Sign In</CardTitle>
                        {/* <CardDescription>
                                TODO: Description
                            </CardDescription> */}
                    </CardHeader>



                    <CardContent className="grid gap-6">
                        <OAuth />
                        <OrDivider />
                        <div className="grid gap-4">
                            <CustomFormField control={form.control} name="email" label="Email" placeholder="m@example.com" type="email" />
                            <CustomFormField control={form.control} name="password" label="Password" placeholder="********" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-2">
                        <Button className="w-full" variant={"paint"}>Sign in</Button>
                        <div className="flex flex-col w-full gap-1 text-left">
                            <p>
                                Don't have an account? <a href="/auth/signup" className="text-paint hover:underline"> Sign up</a>
                            </p>
                            <a href="/auth/forgotpassword" className="text-paint hover:underline">
                                Forgot password?
                            </a>
                        </div>

                    </CardFooter>
                </div>
            </form>
        </Form>
    );
};

export default Signin;