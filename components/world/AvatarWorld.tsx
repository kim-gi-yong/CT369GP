import WorldMap from "@/components/world/WorldMap";

type AvatarWorldProps = {
  memoryId?: string;
};

export default function AvatarWorld({
  memoryId,
}: AvatarWorldProps) {
  return <WorldMap memoryId={memoryId} />;
}