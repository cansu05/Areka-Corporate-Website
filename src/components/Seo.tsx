import { useHead } from "@unhead/react";

type SeoProps = {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
};

export default function Seo({
  title,
  description,
  canonical,
  ogImage,
}: SeoProps) {
  useHead({
    title,
    meta: [
      ...(description ? [{ name: "description", content: description }] : []),

      { property: "og:title", content: title },
      ...(description
        ? [{ property: "og:description", content: description }]
        : []),
      ...(ogImage ? [{ property: "og:image", content: ogImage }] : []),

      { name: "twitter:card", content: "summary_large_image" },
    ],
    link: [...(canonical ? [{ rel: "canonical", href: canonical }] : [])],
  });

  return null;
}
