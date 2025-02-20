import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Post } from "@/db/schema";
import { format } from "date-fns";
import { BanknoteIcon, Calendar } from "lucide-react";
import Image from "next/image";

export function PostCard({
  title,
  department,
  salary,
  image,
  vacancy,
  officialDate,
  lastDate,
  examName,
}: Post) {
  function getLastDateBadge(lastDate: Date) {
    const daysLeft = (lastDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24);
    if (daysLeft < 30) {
      return (
        <Badge variant="destructive" className="bg-red-600 hover:bg-red-700">
          {Math.ceil(daysLeft)} days left
        </Badge>
      );
    }
    return null;
  }

  const noExam = examName === "No Exam";

  const lastDateBadge = getLastDateBadge(new Date(lastDate));

  return (
    <Card className=" rounded-none">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        <div className="h-12 w-12 rounded-lg overflow-hidden ">
          {image ? (
            <Image
              src={image || "/placeholder.svg"}
              alt={department}
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center ">
              {department.charAt(0)}
            </div>
          )}
        </div>
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold leading-none">{title}</h3>

            {/* <Badge
              variant={isNoExam ? "destructive" : "default"}
              className={
                isNoExam
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-blue-600 hover:bg-blue-700"
              }
            >
              {isNoExam ? "No Exam" : examName}
            </Badge> */}
          </div>
          <p className="text-sm ">
            {department} • Posted {format(officialDate, "MMM d")}
          </p>

          {!noExam ? null : (
            <Badge
              variant="destructive"
              className="bg-green-600 hover:bg-green-700"
            >
              {examName}
            </Badge>
          )}
        </div>

        {/* <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-400 hover:text-white hover:bg-zinc-800"
          >
            <Bookmark className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-400 hover:text-white hover:bg-zinc-800"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div> */}
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-2">
            <BanknoteIcon className=" h-5 w-5" />
            <span className="font-medium ">{salary}</span>
          </div>
          <span className="">•</span>
          <span className="">{vacancy} vacancies</span>
        </div>
        <div className="flex items-center gap-2 text-sm ">
          <Calendar className="h-4 w-4" />
          <span>Last date to apply: {format(lastDate, "MMM d, yyyy")}</span>
          {lastDateBadge}
        </div>
      </CardContent>
    </Card>
  );
}
