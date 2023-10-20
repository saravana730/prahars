
"use client";

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorProps } from 'react-draft-wysiwyg'
import dynamic from 'next/dynamic'
import '../styles/texteditor.css'
import BlogCreateRequestI from '@/types/blogCreateRequest';
import React, { useState } from 'react';
import { IResponse } from '@/types/response';


const Editor = dynamic<EditorProps>(
    () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
    { ssr: false }
)




export const BlogCreateForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [thumbnail, setThumbnail] = useState('');



    let requst: BlogCreateRequestI = {
        title: title,
        content: content,
        thumbnail: thumbnail,
        createdBy: 'test',
        author: author,
        category: "TECH"
    }
    let data;
    const saveBlog = async (requst: BlogCreateRequestI) => {
        let url = `http://localhost:3001/api/blog/create`
        const res = await fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requst)
        });
        data = await res.json() as IResponse;
        console.log(data);
        if (data.status !== 200, 201) {
            alert("INVALID");
        }
    };
    const handleTitleChange = (event: any) => {
        setTitle(event.target.value);

    };
    const handleAuthorChange = (event: any) => {
        setAuthor(event.target.value);

    };
    const handleContentChange = (event: any) => {
        console.log(event);
        event.blocks.text
        const joinedString = event.blocks.map((obj: any) => obj["text"]).join(', ');

        setContent(joinedString);

    };
    const handleCategoryChange = (event: any) => {
        setCategory(event.target.value);
    };
    const handleDescriptionChange = (event: any) => {
        setDescription(event.target.value);

    };


    return (
        <>
            <div className="flex flex-col  gap-6 p-12">
                <form>
                    <div className="space-y-12">


                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Create Blog</h2>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                                        Title <span className='text-red-600'>*</span>                                </label>
                                    <div className="mt-2">
                                        <input
                                            value={title}
                                            onChange={handleTitleChange}
                                            type="text"
                                            name="title"
                                            id="title"
                                            autoComplete="title"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                        Description
                                        <span className='text-red-600'>*</span>
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            value={description}
                                            onChange={handleDescriptionChange}
                                            type="text"
                                            name="description"
                                            id="description"
                                            autoComplete="description"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Category <span className='text-red-600'>*</span>
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            value={category}
                                            onChange={handleCategoryChange}
                                            id="category"
                                            name="category"
                                            type="text"
                                            autoComplete="category"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="author" className="block text-sm font-medium leading-6 text-gray-900">
                                        Author <span className='text-red-600'>*</span>
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            value={author}
                                            onChange={handleAuthorChange}
                                            id="author"
                                            name="author"
                                            type="text"
                                            autoComplete="author"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>


                            </div>
                        </div>


                    </div>
                    <div>
                        <label htmlFor="content" className="block text-sm font-medium leading-6 text-gray-900">
                            Content <span className='text-red-600'>*</span>
                        </label>
                        <Editor
                            wrapperClassName="wrapper"
                            editorClassName="editor"
                            toolbarClassName="toolbar"
                            onChange={handleContentChange}

                        />
                    </div>
                    <div className="mt-6 p-4 flex items-center justify-center  gap-x-6">
                        <button type="button" className="text-md font-semibold leading-6 text-gray-900">
                            Cancel
                        </button>
                        <button
                            onClick={async (e: any) => await saveBlog(requst)}
                            className="rounded-md bg-indigo-600 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
