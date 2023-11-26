"use client";
import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type StarProps = {
  rate: number;

};

const Stars: React.FC<StarProps> = ({ rate }) => {
  const [rating, setRating] = useState(rate);
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="flex cursor-pointer">
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label key={currentRating}>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
              className="hidden"
            />
            <Star
              size={35}
              className={cn(
                "transition-all duration-150 ease-linear text-gray-300 box-content px-[2px]",
                {
                  "text-yellow-400 cursor-pointer":
                    currentRating <= (hover || rating),
                }
              )}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Stars;
