# Posts

Posts live as MDX files in `src/content/posts/` — one file per post, where the filename is the slug (and URL).

## Create a post

1. Create `src/content/posts/<slug>.mdx` (kebab-case, no spaces).
2. Add YAML frontmatter with these required fields:

   ```yaml
   ---
   title: "Post title"
   date: "2026-07-12"                    # YYYY-MM-DD, always quoted
   excerpt: "Short summary shown on the blog index."
   image: "/images/posts/<slug>.svg"     # or .webp/.avif
   ---
   ```

3. Write the body in Markdown/MDX (headings, **bold**, lists, code blocks, links, or React components).

## How it works

- The filename is the slug → the post is served at `/blog/<slug>`.
- Images go in `public/images/posts/`.
- `src/lib/posts.ts` reads the folder with `fs` + `gray-matter`, extracts frontmatter and body, and sorts by date (descending).
- `src/app/blog/[slug]/page.tsx` uses `generateStaticParams()` (required by `output: "export"`) and renders the body with `MDXRemote` from `next-mdx-remote/rsc`.

## Notes

- Quote the `date` value so `gray-matter` keeps it a string (an unquoted YAML date becomes a `Date` object).
- Posts are sorted newest-first automatically.
- At least one `.mdx` must exist in the folder; an empty folder fails `next build` (dynamic route with no static params under static export).
