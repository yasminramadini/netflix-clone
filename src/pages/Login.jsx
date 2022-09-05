import React from "react";
import Logo from "../utils/Logo";
import Input from "../utils/form/Input";
import Button from "../utils/form/Button";
import useForm from "../hooks/useForm";

const Login = () => {
  const [user, handleChange, handleSubmit] = useForm();

  return (
    <main id="login">
      <div className="container">
        <Logo width="120px" />
      </div>
      <section className="flex justify-center items-center">
        <div className="bg-black rounded-md w-full max-w-lg p-6">
          <form action="#" className="block" onSubmit={handleSubmit}>
            <h3 className="text-3xl mb-6">Sign In</h3>
            <div className="mb-3">
              <Input
                type="text"
                placeholder="Email or phone number"
                value={user.email}
                name="email"
                handleChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <Input
                type="password"
                placeholder="Password"
                value={user.password}
                name="password"
                handleChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <Button text="SIGN IN" />
            </div>
            <div className="flex justify-between">
              <label htmlFor="rememberMe">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="mr-2 cursor-pointer"
                />
                Remember me
              </label>
              <a href="#" className="text-white">
                Need help?
              </a>
            </div>
            <div className="mt-7">
              <p className="text-gray-400">
                New to Netflix?
                <a href="#" className="text-white ml-2">
                  Sign up now
                </a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
