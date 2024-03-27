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
  let lastName;
  let email;
  let address;
  let contactNumber;

  await GlobalApi.findSystemUserByClerkId(userData?.id).then(resp => {
    if(resp!==null){
      response=resp;
      isMember=resp?.systemUser?.member != null;
      id=resp?.systemUser?.id;
      firstName=resp?.systemUser?.firstName;
      lastName=resp?.systemUser?.lastName;
      email=resp?.systemUser?.email;
      address=resp?.systemUser?.address==null?"":resp?.systemUser?.address;
      contactNumber=resp?.systemUser?.contactNumber==null?"":resp?.systemUser?.contactNumber;
    }
  }).catch(error => {
    console.log(error)
  })


  return (
      <div>
        <FindBoardingHeader isMember={isMember}/>
        <FindBoardingForm/>


        {/*<MemberRegisterForm response={response} firstName={firstName} lastName={lastName} email={email} address={address} contact={contactNumber} id={id} />*/}
      </div>
  )
}

export default page