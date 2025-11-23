'use client'
import React from "react";
import { MapPin, Train, CreditCard, FileText, Mountain, Map } from "lucide-react";
import Image from "next/image";
import img1 from '../../../public/DSC00710.jpg'

export default function AboutUsPage() {
  const features = [
    {
      icon: <MapPin className="w-6 h-6 text-orange-500" />,
      title: "ঢাকার কাছে — ১৫ মিনিট",
      desc: "আমাদের প্লটগুলো রাজধানী ঢাকা থেকে মাত্র ১৫ মিনিট দূরে অবস্থিত। জাতীয় সংসদ ভবন থেকে সহজেই পৌঁছানো যায়, তাই এটি আপনার জন্য সময় সাশ্রয়ী ও সুবিধাজনক।",
    },
    {
      icon: <Train className="w-6 h-6 text-orange-500" />,
      title: "MRT-5 সংলগ্ন",
      desc: "বলিয়ারপুর স্টেশন খুব কাছাকাছি। MRT-5 লাইন সংলগ্ন হওয়ায় যাতায়াত খুবই সহজ এবং শহরের প্রধান এলাকা থেকে কম সময়ে পৌঁছানো সম্ভব।",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-orange-500" />,
      title: "ডাউন পেমেন্ট ছাড়া",
      desc: "আপনি সহজেই প্লট বুক করতে পারেন। ডাউন পেমেন্ট ছাড়াই বুকিং করার সুবিধা রয়েছে, যাতে আপনার আর্থিক চাপ কম থাকে।",
    },
    {
      icon: <FileText className="w-6 h-6 text-orange-500" />,
      title: "এককালীন রেজিস্ট্রেশন",
      desc: "প্লট ক্রয় করার সঙ্গে সঙ্গে রেজিস্ট্রেশন সম্পন্ন হয়। কোনো ঝামেলা বা অতিরিক্ত paperwork ছাড়াই সম্পূর্ণ প্রক্রিয়া সহজ।",
    },
    {
      icon: <Mountain className="w-6 h-6 text-orange-500" />,
      title: "বন্যামুক্ত উঁচু জমি",
      desc: "প্লটগুলো উঁচু স্থানে অবস্থিত এবং বন্যা থেকে মুক্ত। নির্মাণের জন্য উপযুক্ত পরিবেশ, যাতে ভবিষ্যতের বিনিয়োগ নিরাপদ থাকে।",
    },
    {
      icon: <Map className="w-6 h-6 text-orange-500" />,
      title: "প্রশস্ত রাস্তা",
      desc: "৪০-৬০ ফুট এবং ১০০ ফুট প্রশস্ত প্রধান রাস্তা। যানবাহন চলাচলে সমস্যা নেই এবং প্লটের accessibility খুব ভালো।",
    },
  ];

  const mission = "আমাদের মিশন হল নিরাপদ, সুবিধাজনক এবং ঝামেলামুক্ত প্লট প্রদান করে মানুষকে স্বপ্নের বাড়ি ও নিরাপদ বিনিয়োগের সুযোগ দেওয়া।";

  const vision = "আমাদের ভিশন হলো দেশের অন্যতম বিশ্বস্ত ও পরিচ্ছন্ন রিয়েল এস্টেট কোম্পানি হয়ে প্রত্যেক গ্রাহকের জন্য মানসম্মত জমি এবং সম্পূর্ণ ট্রাস্টেবল সেবা নিশ্চিত করা।";

  const coreValues = [
    "নির্ভরযোগ্যতা: সব তথ্য ও ডকুমেন্ট সঠিক ও স্বচ্ছ।",
    "গ্রাহক কেন্দ্রিকতা: সহজ, ঝামেলামুক্ত ও দ্রুত সেবা।",
    "স্বচ্ছতা: প্রতিটি লেনদেন এবং রেজিস্ট্রেশন প্রক্রিয়া খোলাখুলি।",
    "মানসম্মত প্লট: নির্মাণযোগ্য, বন্যামুক্ত এবং সুবিধাজনক অবস্থান।",
    "দীর্ঘমেয়াদী সম্পর্ক: আমাদের গ্রাহকের সঙ্গে স্থায়ী সম্পর্ক তৈরি করা।",
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* About Us Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <Image alt=" "  src={img1} className="w-full h-100"></Image>
        <p className="text-gray-700 text-lg text-center mb-12">
          আমরা একটি বিশ্বস্ত এবং অভিজ্ঞ রিয়েল এস্টেট কোম্পানি। আমাদের লক্ষ্য হল আপনাদের জন্য নিরাপদ, সুবিধাজনক এবং ঝামেলামুক্ত প্লট প্রদান করা। প্রতিটি প্লট সরকারি অনুমোদিত, বন্যামুক্ত এবং নির্মাণের জন্য উপযুক্ত। আমাদের সঙ্গে থাকলে আপনি নিশ্চিতভাবে আপনার স্বপ্নের বাড়ি তৈরি করতে পারবেন।
        </p>

        {/* Mission */}
        <div className="mb-8 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-2">আমাদের মিশন</h2>
          <p className="text-gray-700">{mission}</p>
        </div>

        {/* Vision */}
        <div className="mb-8 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-2">আমাদের ভিশন</h2>
          <p className="text-gray-700">{vision}</p>
        </div>

        {/* Core Values */}
        <div className="mb-12 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-4">Core Values</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {coreValues.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>

        {/* Key Plot Features */}
        <h2 className="text-3xl font-semibold text-center mb-8">
          প্লটের প্রধান বৈশিষ্ট্য
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div>{feature.icon}</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
