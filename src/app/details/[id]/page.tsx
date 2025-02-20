import { BackButton } from "@/components/ui/page-navigation";
import { db } from "@/db/db";
import { postsData } from "@/db/schema";
import markdownToHtml from "@/lib/md-to-html";
import { eq } from "drizzle-orm";

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 86400;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // to 404 on unknown paths

export async function generateStaticParams() {
  const posts = await db.select().from(postsData);
  return posts.map((post) => ({
    id: String(post.id),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const post = await db
    .select()
    .from(postsData)
    .where(eq(postsData.postId, Number(id)))
    .then((res) => res[0]);

  const content = await markdownToHtml(post.body);

  return (
    <main className="m-4 mt-20">
      <div className="prose mx-auto">
        <div className="my-10">
          <BackButton />
        </div>

        <div
          className="[&table]:table-auto"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </main>
  );
}
