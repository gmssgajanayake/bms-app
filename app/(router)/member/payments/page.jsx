import {currentUser} from '@clerk/nextjs';
import GlobalApi from "@/app/_utils/GlobalApi";
import MemberHeader from "@/app/(router)/member/_components/MemberHeader";
import {Button} from "@/components/ui/button";
import MakePaymentForm from "@/app/(router)/member/payments/_componets/MakePaymentForm";
import AllPaymentDetails from "@/app/(router)/member/payments/_componets/AllPaymentDetails";

export const metadata = {
    title: "BMS | Payment - Boarding Management System",
    description: "Boarding Management System",
};


async function page() {

    const userData = await currentUser();
    let isMember;
    let isAdmin;
    let budgetId;
    let boardingId;
    let total;
    let balance;
    let memberId;
    let memberPayments;

    await GlobalApi.findSystemUserByClerkId(userData?.id).then(resp => {
        isMember = resp?.systemUser?.member != null;
        isAdmin = resp?.systemUser?.member?.adminStatus;
    }).catch(error => {
        console.log(error)
    })


    await GlobalApi.getBoardingByClerkId(userData?.id).then(resp => {
        boardingId = resp?.systemUser?.member?.boarding?.id
        total = resp?.boarding?.budgets[lastElement].total
        balance = resp?.boarding?.budgets[lastElement].balance
    }).catch(error => {
        console.log(error)
    })

    await GlobalApi.getAllBudgets(boardingId).then(resp => {
        let lastElement = resp?.boarding?.budgets.length - 1
        if (resp?.boarding?.budgets.length !== 0) {
            budgetId = resp?.boarding?.budgets[lastElement].id
        }
    }).catch(error => {
        console.log(error)
    })


    await GlobalApi.getMemberIdByClerkId(userData?.id).then(resp => {
        memberId = resp?.systemUser?.member?.id
    })

    await GlobalApi.getMemberPaymentByMemberId(memberId).then(res => {
        memberPayments = res.memberPayments;
    }).catch(error => {
        console.log(error)
    })


    return (
        <div>
            <MemberHeader isMember={isMember} isAdmin={isAdmin} fileName={'payments'}/>
            <MakePaymentForm budgetId={budgetId} totalAmount={total} balance={balance} memberId={memberId}/>
            <AllPaymentDetails memberPayments={memberPayments}/>
        </div>
    )
}

export default page