import DotPattern from '@/components/ui/dot-pattern';
import Particles from '@/components/ui/particles';
import ShineBorder from '@/components/ui/shine-border';
import { cn } from '@/lib/utils';
import { Outlet } from 'react-router';
import "./AuthLayout.css";

const AuthLayout = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-card" >
            <DotPattern
                className={cn(
                    "dot-pattern-mask"
                    // "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
                )}
            />
            <Particles
                className="absolute inset-0 z-0"
                quantity={500}
                ease={80}
                color={"#A07CFE"} //TODO: With Variable
                refresh
            />
            {/* <div className='z-[1]'>
                <Ripple />
            </div> */}
            <div className='z-[2]'>
                <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
                    <Outlet />
                </ShineBorder>
            </div>
        </div>
    )
}

export default AuthLayout