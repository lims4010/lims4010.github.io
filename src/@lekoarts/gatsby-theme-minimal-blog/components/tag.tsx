/** @jsx jsx */
import { jsx, Heading, Link as TLink } from "theme-ui";
import { Flex } from "@theme-ui/components";
import { Link } from "gatsby";
import Layout from "@components/layout";
import useMinimalBlogConfig from "@components/../hooks/use-minimal-blog-config";
import Listing from "@components/listing";
import replaceSlashes from "@components/../utils/replaceSlashes";
import SEO from "@components/seo";

type TagProps = {
  posts: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    description: string;
    timeToRead?: number;
    tags: {
      name: string;
      slug: string;
    }[];
  }[];
  pageContext: {
    isCreatedByStatefulCreatePages: boolean;
    slug: string;
    name: string;
    [key: string]: any;
  };
};

const Tag = ({ posts, pageContext }: TagProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig();

  return (
    <Layout>
      <SEO title={`Tag: ${pageContext.name}`} />
      <Flex
        sx={{
          alignItems: `center`,
          justifyContent: `space-between`,
          flexFlow: `wrap`,
        }}
      >
        <Heading as="h3" variant="styles.h3" sx={{ marginY: 0 }}>
          {pageContext.name}
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

export default Tag;
