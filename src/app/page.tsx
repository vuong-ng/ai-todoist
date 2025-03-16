// import Image from "next/image";
import { Button } from "@/components/ui/button";
import TypewriterTitle from "@/components/ui/TypewriterTitle";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


export default function Home() {
  return (
    <div className="flex justify-center align-center bg-gradient-to-r min-h-screen from-rose-100 to-blue-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-70">
        <h1 className="text-7xl font-semibold text-center">
          AI <span className="text-purple-700 font-bold"> todo{' '}
            list </span>
          assistant
        </h1>
        
        <h2 className="mt-4 text-semibold text-3xl text-center"> <TypewriterTitle/>
        </h2>

        <div className="mt-8">
        <Link href="/dashboard">
        <Button className="bg-indigo-900">Get Started <ArrowRight/> </Button>
        </Link>
      </div>
      </div>

    </div>
    
  );
};
