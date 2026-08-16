import Link from "next/link";
import Image from "next/image";
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

      {posts.length === 0 ? (
        <p className="font-serif text-lg text-slate-500 mt-10 border border-dashed border-slate-300 rounded-lg p-10 text-center">
          It&apos;s empty here for now :)
        </p>
      ) : (
        <div className="flex flex-col gap-6 mt-10 max-w-3xl">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col gap-4 border border-slate-200 rounded-lg overflow-hidden hover:border-catpuccinRed transition-colors duration-200"
            >
              <div className="relative aspect-video">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 p-6 pt-0">
                <h2 className="font-serif text-2xl">{post.title}</h2>
                <time className="font-serif text-sm text-slate-500">
                  {post.date}
                </time>
                <p className="font-serif text-base text-slate-600">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
