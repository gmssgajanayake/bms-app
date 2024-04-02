import {currentUser} from '@clerk/nextjs';
import GlobalApi from "@/app/_utils/GlobalApi";
import MemberHeader from "@/app/(router)/member/_components/MemberHeader";
import SideNavBar from "@/app/(router)/member/_components/SideNavBar";
import {Button} from "@/components/ui/button";
import DashboardContent from "@/app/(router)/member/dashboard/_components/DashboardContent";

export const metadata = {
    title: "BMS | Dashboard - Boarding Management System",
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
            <MemberHeader isMember={isMember} isAdmin={isAdmin} fileName={'dashboard'}/>
            <DashboardContent imageUrl={userData?.imageUrl}/>
        </div>
    )
}

export default page