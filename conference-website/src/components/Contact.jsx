import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { conference } from "../data/conferenceData";
import { IconMail, IconPhone } from "./Icons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Contact Us"
          title="Get in Touch"
          subtitle="Have questions about paper submission, registration, or sponsorship? We're here to help."
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-ieee-blue/10 flex items-center justify-center text-ieee-blue mb-4">
                <IconMail />
              </div>
              <h3 className="font-semibold text-slate-900">Email Us</h3>
              <a
                href={`mailto:${conference.contact.email}`}
                className="text-ieee-blue hover:underline mt-2 block"
              >
                {conference.contact.email}
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-ieee-blue/10 flex items-center justify-center text-ieee-blue mb-4">
                <IconPhone />
              </div>
              <h3 className="font-semibold text-slate-900">Call Us</h3>
              <a
                href={`tel:${conference.contact.phone.replace(/\s/g, "")}`}
                className="text-ieee-blue hover:underline mt-2 block"
              >
                {conference.contact.phone}
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-ieee-dark to-ieee-blue text-white">
              <h3 className="font-semibold text-lg">Conference Secretariat</h3>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                {conference.name} {conference.edition}<br />
                {conference.location.city}, {conference.location.country}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-ieee-blue focus:ring-2 focus:ring-ieee-blue/20 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-ieee-blue focus:ring-2 focus:ring-ieee-blue/20 outline-none transition-all"
                  placeholder="you@university.edu"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                Subject
              </label>
              <select
                id="subject"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-ieee-blue focus:ring-2 focus:ring-ieee-blue/20 outline-none transition-all bg-white"
              >
                <option value="">Select a topic</option>
                <option value="paper">Paper Submission</option>
                <option value="registration">Registration</option>
                <option value="sponsorship">Sponsorship</option>
                <option value="visa">Visa & Travel</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-ieee-blue focus:ring-2 focus:ring-ieee-blue/20 outline-none transition-all resize-none"
                placeholder="How can we help you?"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-ieee-blue to-ieee-light text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-ieee-blue/30 transition-all"
            >
              Send Message
            </button>

            {submitted && (
              <p className="text-emerald-600 font-medium text-sm">
                Thank you! Your message has been received. We&apos;ll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
