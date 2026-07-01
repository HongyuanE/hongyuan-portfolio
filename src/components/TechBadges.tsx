interface TechBadgesProps {
  items: string[];
}

const TechBadges = ({ items }: TechBadgesProps) => (
  <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
    {items.map((t) => (
      <li
        key={t}
        className="font-mono text-xs text-ink-muted border border-hair rounded px-2 py-1"
      >
        {t}
      </li>
    ))}
  </ul>
);

export default TechBadges;
