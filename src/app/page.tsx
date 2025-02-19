import Hero from "@/components/ui/hero";
import { PostCard } from "@/components/ui/post-card";
import { db } from "@/db/db";
import { posts } from "@/db/schema";
import Link from "next/link";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "10";

  const postsRes = await db.select().from(posts).limit(10).offset(10);

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
    </div>
  );
}
