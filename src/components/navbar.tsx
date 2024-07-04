import Wrapper from "./wrapper";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-background py-6">
      <Wrapper>
        <nav className="flex w-full items-center justify-between">
          <h1 className="text-2xl">Club San Martin</h1>
          <img
            src="https://randomuser.me/api/portraits/men/3.jpg"
            alt="profile picture"
            className="size-10 rounded-full"
          />
        </nav>
      </Wrapper>
    </header>
  );
}
