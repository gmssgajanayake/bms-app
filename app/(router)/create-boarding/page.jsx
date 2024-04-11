import {currentUser} from '@clerk/nextjs';
import GlobalApi from "@/app/_utils/GlobalApi";
import FindBoardingHeader from "@/app/(router)/find-boarding/_components/FindBoardingHeader";
import CreateBoardingHeader from "@/app/(router)/create-boarding/_components/CreateBoardingHeader";
import BoardingRegisterForm from "@/app/(router)/create-boarding/_components/BoardingRegisterForm";


export const metadata = {
    title: "BMS | Create Boarding - Boarding Management System",
    description: "Boarding Management System",
};

async function page() {

    const userData = await currentUser();

    let isMember;
    let isRequested;


    await GlobalApi.findSystemUserByClerkId(userData?.id).then(resp => {
        if (resp !== null) {
            isMember = resp?.systemUser?.member != null;
        }
    }).catch(error => {
        console.log(error)
    })

    await GlobalApi.getAllRequest(userData.id).then(resp => {
        isRequested = resp.inviteToBoardings.length !== 0
    }).catch(error => {
        console.log(error)
    })


    return (
        <div>
            <CreateBoardingHeader isMember={isMember} isRequested={isRequested}/>
            <BoardingRegisterForm clerkId={userData.id}/>
        </div>
    )
}

export default page