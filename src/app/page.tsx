import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { ProductShowcase } from "@/components/ProductShowcase";
import { HowItWorks } from "@/components/HowItWorks";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <ProductShowcase />
      <HowItWorks />
    </main>
  );
}
