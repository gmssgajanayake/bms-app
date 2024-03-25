import {currentUser} from '@clerk/nextjs';
import GlobalApi from "@/app/_utils/GlobalApi";
import SystemUserHeader from "@/app/(router)/system-user/_components/SystemUserHeader";
import MemberRegisterForm from "@/app/(router)/system-user/_components/MemberRegisterForm";


export const metadata = {
    title: "BMS | System User - Boarding Management System",
    description: "Boarding Management System",
};

async function page() {

    const userData = await currentUser();
    let response;
    let isMember;
    let clerkId
    let firstName;
    let lastName;
    let email;
    let address;
    let contactNumber;

    await GlobalApi.findSystemUserByClerkId(userData?.id).then(resp => {
        if (resp !== null) {
            response = resp;
            isMember = resp?.systemUser?.member != null;
            clerkId = resp?.systemUser?.clerkId;
            firstName = resp?.systemUser?.firstName;
            lastName = resp?.systemUser?.lastName;
            email = resp?.systemUser?.email;
            address = resp?.systemUser?.address == null ? "" : resp?.systemUser?.address;
            contactNumber = resp?.systemUser?.contactNumber == null ? "" : resp?.systemUser?.contactNumber;
        }
    }).catch(error => {
        console.log(error)
    })


    return (
        <div>
            <SystemUserHeader isMember={isMember}/>
            System User
            <MemberRegisterForm response={response} firstName={firstName} lastName={lastName} email={email}
                                address={address} contact={contactNumber} clerkId={clerkId}/>
        </div>
    )
}

export default page