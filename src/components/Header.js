import { Link } from 'react-router-dom';
import Login from '../pages/Login';
import SignUp from '../pages/Signup';

export default function Header() {
    return (
        <div className="mb-10">
            <div className="flex justify-center text-center">
                <img
                    alt=""
                    className="h-24 w-24 mb-10"
                    src="https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649962071315" />
            </div>
            <h2 className="mt-5 mb-8 text-center text-5xl font-extrabold text-purple-700">
               Patriot.ai
            </h2>
            <h2 className="mt-6 text-center text-xl text-gray-900">
             Fighting corruption one prompt at a time
            </h2>

            <div className="flex items-center justify-center mt-20">
                <Link to="/login">
                  <button class="flex px-10 py-5 bg-purple-700 mr-5 text-white text-center font-semibold shadow-lg shadow-purple-600/50 rounded-full">
                    <span class="mx-10 text-center">Login</span>
                </button>
                </Link>
              <Link to="/signUp">
               <button class="flex px-8 py-5 bg-white-400 mr-5 text-white text-center font-semibold rounded-full shadow-lg shadow-white-500/50 text-purple-700">
                    <span class="mx-10 text-purple-600">SignUp</span>
                </button>
              </Link>
               
            </div>

        </div>
    )
}