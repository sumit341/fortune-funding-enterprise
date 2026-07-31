import { useResources } from "../../hooks/resources/useResources";

import ResourceGrid from "./components/ResourceGrid";
import PlatformDownloads from "./components/PlatformDownloads";
import ResourceSkeleton from "./components/ResourceSkeleton";

export default function Resources() {
  const {
    data,
    isLoading,
  } = useResources();

  if (isLoading || !data) {
    return <ResourceSkeleton />;
  }

  return (
    <main className="mx-auto max-w-7xl space-y-8 p-8">

      <h1 className="text-4xl font-bold">
        Downloads & Resources
      </h1>

      <PlatformDownloads />

      <ResourceGrid
        resources={data}
      />

    </main>
  );
}