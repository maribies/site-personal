import { useId, type ComponentProps } from "react";

import css from "./experiences.module.css";

export const KeywordList = ({
  keywords,
  className,
  ...props
}: { keywords: string[] } & ComponentProps<"ul">) => (
  <ul
    className={[css.keywords, className].filter(Boolean).join(" ")}
    {...props}
  >
    {keywords.map((keyword) => (
      <li key={keyword}>{keyword}</li>
    ))}
  </ul>
);

export const Keywords = ({ keywords }: { keywords: string[] }) => {
  const labelId = useId();

  return (
    <div>
      <p id={labelId} className={css.label}>
        Tools &amp; skills:
      </p>
      <KeywordList keywords={keywords} aria-labelledby={labelId} />
    </div>
  );
};
