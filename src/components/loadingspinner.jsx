/* eslint-disable react/prop-types */
import { Loader2 } from "lucide-react";

const LoadingSpinner = ({ size = 64, color = "currentColor" }) => {
  return (
    <div className="flex items-center justify-center">
      <Loader2 size={size} color={color} className="animate-spin" />
    </div>
  );
};

export default LoadingSpinner;
