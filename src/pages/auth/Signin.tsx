import CustomFormField from "@/components/CustomFormField";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import OrDivider from "@/pages/auth/components/OrDivider";
import { useAuth } from "@/store/AuthProvider";
import { SignInSchema } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import OAuth from "./components/OAuth";

const Signin = () => {
    const { loginWithEmail } = useAuth();
    const form = useForm<z.infer<typeof SignInSchema>>({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const { toast } = useToast();
    const onSubmit = async (values: z.infer<typeof SignInSchema>) => {
        try {
            await loginWithEmail(values.email, values.password);
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: (error as Error).message,
            });
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="relative w-full max-w-sm border-none" >
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