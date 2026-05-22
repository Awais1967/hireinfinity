import { useEffect, useState } from "react";

export function usePath() {
  const [path, setPath] = useState(window.location.pathname + window.location.search);

  useEffect(() => {
    const sync = () => setPath(window.location.pathname + window.location.search);
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  return path;
}
