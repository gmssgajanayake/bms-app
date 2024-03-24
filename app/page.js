"use client"
import {useUser} from "@clerk/nextjs";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import GlobalApi from "./_utils/GlobalApi";


export default function Home() {
    const router = useRouter();
    const {user, isLoaded} = useUser();

    const loggedUserCheck = () => {
        GlobalApi.findSystemUserByClerkId(user?.id).then(resp => {
            if (resp?.systemUser == null) {
                systemUserDataStore();
                router.push('/system-user')
            } else {
                router.push(resp?.systemUser.member == null ? '/system-user' : '/member/dashboard')
            }
        }).catch(error => {
            console.log("Some thing went wrong");
        })
    }

    const systemUserDataStore = () => {
        GlobalApi.createNewSystemUser(
            user?.primaryEmailAddress?.emailAddress,
            user?.firstName,
            user?.lastName,
            null,
            null,
            user?.id
        ).then(resp => {
            return resp
        }).catch(error => {
            console.log("Some thing went wrong");
        })
    }

    useEffect(() => {
        if (user) {
            loggedUserCheck()
        } else {
            isLoaded && router.push('/home')
        }
    }, [user])

    return (
        <div></div>
    );
}
