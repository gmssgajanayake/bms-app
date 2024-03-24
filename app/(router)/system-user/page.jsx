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
    let isMember;
    let id
    let firstName;
    let lastName;
    let email;
    let address;
    let contactNumber;


    await GlobalApi.findSystemUserByClerkId(userData?.id).then(resp => {
        isMember=resp?.systemUser?.member != null;
        id=resp?.systemUser?.id
        firstName=resp?.systemUser?.firstName
        lastName=resp?.systemUser?.lastName
        email=resp?.systemUser?.email
        address=resp?.systemUser?.address
        contactNumber=(resp?.systemUser?.contactNumber).toString()
        console.log(id)
    }).catch(error => {
        console.log(error)
    })


    return (
        <div>
            <SystemUserHeader isMember={isMember}/>
            System User
            <MemberRegisterForm firstName={firstName} lastName={lastName} email={email} address={address} contact={contactNumber} id={id} />

        </div>
    )
}

export default page