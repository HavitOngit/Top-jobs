"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "./button";

export default function PageNavigation({}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") ?? "1");
  return (
    <div className="flex justify-between">
      {page === 1 ? (
        <div></div>
      ) : (
        <Button onClick={() => router.push(`?page=${page - 1}`)}>
          Previous
        </Button>
      )}

      <Button onClick={() => router.push(`?page=${page + 1}`)}>Next</Button>
    </div>
  );
}

export function BackButton() {
  const router = useRouter();
  return (
    <Button
      variant={"outline"}
      className="text-3xl  text-center"
      onClick={() => router.back()}
    >
      ←
    </Button>
  );
}
