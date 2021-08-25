import * as React from "react";

export function Logo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={48}
      height={48}
      {...props}
    >
      <path
        fill="#01579b"
        d="M35.063 6H12.938L2.85 24.006 13.197 42h21.865l10.084-18L35.063 6z"
      />
      <path
        fill="#fff"
        d="M24.158 14H17v20h7.158C29.598 34 34 29.527 34 24s-4.402-10-9.842-10zM24 30h-3V18h3c3.31 0 6 2.69 6 6s-2.69 6-6 6z"
      />
    </svg>
  );
}
