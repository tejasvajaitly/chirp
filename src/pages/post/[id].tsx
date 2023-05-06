import { type NextPage } from "next";
import Head from "next/head";
import { PageLayout } from "~/components/layout";
import { api } from "~/utils/api";
import PostView from "../../components/postview";
import { useRouter } from "next/router";

const SinglePostpage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  if (!id || typeof id !== "string") return <div>post not found</div>;

  const { data, isLoading } = api.posts.getById.useQuery({
    id,
  });

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>404</div>;

  return (
    <>
      <Head>
        <title>{`${data.post.content} - @${data.author.username}`}</title>
      </Head>
      <PageLayout>
        <PostView {...data} />
      </PageLayout>
    </>
  );
};

export default SinglePostpage;
