import React from "react";
import FloatingWhatsAppButton from "@/components/FloatingWhatsApp";

import Link from "next/link";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BLOG_API_URL =
  "https://blog-creator-backend.vercel.app/api/blogs?websiteId=68f6b6dfbe4f72f569429501";

export const metadata = {
  title: "Eagle IPTV Blog & Resources | Eagle IPTV",
  description:
    "Stay updated with Eagle IPTV — your trusted source for IPTV tutorials, streaming trends, and reseller tips.",
  keywords: [
    "Eagle IPTV blog",
    "IPTV tutorials",
    "IPTV reseller",
    "IPTV news",
    "streaming guide",
  ],
  openGraph: {
    title: "Eagle IPTV Blog & Resources | Eagle IPTV",
    description:
      "Explore IPTV insights, streaming tutorials, and news from Eagle IPTV.",
    url: "https://eagletvpanel.com/blogs",
    type: "website",
    images: [
      {
        url: "https://eagletvpanel.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eagle IPTV Blog",
      },
    ],
  },
};

// Fetch blog posts from backend
async function fetchBlogPosts() {
  try {
    const res = await fetch(BLOG_API_URL, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error("Failed to fetch blogs");
    const data = await res.json();
    return data.blogs || [];
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const blogPosts = await fetchBlogPosts();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Eagle IPTV Blog",
    description:
      "Guides, insights, and news about IPTV streaming, reseller business, and Eagle IPTV updates.",
    url: "https://eagletvpanel.com/blogs",
    publisher: {
      "@type": "Organization",
      name: "Eagle IPTV",
      logo: {
        "@type": "ImageObject",
        url: "https://eagletvpanel.com/logo.png",
      },
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `https://eagletvpanel.com/blogs/${post.slug}`,
      author: {
        "@type": "Person",
        name: post.author,
      },
      image: post.image,
    })),
  };

  return (
    <>
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <NavBar />

      <section className="min-h-[80vh] bg-[#0a0a0a] text-gray-200 px-6 py-16">
        <div className="max-w-5xl mx-auto text-center mb-16 mt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Eagle IPTV Blog
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover insights, tips, and updates about IPTV streaming and
            reseller growth from Eagle IPTV.
          </p>
        </div>

        {/* Blog List Section */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {blogPosts.length > 0 ? (
            blogPosts.map((post) => (
              <Link
                key={post._id}
                href={`/blogs/${post.slug}`}
                className="bg-[#111] border border-gray-800 hover:border-[#71a0a5] rounded-2xl p-5 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h2 className="text-xl font-semibold text-white mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="text-[#71a0a5] text-sm font-medium">
                  Read More →
                </span>
              </Link>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              No blog posts available yet.
            </p>
          )}
        </div>
      </section>

      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
