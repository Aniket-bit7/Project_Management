import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <h1>ProjectPilot</h1>
        </Link>
      </nav>



      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Header;
