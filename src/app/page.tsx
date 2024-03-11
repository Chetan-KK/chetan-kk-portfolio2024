import Logo from "@/Components/Logo";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import NavBar from "@/Components/Navbar/NavBar";

export default function Home() {
  return (
    <div className="">
      <MaxWidthWrapper>
        <Logo />
        <NavBar />
      </MaxWidthWrapper>
    </div>
  );
}
