import CustomFormField from "@/components/CustomFormField";
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
    email: z.string().email("Invalid email address."),
});

const ForgotPassword = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="relative w-full max-w-sm border-none" >
                    <CardHeader>
                        <CardTitle className="text-2xl text-center">Forgot Password</CardTitle>
                        <CardDescription>
                            Enter your E-mail you used for your account and we will sendyou a link to reset your password.
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


