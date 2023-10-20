"use client"
import React from 'react'
import Login from './login/page';
import Home from './home/page';
import { verifyLogin } from '@/services/authService';
import { useEffect } from "react";
import { useRouter } from 'next/navigation'

const Page = () => {
    const router = useRouter()

    useEffect(() => {
        let logged = verifyLogin();
        if (logged) {
            router.push("/admin/home")
        } else {
            router.push("/admin/login")

        }
    }, [])

}





export default Page;