import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  description: string;
  demo?: ReactNode;
  large?: boolean;
  className?: string;
  children?: ReactNode;
}

export default function Card({
  title,
  description,
  demo,
  large,
  className,
  children,
}: CardProps) {
  return (
    <div
      className={cn(
        "relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md",
        large ? "md:col-span-2" : "",
        className
      )}
    >
      {demo && <div className="flex h-60 items-center justify-center">{demo}</div>}
      {children && <div className="flex h-60 items-center justify-center">{children}</div>}
      <div className="mx-auto max-w-lg text-center p-4">
        <h2 className="bg-gradient-to-br from-green-800 to-green-600 bg-clip-text font-display text-xl font-bold text-transparent [text-wrap:balance] md:text-3xl md:font-normal">
          {title}
        </h2>
        <div className="prose-sm mt-3 leading-normal text-gray-500 [text-wrap:balance] md:prose">
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <a
                  target="_blank"
                  {...props}
                  className="font-medium text-green-700 underline transition-colors hover:text-green-800"
                />
              ),
              code: ({ node, ...props }) => (
                <code
                  {...props}
                  className="rounded-sm bg-green-50 px-1 py-0.5 font-mono font-medium text-green-800"
                />
              ),
            }}
          >
            {description}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}