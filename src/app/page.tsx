import NavBar from '@/components/landing/NavBar';
import Hero from '@/components/landing/Hero';
import ProblemSection from '@/components/landing/ProblemSection';
import HowItWorks from '@/components/landing/HowItWorks';
import DemoSection from '@/components/landing/DemoSection';
import Features from '@/components/landing/Features';
// import TechStack from '@/components/landing/TechStack';
import WaitlistSection from '@/components/landing/WaitlistSection';
import Footer from '@/components/landing/Footer';
import TasksAgent from '@/components/landing/TasksAgent';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <Features />
        <TasksAgent />
        <DemoSection />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}
