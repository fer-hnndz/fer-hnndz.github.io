# Projects

Projects are plain data — defined as objects in `src/content/projects.ts`.

## Add a project

Add an object to the `projects` array:

```ts
{
  name: "Project Name",
  description: "Short description of what it does.",
  keypoints: ["Point 1", "Point 2", "Point 3"],
  image: "/images/projects/<slug>.svg",   // or .webp/.avif
},
```

## How it works

- The `image` path points to a file in `public/images/projects/`.
- `src/app/projects/page.tsx` maps over `projects` and renders each one via `src/components/project-card.tsx` (image + name + description + keypoints).
- An empty array is fine — the page shows an empty state instead.
