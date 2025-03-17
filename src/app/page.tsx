import Calculator from '@/components/Calculator';

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Next.js Calculator
      </h1>
      <Calculator />
    </div>
  );
}
