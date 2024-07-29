import type { FC } from "react";

interface ErrorMessageProps {
  className?: string;
  message: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({
  message,
  className = "",
}: ErrorMessageProps) => {
  return <p className={`text-red-600 text-xl ${className}`}>{message}</p>;
};
