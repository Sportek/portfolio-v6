import type { MDXComponents } from "mdx/types";
import { IconInfoCircle, IconAlertTriangle, IconBulb } from "@tabler/icons-react";
import Image from "next/image";
import { slugify } from "../lib/headings";

function Callout({ type = "info", children }: { type?: "info" | "warning" | "tip"; children: React.ReactNode }) {
  const config = {
    info: { border: "border-blue-500", bg: "bg-blue-500/10", icon: <IconInfoCircle className="text-blue-400 shrink-0" size={20} /> },
    warning: { border: "border-orange-500", bg: "bg-orange-500/10", icon: <IconAlertTriangle className="text-orange-400 shrink-0" size={20} /> },
    tip: { border: "border-green-500", bg: "bg-green-500/10", icon: <IconBulb className="text-green-400 shrink-0" size={20} /> },
  };

  const { border, bg, icon } = config[type];

  return (
    <div className={`border-l-4 ${border} ${bg} rounded-r-lg p-4 my-4 flex gap-3`}>
      {icon}
      <div className="text-gray-300 text-sm">{children}</div>
    </div>
  );
}

function YouTube({ id }: { id: string }) {
  return (
    <div className="relative w-full aspect-video my-6 rounded-lg overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

function TeamGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 my-6">
      {children}
    </div>
  );
}

function TeamMember({ name, role, src }: { name: string; role: string; src: string }) {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <Image
        src={src}
        alt={name}
        width={160}
        height={160}
        className="rounded-full w-28 h-28 object-cover border-2 border-zinc-700"
      />
      <div>
        <p className="text-white font-semibold text-sm mb-0">{name}</p>
        <p className="text-gray-400 text-xs mb-0">{role}</p>
      </div>
    </div>
  );
}

function getTextContent(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(getTextContent).join("");
  if (children && typeof children === "object" && "props" in children) {
    return getTextContent((children as React.ReactElement<{ children?: React.ReactNode }>).props.children);
  }
  return "";
}

export const mdxComponents: MDXComponents = {
  h1: (props) => <h1 className="text-4xl font-bold mt-10 mb-4 text-white" {...props} />,
  h2: ({ children, ...props }) => {
    const id = slugify(getTextContent(children));
    return <h2 id={id} className="text-3xl font-bold mt-8 mb-3 text-white scroll-mt-24" {...props}>{children}</h2>;
  },
  h3: ({ children, ...props }) => {
    const id = slugify(getTextContent(children));
    return <h3 id={id} className="text-2xl font-semibold mt-6 mb-2 text-white scroll-mt-24" {...props}>{children}</h3>;
  },
  h4: (props) => <h4 className="text-xl font-semibold mt-4 mb-2 text-white" {...props} />,
  p: (props) => <p className="text-gray-300 leading-relaxed mb-4" {...props} />,
  a: (props) => (
    <a className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer" {...props} />
  ),
  ul: (props) => <ul className="list-disc list-inside mb-4 text-gray-300 space-y-1" {...props} />,
  ol: (props) => <ol className="list-decimal list-inside mb-4 text-gray-300 space-y-1" {...props} />,
  li: (props) => <li className="text-gray-300" {...props} />,
  blockquote: (props) => (
    <blockquote className="border-l-4 border-zinc-600 pl-4 italic text-gray-400 my-4" {...props} />
  ),
  hr: () => <hr className="border-zinc-700 my-8" />,
  table: (props) => (
    <div className="overflow-x-auto my-4">
      <table className="min-w-full border-collapse border border-zinc-700" {...props} />
    </div>
  ),
  th: (props) => <th className="border border-zinc-700 px-4 py-2 bg-zinc-800 text-left font-semibold" {...props} />,
  td: (props) => <td className="border border-zinc-700 px-4 py-2 text-gray-300" {...props} />,
  pre: (props) => (
    <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 overflow-x-auto my-4 text-sm" {...props} />
  ),
  code: ({ children, ...props }) => {
    const isBlock = typeof children !== "string";
    if (isBlock) return <code {...props}>{children}</code>;
    return (
      <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-sm text-orange-300" {...props}>
        {children}
      </code>
    );
  },
  img: (props) => (
    <Image
      src={props.src || ""}
      alt={props.alt || ""}
      width={800}
      height={450}
      className="rounded-lg my-4 w-full h-auto"
    />
  ),
  Callout,
  YouTube,
  TeamGrid,
  TeamMember,
};
