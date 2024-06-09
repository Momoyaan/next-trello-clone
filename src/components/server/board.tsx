"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getUserRecord } from "@/lib/pocketbase";
import { useQuery } from "@tanstack/react-query";
export function Board({ board }: { board: any }) {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["userRecord"],
    queryFn: async () => {
      const userRecord = await getUserRecord();
      return userRecord;
    },
  });

  if (isPending) {
    return (
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[100px] w-[333px] rounded-lg" />
      </div>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{data?.name}</CardTitle>
        <CardDescription>{data?.username}</CardDescription>
      </CardHeader>
    </Card>
  );
}
