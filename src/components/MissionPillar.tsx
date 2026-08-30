import type { MissionPillarItem } from "@/data/site";

interface MissionPillarProps {
  pillar: MissionPillarItem;
}

/** A single mission pillar: icon, title and one-line description. */
export default function MissionPillar({ pillar }: MissionPillarProps) {
  const Icon = pillar.icon;

  return (
    <li className="flex gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <h3 className="font-heading text-lg font-bold text-navy">
          {pillar.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-charcoal/80">
          {pillar.description}
        </p>
      </div>
    </li>
  );
}
