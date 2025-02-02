import ThemeSwitcher from "@/components/ThemeSwitcher"
import { Toaster } from "@/components/ui/toaster"
import { Outlet } from "react-router"

const RootLayout = () => {
    return (
        <>
            <ThemeSwitcher />
            <Outlet />
            <Toaster />
        </>
    )
}

export default RootLayout