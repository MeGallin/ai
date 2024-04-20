import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const LoginComponent = () => {
  return (
    <>
        <h1>LoginComponent</h1>
        <p>This page will contain the login form</p>
        <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>

  )
}

export default LoginComponent