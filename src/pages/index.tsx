import Navbar from "@/components/landingPage/Navbar/Navbar";
import Homepage from "@/components/landingPage/homepage";
import Layout from "@/components/landingPage/layout";

export default function Home() {
  return (
    <Layout
      title="home"
      description="Welcome to my home page."
      navbar={<Navbar />}
    >
      <Homepage />
    </Layout>
  );
}
