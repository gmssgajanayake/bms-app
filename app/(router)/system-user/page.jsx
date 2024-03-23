import {currentUser} from '@clerk/nextjs';
import GlobalApi from "@/app/_utils/GlobalApi";
import SystemUserHeader from "@/app/(router)/system-user/_components/SystemUserHeader";

async function page() {

    const userData = await currentUser();

    let memberId;

    await GlobalApi.findSystemUserByClerkId(userData?.id).then(resp => {
        //Can be simplified
        if (resp?.systemUser?.member != null) {
            memberId = resp?.systemUser?.member?.id;
        } else {
            memberId = null;
        }
    }).catch(error => {
        console.log(error)
    })

    return (
        <div>System User
            <SystemUserHeader memberId={memberId}/>
        </div>
    )
}

export default page