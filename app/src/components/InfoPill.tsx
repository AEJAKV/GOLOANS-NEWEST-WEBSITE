interface InfoPillProps {
  text: string;
}

export function InfoPill({ text }: InfoPillProps) {
  return (
    <span className="inline-block bg-white border border-[#D1D5DB] rounded-full px-5 py-2.5 text-sm text-[#1F2937]">
      {text}
    </span>
  );
}
