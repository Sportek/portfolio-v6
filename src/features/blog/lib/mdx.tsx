import { MDXRemote } from "next-mdx-remote-client/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { mdxComponents } from "../components/mdx-components";

interface ArticleContentProps {
  source: string;
}

export function ArticleContent({ source }: ArticleContentProps) {
  return (
    <MDXRemote
      source={source}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            [rehypePrettyCode, { theme: "one-dark-pro", keepBackground: true }],
          ],
        },
      }}
      components={mdxComponents}
    />
  );
}
