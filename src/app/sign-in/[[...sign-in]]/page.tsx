import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="h-screen justify-items-center content-center">
            <SignIn />
        </div>
    );
}