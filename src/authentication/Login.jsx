import { useEffect, useState } from "react";
import AnimatedText from "../components/AnimatedText";
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";

const Login = () => {
  const firebase = useFirebase();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (firebase.isLoggedIn) {
      navigate("/home");
    }
  }, [firebase, navigate]);

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Login in a user...");
    const result = await firebase.signinUserWithEmailAndPassword(
      email,
      password
    );
    console.log("Successfull", result);
  };
  return (
    <section className="text-white text-center pt-15 animated-dotted-background">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-extrabold gradient-title">Welcome to </h2>
        <h1 className="text-7xl sm:text-7xl lg:text-8xl font-extrabold gradient-title1 pb-6 flex flex-col">
          ProjectPilot
        </h1>
        <AnimatedText />
      </div>

      <div className="mt-10 pb-10 flex flex-col items-center justify-center gap-8 px-4">
        <form className="w-full max-w-md bg-[#0f0f0f] border border-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-xl flex flex-col gap-6">
          <h3 className="flex justify-center gap-2 text-2xl font-extrabold text-white tracking-wider">
            Login to
            <p className="text-2xl font-extrabold text-white tracking-wide gradient-title1">
              ProjectPilot
            </p>
          </h3>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300 cursor-pointer"
            onClick={handleRegister}
          >
            Login
          </button>

          <div className="text-white text-sm opacity-70 text-center">or</div>

          <button
            onClick={firebase.signinWithGoogle}
            type="button"
            className="flex items-center justify-center gap-2 w-full border border-white/30 hover:bg-white hover:text-black text-white font-semibold py-3 rounded-lg transition duration-300 cursor-pointer"
          >
            <img
              src="src/assets/icons8-google-48.png"
              alt="Google Icon"
              className="w-5 h-5"
            />
            Login with Google
          </button>

          <p className="text-sm text-white">
            Don't have an account?
            <Link to="/register">
              <span className="ml-1 underline text-blue-400 cursor-pointer hover:text-blue-600 transition">
                Register here
              </span>
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
