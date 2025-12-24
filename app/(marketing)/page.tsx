import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return(
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col items-center justify-center p-4 gap-2">
      <div className="relative w-[650px] h-[540px] lg:h-[524px] mb-8 lg:mb-0">
      <Image src="/hero.png" fill alt="herosection" />
        </div>
        <div className="flex flex-col items-center gap-y-8">
          <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">Learning Isn’t a Luxury. It’s a Right.</h1>
          <div className="flex flex-col items-center gap-y-3 max-w-[300] w-full">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted animate-spin"/>
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal">
                <Button size="lg" variant="secondary" className="w-full">Start Learning</Button>
              </SignUpButton>
                <SignInButton mode="modal">
                <Button size="lg" variant="primaryOutline" className="w-full">I already have an account</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button size="lg" variant="secondary" className="w-full" asChild>
                <Link href="/learn">
                Continue Learning
                </Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
          </div>
        </div>
      </div>
  )

}