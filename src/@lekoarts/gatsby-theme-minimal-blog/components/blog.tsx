/** @jsx jsx */
import { jsx, Heading, Link as TLink } from "theme-ui";
import { Link } from "gatsby";
import { Flex } from "@theme-ui/components";
import Layout from "@components/layout";
import Listing from "@components/listing";
import useMinimalBlogConfig from "@components/../hooks/use-minimal-blog-config";
import replaceSlashes from "@components/../utils/replaceSlashes";
import SEO from "@components/seo";

type PostsProps = {
  posts: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    description: string;
    timeToRead?: number;
    tags?: {
      name: string;
      slug: string;
    }[];
  }[];
  [key: string]: any;
};

const Blog = ({ posts }: PostsProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig();

  return (
    <Layout>
      <SEO title="Notes" />
      <Flex
        sx={{
          alignItems: `center`,
          justifyContent: `space-between`,
          flexFlow: `wrap`,
        }}
      >
        <Heading as="h3" variant="styles.h3" sx={{ marginY: 0 }}>
          Notes
        </Heading>
        <TLink
          as={Link}
          sx={{ variant: `links.secondary`, marginY: 2 }}
          to={replaceSlashes(`/${basePath}/${tagsPath}`)}
        >
          View all tags
        </TLink>
      </Flex>
      <Listing posts={posts} sx={{ mt: [4, 5] }} />
    </Layout>
  );
};

export default Blog;
