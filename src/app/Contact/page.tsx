'use client'
import Image from "next/image";
import { useState, FormEvent } from "react";
import img1 from '../../../public/bangla logo 01.png'

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nPlot size: ${size}\nMessage: ${message}`
    );
    const mail = "info@aryancity.com";
    const subject = encodeURIComponent("Aryan City - New Booking Inquiry");

    window.location.href = `mailto:${mail}?subject=${subject}&body=${body}`;

    setStatus(
      "Mail client opened. If nothing happens, please call +88017XXXXXXX"
    );
  };

  return (
    <section id="contact" className="pt-30 px-6 py-16 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">যোগাযোগ করুন</h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* LEFT: FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-4 bg-white p-6 rounded-2xl shadow-md"
        >
          <label className="font-medium">আপনার নাম</label>
          <input
            type="text"
            placeholder="আপনার নাম"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />

          <label className="font-medium">ফোন নম্বর</label>
          <input
            type="tel"
            placeholder="+8801XXXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />

          <label className="font-medium">প্লট সাইজ</label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          >
            <option value="">-- নির্বাচন করুন --</option>
            <option>৩</option>
            <option>৫</option>
            <option>৬</option>
            <option>১০</option>
            <option>২০</option>
          </select>

          <label className="font-medium">মেসেজ</label>
          <textarea
            rows={4}
            placeholder="আপনার মন্তব্য লিখুন"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
          ></textarea>

          <button
            type="submit"
            className="mt-4 bg-[#2E7D32] text-white py-2 px-6 rounded-lg font-semibold hover:bg-[#2E7D32] transition-colors"
          >
            সাবমিট করুন
          </button>

          {/* Status Message */}
          {status && <p className="mt-2 text-green-600">{status}</p>}
        </form>

        {/* RIGHT: CONTACT INFO CARD */}
        <div className="flex-1 bg-white p-6 rounded-2xl shadow-md flex flex-col gap-4">
          <h3 className="text-xl font-semibold mt-0">অফিস যোগাযোগ</h3>

          <p>
            <strong>Address:</strong>
            <br />
            138/1, Tejgaon Industrial Area, Dhaka-1208
          </p>

          <p>
            <strong>Phone:</strong>
            <br />
            <a
              href="tel:+8801700000000"
              className="text-[#2E7D32] font-semibold"
            >
              +88017XXXXXXX
            </a>
          </p>

          <p>
            <strong>Email:</strong>
            <br />
            <a
              href="mailto:info@aryancity.com"
              className="text-[#2E7D32] font-semibold"
            >
              info@aryancity.com
            </a>
          </p>

         <Image alt="" src={img1}></Image>
        </div>
      </div>
    </section>
  );
}
