import { useState } from "react"
import LoginForm from "../Components/LoginForm";
import SignUpForm from "../Components/SignUpForm";

const AuthPage = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-pink-400 p-4"
        >
            <div className="w-full max-w-md">
                <h2 className="text-center text-3xl font-extrabold text-white mb-8">{isLoggedIn ? "Sign in to find you a Soulmate" : "Create an account to find your Soulmate!"}</h2>
                <div className="bg-white shadow-2xl rounded-lg p-5">
                    {isLoggedIn ? <LoginForm /> : <SignUpForm />}

					<div className='mt-8 text-center'>

                        <p className='text-sm text-gray-600'>
                            {isLoggedIn ? "New to SoulMate?" : "Already have an account?"}
                        </p>
                        <button
                            onClick={() => setIsLoggedIn((prevIsLogin) => !prevIsLogin)}
                            className='mt-2 text-red-600 hover:text-red-800 font-medium transition-colors duration-300'
                        >
                            {isLoggedIn ? "Create a new account" : "Sign in to your account"}
                        </button>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default AuthPage