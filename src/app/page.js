import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <FadeIn><Hero /></FadeIn>
        <FadeIn><Projects /></FadeIn>
        <FadeIn><Contact /></FadeIn>
      </main>
    </>
  );
}
