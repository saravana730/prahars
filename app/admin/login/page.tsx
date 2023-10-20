
"use client";
import { login, setToken, setUser } from '@/services/authService';

import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 const Page = async () => {
    const router = useRouter()
    let email="";
    let password="";

    const handleEmail=(e:{target:{value:string}})=>{
       email=e.target.value;
    }
    const handlePassword=(e:{target:{value:string}})=>{
        password=e.target.value;
    }
    const emailValidation=(emailValue:string)=>{
        const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        return emailPattern.test(emailValue);
    }
    const passwordValidation= (passwordValue:string)=>{
        const passwordPattern= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordPattern.test(passwordValue);
    }
    

    function callLogin() {
        console.log(email);
        console.log(password);
        if(email.length !==0 && password.length !==0){

        // const isEmailValid=emailValidation(email);
        // const isPasswordValid=passwordValidation(password);
        // if(isEmailValid === false && isPasswordValid === true){
        //     toast.error("Please enter valid email")
        // }
        // else if(isEmailValid === true && isPasswordValid === false){
        //     toast.error("Please enter valid password")
        // }
        // if(isEmailValid === false && isPasswordValid === false){
        //     toast.error("Please enter valid email and password ")
        // }
        
                login(email,password).then((data) => {
                    console.log(data);

                    if (data.data) {
                        toast.success("welcome to prahars");
                        let res = data.data as ResponseDataI;
                        if (res) {
                            setUser(res.user);
                            setToken(res.token);
                            router.push("/admin/home");
                           
                        }
                    }else{
                        const errorMsg =data.message;
                        toast.error(errorMsg);
                    }

                }

                ).catch(
                    (e) => {
                        console.log(e);
                        
                    }
                )
        
    }else{
        toast.error("Please fill the details");
        
    }

    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <ToastContainer />
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src="\logo.png" alt="Praghas">
                </img>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input id="email" name="email" type="email" onChange={handleEmail} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </input>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>

                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" onChange={handlePassword} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </input>
                        </div>
                    </div>

                    <div>

                        <button onClick={() => { callLogin() }} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
                </p>
            </div >
        </div >
    );
}

export default Page;
