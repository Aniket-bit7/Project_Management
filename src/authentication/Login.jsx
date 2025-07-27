import { useEffect, useState } from "react";
import AnimatedText from "../components/AnimatedText";
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";

const Login = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (firebase.isLoggedIn) {
      navigate("/home");
    }
  }, [firebase, navigate]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const result = await firebase.signinUserWithEmailAndPassword(
        email,
        password
      );
      console.log("Successful", result);
    } catch (err) {
      console.error("Login error:", err.message);
      setError("User is not registered yet.");
    }
  };

  return (
    <section className="text-white text-center pt-16 sm:pt-20 animated-dotted-background min-h-screen px-3 sm:px-6">
      {/* Header */}
      <div className="flex flex-col gap-2 px-2 sm:px-4">
        <h2 className="text-lg sm:text-xl font-extrabold gradient-title">
          Welcome to
        </h2>

        <h1 className="gradient-title1 font-extrabold leading-tight text-center break-words w-full mx-auto text-[clamp(2rem,8vw,5rem)]">
          ProjectPilot
        </h1>

        <div className="w-full max-w-[90%] sm:max-w-md md:max-w-lg mx-auto mt-2">
          <AnimatedText />
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="mt-6 mx-auto w-fit px-4 sm:px-6 py-3 bg-red-600 text-white font-semibold rounded-md shadow-md text-sm sm:text-base">
          {error}
        </div>
      )}

      {/* Login form */}
      <div className="mt-8 sm:mt-10 pb-8 sm:pb-10 flex flex-col items-center justify-center gap-6 sm:gap-8">
        <form
          onSubmit={handleRegister}
          className="w-full max-w-sm sm:max-w-md bg-[#0f0f0f] border border-white/10 backdrop-blur-lg p-5 sm:p-10 rounded-2xl shadow-xl flex flex-col gap-5 sm:gap-6"
        >
          <h3 className="flex flex-wrap justify-center gap-1 sm:gap-2 text-xl sm:text-2xl md:text-3xl lg:text-2xl font-extrabold text-white tracking-wide text-center leading-tight">
            <span>Login to</span>
            <span className="gradient-title1 break-words text-xl sm:text-2xl md:text-3xl lg:text-2xl">
              ProjectPilot
            </span>
          </h3>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300 cursor-pointer text-sm sm:text-base"
          >
            Login
          </button>

          <p className="text-sm text-white text-center">
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
