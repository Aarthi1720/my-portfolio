import { useState } from "react";

/**
 * TechPills
 * - Shows first `initial` items
 * - Adds a "+N more" chip that expands/collapses
 * - Uses your theme tokens & .pill style from theme.css
 */
export default function TechPills({ items = [], initial = 6, className = "" }) {
  const [open, setOpen] = useState(false);
  if (!Array.isArray(items) || items.length === 0) return null;

  const shown = open ? items : items.slice(0, initial);
  const hidden = Math.max(items.length - initial, 0);

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {shown.map((t) => (
        <span key={t} className="pill">
          {t}
        </span>
      ))}

      {hidden > 0 && !open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="pill"
          aria-label={`Show ${hidden} more technologies`}
          style={{
            cursor: "pointer",
            color: "var(--brand)",
            borderColor: "color-mix(in oklab, var(--brand) 40%, transparent)",
          }}
        >
          +{hidden} more
        </button>
      )}

      {open && items.length > initial && (
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="pill"
          style={{ cursor: "pointer" }}
        >
          Show less
        </button>
      )}
    </div>
  );
}
