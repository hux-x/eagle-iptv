import React from "react";
import MessageButton from "./MessageButton";
import FAQItem from "./FAQItem";

export default function FAQs() {
  const faqs = [
    {
      question: "What is NexonIPTV?",
      answer:
        "NexonIPTV is a cutting-edge IPTV service offering live TV, movies, and series with a focus on high-quality streaming and a diverse selection of content to cater to all viewing preferences.",
    },
    {
      question: "How to buy Nexon IPTV?",
      answer:
        "You can purchase Nexon IPTV by visiting our website, selecting the subscription plan that fits your needs, and completing the checkout process. After payment, you'll receive setup instructions.",
    },
    {
      question: "How to install Nexon APK app on Firestick?",
      answer:
        "To install the Nexon APK on a Firestick, download the app from our website, use the Firestick's 'Downloader' app to install it, and then open the app to log in with your NexonIPTV credentials.",
    },
    {
      question: "Can I watch NexonIPTV on multiple devices?",
      answer:
        "Yes, NexonIPTV supports multi-device access, allowing you to enjoy your favorite content on several devices. However, simultaneous streaming limits depend on your subscription plan.",
    },
    {
      question: "How to work with Nexon IPTV as a reseller?",
      answer:
        "Join our reseller program by registering on our website. You'll receive a reseller panel where you can manage subscriptions, credits, and customer interactions, with full support from our team.",
    },
    {
      question: "Is there a trial period for NexonIPTV?",
      answer:
        "Yes, we offer a trial period for new users to experience NexonIPTV. Sign up on our website to start your trial and explore our wide range of channels and services.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400">
            Have a different question?{" "}
            <MessageButton
              className="text-blue-400 hover:text-blue-300 underline ml-1 bg-transparent border-none cursor-pointer"
              text="Send us a WhatsApp message"
              message="I have a question about Nexon IPTV"
            />{" "}
            and we'll get back to you as soon as we can.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
