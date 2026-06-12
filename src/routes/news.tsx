import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News, Newsletters & Customer Stories — Indigo Specialty Products" },
      {
        name: "description",
        content:
          "Product releases, seasonal newsletters, and customer testimonials from across the Indigo Specialty Products network.",
      },
      { property: "og:title", content: "News & insights — Indigo Specialty Products" },
      {
        property: "og:description",
        content: "Product releases, newsletters and customer stories from Indigo Specialty Products.",
      },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: () => <Outlet />,
});