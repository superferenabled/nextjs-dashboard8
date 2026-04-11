// import { connection } from "next/server";
// import { Suspense } from "react";

import { cacheLife } from "next/cache";

async function UniqueContent() {
  // await connection();
  const uuid = crypto.randomUUID();
  return <p>Request ID: {uuid}</p>;
}

export default async function RandomPage() {
  'use cache'
  cacheLife({
    stale: 5,
    revalidate: 10,
    // expire: 86400
  })

  return (
    // <Suspense fallback={<p>Loading...</p>}>
      <UniqueContent />
    // </Suspense>
  );
}
