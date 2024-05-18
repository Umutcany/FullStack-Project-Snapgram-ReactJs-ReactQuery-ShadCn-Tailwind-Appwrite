import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import { savePost } from "@/lib/appwrite/api";
import {
  useGetCurrentUser,
  useGetSavedPosts,
} from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";
import Module from "module";

const Saved = () => {
  const { data: currentUser } = useGetCurrentUser();
  const { data: getSavedPosts, isPending: isSavedPostLoading } =
    useGetSavedPosts();

  const savedPosts = getSavedPosts?.documents
    .map((savePost: Models.Document) => ({
      ...savePost.post,
      creator: {
        imageUrl: currentUser?.imageUrl,
      },
    }))
    .reverse();

  return (
    <div className="saved-container">
      <div className="flex gap-2 w-full max-w-5xl">
        <img
          src="/assets/icons/save.svg"
          alt="save"
          width={36}
          height={36}
          className="invert-white"
        />
        <h2 className="h3-bold md:h2-bold text-left w-full">
          Kaydedilen Postlar
        </h2>
      </div>
      {!currentUser ? (
        <Loader />
      ) : (
        <ul className="w-full flex justify-center max-w-5xl gap-9">
          {savePost.length === 0 ? (
            <p className="text-light-4">Kaydedilen gönderi bulunamadı</p>
          ) : (
            <GridPostList posts={savedPosts} showStats={false} />
          )}
        </ul>
      )}
    </div>
  );
};

export default Saved;
