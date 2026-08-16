import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const content = await MDXRemote({
    source: post.content,
    components: {
      h2: (props) => (
        <h2 className="font-serif text-2xl mt-10 mb-4" {...props} />
      ),
      p: (props) => (
        <p className="font-serif text-base text-slate-700 my-4" {...props} />
      ),
      a: (props) => (
        <a
          className="underline hover:text-catpuccinRed transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        />
      ),
      ul: (props) => <ul className="list-disc ml-5 my-4" {...props} />,
      li: (props) => (
        <li className="font-serif text-base text-slate-700" {...props} />
      ),
      strong: (props) => <strong className="font-semibold" {...props} />,
      pre: (props) => (
        <pre
          className="bg-slate-100 rounded-lg p-4 overflow-x-auto my-4"
          {...props}
        />
      ),
      code: (props) => <code className="font-mono text-sm" {...props} />,
    },
  });

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

        <div className="relative aspect-video mt-8 rounded-lg overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-4">{content}</div>
      </article>
    </div>
  );
}
