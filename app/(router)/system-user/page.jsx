import {currentUser} from '@clerk/nextjs';
import GlobalApi from "@/app/_utils/GlobalApi";
import SystemUserHeader from "@/app/(router)/system-user/_components/SystemUserHeader";


export const metadata = {
    title: "BMS | System User - Boarding Management System",
    description: "Boarding Management System",
};
async function page() {

    const userData = await currentUser();
    let isMember;

    await GlobalApi.findSystemUserByClerkId(userData?.id).then(resp => {
        isMember=resp?.systemUser?.member != null;
    }).catch(error => {
        console.log(error)
    })
    return (
        <div>
            <SystemUserHeader isMember={isMember}/>
            System User
        </div>
    )
}

export default page