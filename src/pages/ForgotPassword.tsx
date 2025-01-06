import CustomFormField from "@/components/CustomFormField";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
        <div className="flex items-center justify-center min-h-screen">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <Card className="w-full max-w-sm" >
                        <CardHeader>
                            <CardTitle className="text-2xl text-center">Forgot Password</CardTitle>
                            {/* <CardDescription>
                                TODO: Description
                            </CardDescription> */}
                        </CardHeader>
                        <CardContent className="flex flex-col gap-6">
                            <div>
                                <CustomFormField control={form.control} name="email" label="Email" placeholder="m@example.com" type="email" />
                            </div>
                            <div>
                                <Button className="w-full" variant={"paint"}>
                                    Continue With Google
                                </Button>
                                <Button className="w-full" variant={"paint"}>
                                    Continue With Github
                                </Button>
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-2">
                            <div className="flex flex-col w-full gap-1 text-left">
                                <Button className="w-full" variant={"paint"} type="submit">Request Password Reset</Button>
                                <p>
                                    Remember your password? <a href="/signin" className="text-primary-paint hover:underline"> Sign in</a>
                                </p>
                                <p>
                                    Don't have an account? <a href="/signup" className="text-primary-paint hover:underline"> Sign up</a>
                                </p>
                            </div>
                        </CardFooter>
                    </Card>
                </form>
            </Form>
        </div>
    );
};

export default ForgotPassword;


