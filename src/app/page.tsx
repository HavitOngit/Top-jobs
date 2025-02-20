import Hero from "@/components/ui/hero";
import PageNavigation from "@/components/ui/page-navigation";
import { PostCard } from "@/components/ui/post-card";
import { db } from "@/db/db";
import { posts } from "@/db/schema";
import Link from "next/link";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const getParams = await searchParams;
  const page = getParams["page"] ?? "1";

  const postsRes = await db
    .select()
    .from(posts)
    .limit(10)
    .offset(Number(page) * 10);

  return (
    <div className="flex flex-col mx-auto mt-10 max-w-3xl">
      <Hero />
      {postsRes.map((post) => (
        <div key={post.id}>
          <Link href={`/details/${post.id}`}>
            <PostCard {...post} />
          </Link>
        </div>
      ))}

      <div className="my-10">
        <PageNavigation />
      </div>
    </div>
  );
}
