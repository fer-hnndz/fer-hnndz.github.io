import Link from "next/link";
import { posts } from "@/content/posts";

export default function BlogPage() {
  return (
    <div className="min-h-dvh w-full px-6 sm:px-10 lg:px-16 py-10">
      <Link
        href="/"
        className="font-serif text-lg hover:text-catpuccinRed transition-colors duration-200"
      >
        ← Back
      </Link>

      <h1 className="font-serif text-4xl sm:text-5xl mt-6">Blog</h1>

      <div className="flex flex-col gap-6 mt-10 max-w-3xl">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="flex flex-col gap-2 border border-slate-200 rounded-lg p-6 hover:border-catpuccinRed transition-colors duration-200"
          >
            <h2 className="font-serif text-2xl">{post.title}</h2>
            <time className="font-serif text-sm text-slate-500">
              {post.date}
            </time>
            <p className="font-serif text-base text-slate-600">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
