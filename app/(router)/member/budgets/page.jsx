import {currentUser} from '@clerk/nextjs';
import GlobalApi from "@/app/_utils/GlobalApi";
import MemberHeader from "@/app/(router)/member/_components/MemberHeader";
import {Button} from "@/components/ui/button";
import BudgetContent from "@/app/(router)/member/budgets/_components/BudgetContent";


export const metadata = {
    title: "BMS | Budgets - Boarding Management System",
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
      <div className={'flex flex-col gap-6 bg-muted/40 ' }>
          <MemberHeader isMember={isMember} isAdmin={isAdmin} fileName={'budgets'}/>
          <div
              className="flex bg-white mb-10  flex-col flex-1 items-center ml-6 mr-6 lg:pt-10 p-4 justify-center rounded-lg border border-dashed shadow-sm">
              <BudgetContent/>
          </div>
          <div
              className="flex  bg-white mb-10  flex-col flex-1 items-center ml-6 mr-6 lg:pt-10 p-4 justify-center rounded-lg border border-dashed shadow-sm">
              <BudgetContent/>
          </div>
      </div>
  )
}

export default page