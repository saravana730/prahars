"use client"

import { BlogCard } from '@/components/blogCard';
import { BlogCreateForm } from '@/components/blogCreateForm';
import { IResponse } from '@/types/response';
import React, { useEffect } from 'react'
import Image from 'next/image'
import { verifyLogin } from '@/services/authService';
import { useRouter } from 'next/navigation'
import Layout from './layout';
import AdminLayout from './layout';

const Page = () => {
    const router = useRouter()

    useEffect(() => {
        let logged = verifyLogin();
        if (!logged) {
            router.push("/admin/login")
        }
    }, [])

    let blogs: any[] = [];



    // let reqBody = {
    //     pageNumber: 1,
    //     pageSize: 10
    // };
    // let url = `http://localhost:3001/api/blog/getall`
    // const res = fetch(url, {
    //     method: "POST",
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(reqBody),
    //     cache: 'no-cache'
    // }).then((data) => {
    //     data.json().then(res => {
    //         if (res) {
    //             console.log(res);
    //             blogs = res.data ?? [];
    //         }
    //     });

    // }
    //}
    // )

    return (
        <div>Dashboard</div>
    );
}

export default Page;