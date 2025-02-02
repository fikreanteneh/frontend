import CustomFormField from "@/components/CustomFormField";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import OrDivider from "@/pages/auth/components/OrDivider";
import { useAuth } from "@/store/AuthProvider";
import { SignUpSchema } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import OAuth from "./components/OAuth";



const Signup = () => {
    const { toast } = useToast();
    const { registerWithEmail } = useAuth();
    const form = useForm<z.infer<typeof SignUpSchema>>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            email: "",
            password: "",
            fullName: "",
            confirmPassword: ""
        },
    });
    const onSubmit = async (values: z.infer<typeof SignUpSchema>) => {
        try {
            await registerWithEmail(values.email, values.password, values.fullName);
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: (error as Error).message,
            })
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="relative w-full max-w-sm border-none " >
                    <CardHeader>
                        <CardTitle className="text-2xl text-center">Sign Up</CardTitle>
                        {/* <CardDescription>
                            Enter your E-mail you used for your account and we will sendyou a link to reset your account.
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
                                Have an account? <a href="/auth/signin" className="text-paint hover:underline"> Sign in</a>
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

export default Signup;