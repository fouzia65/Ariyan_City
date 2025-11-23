import { CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    "কোনো Hidden Cost নেই",
    "সহজ এবং ঝামেলামুক্ত Registration Support",
    "সত্যায়িত জমির ডকুমেন্ট",
    "Flexible Installment সুবিধা",
    "বিনামূল্যে Site Visit",
    "১০০% Risk-Free Investment",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* শিরোনাম */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          আমাদের কেন বেছে নেবেন?
        </h2>

        {/* Bullet Points Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
              {/* Point Text */}
              <p className="text-gray-700 font-medium">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
