'use client'
import { MapPin, Train, CreditCard, FileText, Mountain, Map } from "lucide-react";

export default function PlotFeatures() {
  const features = [
    {
      icon: <MapPin className="w-6 h-6 text-orange-500" />,
      title: "ঢাকার কাছে — ১৫ মিনিট",
      desc: "জাতীয় সংসদ থেকে মাত্র ১৫ মিনিট।",
    },
    {
      icon: <Train className="w-6 h-6 text-orange-500" />,
      title: "MRT-5 সংলগ্ন",
      desc: "বলিয়ারপুর স্টেশন খুব নিকটে।",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-orange-500" />,
      title: "ডাউন পেমেন্ট ছাড়া",
      desc: "সহজ বুকিং ব্যবস্থা।",
    },
    {
      icon: <FileText className="w-6 h-6 text-orange-500" />,
      title: "এককালীন রেজিস্ট্রেশন",
      desc: "ক্রয় করলেই রেজিস্ট্রেশন।",
    },
    {
      icon: <Mountain className="w-6 h-6 text-orange-500" />,
      title: "বন্যামুক্ত উঁচু জমি",
      desc: "নির্মাণ উপযোগী পরিবেশ।",
    },
    {
      icon: <Map className="w-6 h-6 text-orange-500" />,
      title: "প্রশস্ত রাস্তা",
      desc: "৪০-৬০ ও ১০০ ফুট প্রধান রাস্তা।",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          প্লটের প্রধান বৈশিষ্ট্য
        </h2>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div>{feature.icon}</div>
              {/* Title & Description */}
              <div>
                <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}