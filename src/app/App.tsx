import { Hero } from "./components/Hero";
import { Team } from "./components/Team";
import { PhotoPlaceholder } from "./components/PhotoPlaceholder";
import { ResearchNav } from "./components/ResearchNav";
import { Survey } from "./components/Survey";
import { GithubLink } from "./components/GithubLink";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 font-['Inter',system-ui,sans-serif] antialiased">
      <Hero />
      <Team />
      <PhotoPlaceholder />
      <ResearchNav />
      <Survey />
      <GithubLink />
      <Footer />
    </div>
  );
}
