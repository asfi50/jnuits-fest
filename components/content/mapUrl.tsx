import React, { useState, useEffect } from "react";
import { Skeleton } from "../ui/skeleton";

export default function Map() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
      {isLoading && <Skeleton className="w-full h-[400px]" />}
      {!isLoading && (
        <iframe
          className="absolute inset-0 w-full h-full rounded-xl"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=jagannath%20University%20bangladesh+(Jagannath%20University)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          onLoad={() => setIsLoading(false)}
        ></iframe>
      )}
    </div>
  );
}
