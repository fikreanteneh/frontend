import CustomFormField from "@/components/CustomFormField";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
    email: z.string(),
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
                    <Card className="w-full max-w-sm">
                        <CardHeader>
                            <CardTitle className="text-2xl">Forgot Password</CardTitle>
                            <CardDescription>
                                {/* TODO: Description */}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-6">
                            <div className="grid gap-4">
                                <CustomFormField control={form.control} name="email" label="Email" placeholder="m@example.com" type="email" />
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-2">
                            <Button className="w-full" type="submit">Request Password Reset</Button>
                            <div className="flex flex-col w-full gap-1 text-left">
                                <p>
                                    Remember your password? <a href="/signin" className="text-blue-500 hover:underline"> Sign in</a>
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


