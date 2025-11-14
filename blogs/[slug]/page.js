import BlogPost from "@/components/BlogPost";
import React from "react";
import FloatingWhatsAppButton from "@/components/FloatingWhatsApp";

const BLOG_API_URL =
  "https://blog-creator-backend.vercel.app/api/blogs?websiteId=68f6b6dfbe4f72f569429501";

// Fetch blog posts
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

// Generate static params for dynamic route [slug]
export async function generateStaticParams() {
  const blogPosts = await fetchBlogPosts();

  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata dynamically for SEO
export async function generateMetadata({ params }) {
  const { slug } = params;
  const blogPosts = await fetchBlogPosts();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | Eagle IPTV Blog",
      description: "The blog post you are looking for was not found.",
    };
  }

  return {
    title: `${post.title} | Eagle IPTV Blog`,
    description: post.excerpt || post.title,
    keywords: post.tags?.join(", ") || "",
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      images: [{ url: post.image }],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `https://eagletvpanel.com/blogs/${post.slug}`,
    },
  };
}

// Blog Post Page Component
export default async function Page({ params }) {
  const { slug } = params;
  const blogPosts = await fetchBlogPosts();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-3xl font-bold mb-2">Post Not Found</h1>
        <p>The blog post you are looking for was not found.</p>
      </div>
    );
  }

  // JSON-LD Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt || post.title,
    image: post.image,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Eagle IPTV",
      logo: {
        "@type": "ImageObject",
        url: "https://eagletvpanel.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://eagletvpanel.com/blogs/${post.slug}`,
    },
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <BlogPost post={post} />
      <FloatingWhatsAppButton />
    </>
  );
}
