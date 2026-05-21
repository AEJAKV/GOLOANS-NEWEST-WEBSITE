interface SectionHeaderProps {
  label?: string;
  heading: string;
  subheading?: string;
  centered?: boolean;
  labelGreen?: boolean;
}

export function SectionHeader({
  label,
  heading,
  subheading,
  centered = true,
  labelGreen = true,
}: SectionHeaderProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {label && (
        <p className={`text-sm font-semibold mb-3 ${labelGreen ? 'text-[#159A23]' : 'text-[#6B7280]'}`}>
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight">
        {heading}
      </h2>
      {subheading && (
        <p className="mt-3 text-base text-[#6B7280]">{subheading}</p>
      )}
    </div>
  );
}
