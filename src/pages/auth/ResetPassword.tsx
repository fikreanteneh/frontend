import CustomFormField from "@/components/CustomFormField";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
    newPassword: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

const ResetPassword = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            newPassword: "",
            confirmPassword: "",

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
                        <CardTitle className="text-2xl text-center">Reset Your Password</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-6">
                        <CustomFormField control={form.control} name="newPassword" label="New Password" placeholder="********" type="password" />
                        <CustomFormField control={form.control} name="confirmPassword" label="Confirm Password" placeholder="********" type="password" />
                    </CardContent>
                    <CardFooter className="flex flex-col gap-2">
                        <Button className="w-full" variant={"paint"} type="submit">Reset Password</Button>
                    </CardFooter>
                </div>
            </form>
        </Form>
    );
};

export default ResetPassword;


