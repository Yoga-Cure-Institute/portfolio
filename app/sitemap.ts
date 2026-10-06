import type { MetadataRoute } from "next";

import { siteUrl } from "./seo";

const routes = [
  "",
  "/about",
  "/heritage",
  "/services",
  "/archives",
  "/media",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.7,
  }));
}
