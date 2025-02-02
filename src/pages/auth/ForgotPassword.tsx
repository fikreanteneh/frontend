import CustomFormField from "@/components/CustomFormField";
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/store/AuthProvider";
import { ForgotPasswordSchema } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastAction } from "@radix-ui/react-toast";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";


const ForgotPassword = () => {
    const { toast } = useToast();
    const navigate = useNavigate();
    const { resetPassword } = useAuth();
    const form = useForm<z.infer<typeof ForgotPasswordSchema>>({
        resolver: zodResolver(ForgotPasswordSchema),
        defaultValues: {
            email: "",
        },
    });
    const onSubmit = async (values: z.infer<typeof ForgotPasswordSchema>) => {
        try {
            console.log("===========Reset===============")
            await resetPassword(values.email);
            toast({
                variant: "default",
                title: "Reset link sent to Email",
                description: "Please check your email for the password reset link.",
                action: (
                    <ToastAction altText="Sign In" onClick={() => navigate('/auth/signin')}>
                        Sign In
                    </ToastAction>
                ),
            });
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
                        <CardTitle className="text-2xl text-center">Forgot Password</CardTitle>
                        <CardDescription>
                            Enter your E-mail you used for your account and we will send you a link to reset your password.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-6">
                        <CustomFormField control={form.control} name="email" label="Email" placeholder="m@example.com" type="email" />
                    </CardContent>
                    <CardFooter className="flex flex-col gap-2">
                        <div className="flex flex-col w-full gap-1 text-left">
                            <Button className="w-full" variant={"paint"} type="submit">Request Password Reset</Button>
                            <p>
                                Remember your password? <a href="/auth/signin" className="text-paint hover:underline"> Sign in</a>
                            </p>
                            <p>
                                Don't have an account? <a href="/auth/signup" className="text-paint hover:underline"> Sign up</a>
                            </p>
                        </div>
                    </CardFooter>
                </div>
            </form>
        </Form>
    );
};

export default ForgotPassword;


