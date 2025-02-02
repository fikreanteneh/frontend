import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

const OAuth = () => {
    return (
        <div>
            <Button className="w-full my-2" variant={"outline"}>
                <FcGoogle color="#DB4437" /> Continue With Google
            </Button>
            <Button className="w-full" variant={"outline"}>
                <FaGithub color="#333" /> Continue With Github
            </Button>
        </div>
    )
}

export default OAuth    