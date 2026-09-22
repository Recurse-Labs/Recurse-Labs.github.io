import { useStars } from "../hooks/useStars";
import { formatStars } from "../lib/github";

const REPO = "Recurse-Labs/recurse";

export default function StarButton({
  size = "sm",
  className = "",
}: {
  size?: "sm" | "lg";
  className?: string;
}) {
  const stars = useStars(REPO);

  return (
    <a
      className={`btn ${size} star-btn ${className}`}
      href={`https://github.com/${REPO}`}
      target="_blank"
      rel="noreferrer"
      title="Star Recurse on GitHub"
    >
      <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true" fill="currentColor">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
      Star on GitHub
      {stars !== null ? <b>{formatStars(stars)}</b> : null}
    </a>
  );
}
