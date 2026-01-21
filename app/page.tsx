import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data: personalInfo } = await supabase
    .from("personal_info")
    .select("avatar_url")
    .single();

  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary selection:text-white">
      <Header />
      <Hero avatarUrl={personalInfo?.avatar_url} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}
