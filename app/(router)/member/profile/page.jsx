import {currentUser} from '@clerk/nextjs';
import GlobalApi from "@/app/_utils/GlobalApi";
import MemberHeader from "@/app/(router)/member/_components/MemberHeader";
import MyProfileForm from "@/app/(router)/member/profile/_components/MyProfileForm";

export const metadata = {
    title: "BMS | My profile - Boarding Management System",
    description: "Boarding Management System",
};

async function page() {

    const userData = await currentUser();
    let isMember;
    let isAdmin;
    let response;
    let clerkId
    let firstName;
    let lastName;
    let email;
    let address;
    let contactNumber;


    await GlobalApi.findSystemUserByClerkId(userData?.id).then(resp => {
        isMember = resp?.systemUser?.member != null;
        isAdmin = resp?.systemUser?.member?.adminStatus;
    }).catch(error => {
        console.log(error)
    })


    await GlobalApi.findSystemUserByClerkId(userData?.id).then(resp => {
        if (resp !== null) {
            response = resp;
            isMember = resp?.systemUser?.member != null;
            clerkId = resp?.systemUser?.clerkId;
            firstName = resp?.systemUser?.firstName;
            lastName = resp?.systemUser?.lastName;
            email = resp?.systemUser?.email;
            address = resp?.systemUser?.address == null ? "" : resp?.systemUser?.address;
            contactNumber = resp?.systemUser?.contactNumber === null ? "" : resp?.systemUser?.contactNumber;
        }
    }).catch(error => {
        console.log(error)
    })

    return (
        <div>
            <MemberHeader isMember={isMember} isAdmin={isAdmin} fileName={'profile'}/>
            <MyProfileForm isAdmin={isAdmin} address={address} firstName={firstName} lastName={lastName} email={email}  contact={contactNumber} clerkId={clerkId}/>
        </div>
    )
}

export default page