import fs from "node:fs";
import path from "node:path";

export type PostMetadata = {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  readingTime: number;
};

export type Post = {
  slug: string;
  metadata: PostMetadata;
};

const blogDir = path.join(process.cwd(), "src", "content", "blog");

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const mod = (await import(`@/content/blog/${slug}.mdx`)) as {
      metadata: PostMetadata;
    };
    return { slug, metadata: mod.metadata };
  } catch {
    return null;
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map((s) => getPost(s)));
  return posts
    .filter((p): p is Post => p !== null)
    .sort(
      (a, b) =>
        new Date(b.metadata.date).getTime() -
        new Date(a.metadata.date).getTime(),
    );
}
