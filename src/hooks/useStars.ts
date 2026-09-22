import { useEffect, useState } from "react";
import { fetchStars, readCachedStars, writeCachedStars } from "../lib/github";

/** Live GitHub star count with a cached fallback so the button never looks broken. */
export function useStars(repo: string): number | null {
  const [stars, setStars] = useState<number | null>(() => readCachedStars(repo));

  useEffect(() => {
    let live = true;
    void fetchStars(repo).then((n) => {
      if (live && n !== null) {
        writeCachedStars(repo, n);
        setStars(n);
      }
    });
    return () => {
      live = false;
    };
  }, [repo]);

  return stars;
}
