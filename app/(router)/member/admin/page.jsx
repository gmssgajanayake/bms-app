import {currentUser} from '@clerk/nextjs';
import GlobalApi from "@/app/_utils/GlobalApi";
import MemberHeader from "@/app/(router)/member/_components/MemberHeader";
import {Button} from "@/components/ui/button";
import RequestManageArea from "@/app/(router)/member/admin/_components/RequestManageArea";
import AdminManage from "@/app/(router)/member/admin/_components/AdminManage";
import ManageBudget from "@/app/(router)/member/admin/_components/ManageBudget";


export const metadata = {
    title: "BMS | Admin Panel - Boarding Management System",
    description: "Boarding Management System",
};
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
          <MemberHeader isMember={isMember} isAdmin={isAdmin} fileName={'admin'}/>
          <div className={'grid grid-cols-1 lg:grid-cols-2 '}>
              <div
                  className="flex bg-white mb-10  gap-4 flex-col flex-1 items-center ml-6 mr-6 p-4 rounded-lg border border-dashed shadow-sm">
                  <div className="flex flex-col items-center gap-1 text-center">
                      <AdminManage/>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                      <ManageBudget/>
                  </div>
              </div>
              <div
                  className="flex bg-white mb-10  flex-col flex-1 items-center ml-6 mr-6 p-4 justify-center rounded-lg border border-dashed shadow-sm">
                  <div className="flex flex-col items-center gap-1 text-center">
                      <RequestManageArea/>
                  </div>
              </div>
          </div>

      </div>
  )
}

export default page