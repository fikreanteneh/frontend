import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"
import { useAuth } from "@/store/AuthProvider"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

const OAuth = () => {

    const { loginWithGoogle, loginWithGithub } = useAuth()

    const handleGoogle = async () => {
        try {

            await loginWithGoogle()
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: (error as Error).message,
            })
        }
    }

    const handleGithub = async () => {
        try {
            await loginWithGithub()
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: (error as Error).message,
            })
        }
    }

    return (
        <div>
            <Button className="w-full my-2" type="button" variant={"outline"} onClick={handleGoogle}>
                <FcGoogle color="#DB4437" /> Continue With Google
            </Button>
            <Button className="w-full" type="button" variant={"outline"} onClick={handleGithub}>
                <FaGithub color="#333" /> Continue With Github
            </Button>
        </div>
    )
}

export default OAuth    