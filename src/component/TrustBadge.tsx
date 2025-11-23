'use client'
import { ShieldCheck, FileCheck, BadgeCheck, Users, Building2 } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "100% Ownership Guarantee",
      desc: "আমাদের দেওয়া প্রতিটি জমির সম্পূর্ণ মালিকানা নিশ্চয়তা।",
    },
    {
      icon: <FileCheck className="w-10 h-10" />,
      title: "Govt. Approval Verified",
      desc: "জমির সব ডকুমেন্ট সরকারি অনুমোদন যাচাই করা।",
    },
    {
      icon: <BadgeCheck className="w-10 h-10" />,
      title: "Registration Support",
      desc: "রেজিস্ট্রেশন পর্যন্ত সম্পূর্ণ আইনি সহায়তা।",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "1000+ Happy Land Owners",
      desc: "বিগত ১০ বছরে ১০০০+ satisfied land owners।",
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: "20+ Years Experience",
      desc: "দীর্ঘ ২০ বছরের রিয়েল এস্টেট অভিজ্ঞতা।",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          কেন আমাদের উপর ভরসা করবেন?
        </h2>

        {/* Badges Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {badges.map((item, index) => (
            <div
              key={index}
              className="bg-emerald-100 p-6 rounded-2xl  shadow-emerald-700 hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
            >
              <div className="flex justify-center mb-4 text-orange-500">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
