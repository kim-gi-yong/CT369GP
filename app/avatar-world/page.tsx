import AvatarWorld from "@/components/world/AvatarWorld";

type Props = {
  searchParams: Promise<{
    memoryId?: string;
  }>;
};

export default async function AvatarWorldPage({
  searchParams,
}: Props) {
  const { memoryId } = await searchParams;

  return <AvatarWorld memoryId={memoryId} />;
}