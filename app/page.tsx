import Hero from "@/components/Hero";
import { Container, Divider } from "@mui/material";
import Overview from "@/components/Overview";
import MailLink from "@/components/MailLink";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import PropriesSection from "@/components/PropriesSection";

export default function Home() {
  return (
    <main
      style={{
        background:
          "radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)",
      }}
    >
      <Container maxWidth="xl">
        <Hero />
        <Divider sx={{ my: 2, background: "#999" }} />
        <Overview />
        <Divider sx={{ my: 6, background: "#999" }} />
        <PropriesSection />
        <Divider sx={{ my: 6, background: "#999" }} />
        <MailLink />

        <BackToTop />
      </Container>
      <Footer />
    </main>
  );
}
