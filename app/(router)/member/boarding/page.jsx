import {currentUser} from '@clerk/nextjs';
import GlobalApi from "@/app/_utils/GlobalApi";
import MemberHeader from "@/app/(router)/member/_components/MemberHeader";

async function page() {

  const userData = await currentUser();
  let isMember;
  let isAdmin;

  await GlobalApi.findSystemUserByClerkId(userData?.id).then(resp => {
        isMember=resp?.systemUser?.member != null;
      isAdmin=resp?.systemUser?.member?.adminStatus;
  }).catch(error => {
    console.log(error)
  })
  return (
      <div>
        <MemberHeader isMember={isMember} isAdmin={isAdmin} fileName={'boarding'}/>
        Boarding
      </div>
  )
}

export default page