import Loader from "@/components/shared/Loader";
import UserCard from "@/components/shared/UserCard";
import { useToast } from "@/components/ui/use-toast";
import { useGetUsers } from "@/lib/react-query/queriesAndMutations";

const AllUsers = () => {
  const { toast } = useToast();

  const { data: creators, isLoading, isError: isErrorCreators } = useGetUsers();

  if (isErrorCreators) {
    toast({ title: "Bir hata oluştu lütfen daha sonra tekrar deneyiniz" });

    return;
  }

  return (
    <div className="common-container">
      <div className="flex gap-2 w-full max-w-5xl">
        <img
          src="/assets/icons/follow.svg"
          alt="save"
          width={34}
          height={34}
          className="invert-white"
        />
        <h2 className="h3-bold md:h2-bold text-left w-full">
          Tüm Kullanıcılar
        </h2>
      </div>
      <div className="user-container">
        {isLoading && !creators ? (
          <Loader />
        ) : (
          <ul className="user-grid">
            {creators?.documents.map((creator) => (
              <li key={creator?.$id} className="flex-1 mix-w-[200px] w-full">
                <UserCard user={creator} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
