"use client";

import { ChevronLeftIcon, ChevronRightIcon, MoveLeftIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "./button";

export default function PageNavigation({}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") ?? "1");
  return (
    <div className="flex justify-between items-center mx-4">
      {page === 1 ? (
        <div></div>
      ) : (
        <Button
          variant={"outline"}
          onClick={() => router.push(`?page=${page - 1}`)}
        >
          <ChevronLeftIcon />
          Previous
        </Button>
      )}

      <p className="text-gray-600">{page}</p>

      <Button onClick={() => router.push(`?page=${page + 1}`)}>
        Next
        <ChevronRightIcon />
      </Button>
    </div>
  );
}

export function BackButton() {
  const router = useRouter();
  return (
    <Button
      variant={"outline"}
      className="flex items-center justify-center"
      onClick={() => router.back()}
    >
      <MoveLeftIcon />
    </Button>
  );
}
