import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostMeta {
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

export interface Post extends PostMeta {
  slug: string;
  content: string;
}

const postsDir = path.join(process.cwd(), "src/content/posts");

function readPosts(): Post[] {
  const filenames = fs
    .readdirSync(postsDir)
    .filter((filename) => filename.endsWith(".mdx"));

  return filenames
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(postsDir, filename), "utf-8");
      const { data, content } = matter(raw);

      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
        image: data.image as string,
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPosts(): Post[] {
  return readPosts();
}

export function getPost(slug: string): Post | undefined {
  return readPosts().find((post) => post.slug === slug);
}
