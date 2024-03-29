import {currentUser} from '@clerk/nextjs';
import GlobalApi from "@/app/_utils/GlobalApi";
import FindBoardingHeader from "@/app/(router)/find-boarding/_components/FindBoardingHeader";
import FindBoardingForm from "@/app/(router)/find-boarding/_components/FindBoardingForm";

export const metadata = {
    title: "BMS | Find Boarding Manager - Boarding Management System",
    description: "Boarding Management System",
};

async function page() {

    const userData = await currentUser();
    let response;
    let isMember;
    let id
    let firstName;
    let address;
    let lastName;
    let email;
    let contactNumber;


    let name, memberId, addressOfBoarding, description, requestId

    let isRequested;

    await GlobalApi.findSystemUserByClerkId(userData?.id).then(resp => {
        if (resp !== null) {
            response = resp;
            isMember = resp?.systemUser?.member != null;
            id = resp?.systemUser?.id;
            firstName = resp?.systemUser?.firstName;
            lastName = resp?.systemUser?.lastName;
            email = resp?.systemUser?.email;
            address = resp?.systemUser?.address == null ? "" : resp?.systemUser?.address;
            contactNumber = resp?.systemUser?.contactNumber == null ? "" : resp?.systemUser?.contactNumber;
        }
    }).catch(error => {
        console.log(error)
    })


    await GlobalApi.getAllRequest(userData.id).then(resp => {
        isRequested = resp.inviteToBoardings.length !== 0
        if (isRequested) {
            name = resp?.inviteToBoardings[0]?.member?.boarding?.name,
                addressOfBoarding = resp?.inviteToBoardings[0]?.member?.boarding?.address,
                description = resp?.inviteToBoardings[0]?.member?.boarding?.discription,
                memberId = resp?.inviteToBoardings[0]?.member?.id
                requestId = resp?.inviteToBoardings[0]?.id
        }
    }).catch(error => {
        console.log(error)
    })


    return (
        <div>
            <FindBoardingHeader isMember={isMember}/>
            <FindBoardingForm clerkId={userData.id} isRequested={isRequested} name={name} description={description}
                              address={addressOfBoarding} memberId={memberId} requestId={requestId}/>
            {/*<MemberRegisterForm response={response} firstName={firstName} lastName={lastName} email={email} address={address} contact={contactNumber} id={id} />*/}
        </div>
    )
}

export default page