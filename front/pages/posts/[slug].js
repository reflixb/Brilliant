// Import necessary components and libraries.
import PostBody from "../../components/posts/PostBody";
import PostHeader from "../../components/posts/PostHeader";
import PreviewAlert from "../../components/ui/PreviewAlert";
import Skeleton from "../../components/ui/Skeleton";
import { client, previewClient } from "../../lib/contentful/client";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";

// Define the Post component.
const Post = ({ post, preview }) => {
  const router = useRouter();

  return (
    <Box>
      {preview && <PreviewAlert />}
      <Box>
        <Box>
          {router.isFallback ? (
            <Skeleton />
          ) : (
            <>
              {post ? (
                <>
                  <PostHeader post={post} />
                  <PostBody post={post} />
                </>
              ) : (
                <p>Post not found</p>
              )}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export const getStaticProps = async ({ params, preview = false }) => {
  const cfClient = preview ? previewClient : client;

  const { slug } = params;
  try {
    const response = await cfClient.getEntries({
      content_type: "post",
      "fields.slug": slug,
    });

    if (!response?.items?.length || !response.items[0]?.fields) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post: response.items[0],
        preview,
        revalidate: 60,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths = async () => {
  const response = await client.getEntries({ content_type: "post" });
  const paths = response.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export default Post;
