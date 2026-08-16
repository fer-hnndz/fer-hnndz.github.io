import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/content/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-dvh w-full px-6 sm:px-10 lg:px-16 py-10">
      <Link
        href="/blog"
        className="font-serif text-lg hover:text-catpuccinRed transition-colors duration-200"
      >
        ← Back
      </Link>

      <article className="max-w-3xl mt-6">
        <h1 className="font-serif text-4xl sm:text-5xl">{post.title}</h1>
        <time className="block font-serif text-sm text-slate-500 mt-4">
          {post.date}
        </time>
        <div className="flex flex-col gap-5 mt-8">
          {post.content.map((paragraph) => (
            <p key={paragraph} className="font-serif text-base text-slate-700">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}
