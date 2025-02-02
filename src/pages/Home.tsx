import { useAuth } from "@/store/AuthProvider"

const Home = () => {
    const { logout } = useAuth()
    const handleLogout = async () => {
        await logout()
    }
    return (
        <button onClick={handleLogout}>Log Out</button>
    )
}

export default Home