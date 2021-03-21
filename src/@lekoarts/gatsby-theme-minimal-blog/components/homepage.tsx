/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import Layout from "@components/layout";
import Title from "@components/title";
import Listing from "@components/listing";
import List from "@components/list";
import useMinimalBlogConfig from "@components/../hooks/use-minimal-blog-config";
import useSiteMetadata from "@components/../hooks/use-site-metadata";
import replaceSlashes from "@components/../utils/replaceSlashes";
import { visuallyHidden } from "@components/../styles/utils";
// @ts-ignore
import Hero from "../texts/hero";
// @ts-ignore
import Bottom from "../texts/bottom";

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

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig();
  const { siteTitle } = useSiteMetadata();

  return (
    <Layout>
      <h1 sx={visuallyHidden}>{siteTitle}</h1>
      <section
        sx={{
          mb: [5, 6, 7],
          p: { fontSize: [1, 2, 3], mt: 2 },
          variant: `section_hero`,
        }}
      >
        <Hero />
      </section>
      {/* <Title text="Edit something here">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>
          Read all posts
        </Link>
      </Title>
      <Listing posts={posts} showTags={false} />
      <List sx={{ variant: `section_bottom` }}>
        <Bottom />
      </List> */}
    </Layout>
  );
};

export default Homepage;
