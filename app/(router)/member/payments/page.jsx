import {currentUser} from '@clerk/nextjs';
import GlobalApi from "@/app/_utils/GlobalApi";
import MemberHeader from "@/app/(router)/member/_components/MemberHeader";
import {Button} from "@/components/ui/button";

export const metadata = {
    title: "BMS | Payment - Boarding Management System",
    description: "Boarding Management System",
};

async function page() {

    const userData = await currentUser();
    let isMember;
    let isAdmin;

    await GlobalApi.findSystemUserByClerkId(userData?.id).then(resp => {
        isMember=resp?.systemUser?.member != null;
        isAdmin=resp?.systemUser?.member?.adminStatus;
    }).catch(error => {
        console.log(error)
    })
    return (
        <div>
            <MemberHeader isMember={isMember} isAdmin={isAdmin} fileName={'payments'}/>
            <div
                className="flex flex-1 items-center ml-6 mr-6 p-6 justify-center rounded-lg border border-dashed shadow-sm">
                <div className="flex flex-col items-center gap-1 text-center">
                    <h3 className="text-2xl font-bold tracking-tight">
                        You have no products
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        You can start selling as soon as you add a product.
                    </p>
                    <Button className="mt-4">Add Product</Button>
                </div>
            </div>
        </div>
    )
}

export default page