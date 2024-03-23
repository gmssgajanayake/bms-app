import {currentUser} from '@clerk/nextjs';
import GlobalApi from "@/app/_utils/GlobalApi";
import MemberHeader from "@/app/(router)/member/_components/MemberHeader";

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
            <MemberHeader isMember={isMember} fileName={'payments'}/>
            Payments
        </div>
    )
}

export default page