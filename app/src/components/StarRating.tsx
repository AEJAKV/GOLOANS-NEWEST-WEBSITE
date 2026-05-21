import { Star } from 'lucide-react';

interface StarRatingProps {
  count?: number;
  size?: number;
}

export function StarRating({ count = 5, size = 20 }: StarRatingProps) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} className="text-[#159A23] fill-[#159A23]" />
      ))}
    </div>
  );
}
