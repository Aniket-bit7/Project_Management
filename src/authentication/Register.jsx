import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import AnimatedText from "../components/AnimatedText";
import TypewriterLine from "../components/TypeWriterLine";

const Register = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      console.log("Signing up a user...");
      const result = await firebase.signUpUserWithEmailAndPassword(
        email,
        password
      );
      console.log("Successful", result);

      // ✅ Sign user out so we can send them to login manually
      await firebase.signOutUser();

      // ✅ Navigate to login page
      navigate("/");
    } catch (err) {
      console.error("Registration error:", err.message);
      setError(err.message);
    }
  };

  return (
    <section className="text-white text-center pt-15 animated-dotted-background min-h-screen">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-extrabold gradient-title">Welcome to</h2>
        <h1 className="text-7xl sm:text-7xl lg:text-8xl font-extrabold gradient-title1 pb-6 flex flex-col">
          ProjectPilot
        </h1>
        <AnimatedText />
      </div>

      <div className="mt-10 pb-10 flex flex-col items-center justify-center gap-8 px-4">
        <form
          className="w-full max-w-md bg-[#0f0f0f] border border-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-xl flex flex-col gap-6"
          onSubmit={handleRegister}
        >
          <h3 className="flex justify-center gap-2 text-2xl font-extrabold text-white tracking-wider">
            Register on
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
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="text-red-400 text-sm -mt-2">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300 cursor-pointer"
          >
            Register
          </button>

          <p className="text-sm text-white">
            Already have an account?
            <Link to="/">
              <span className="ml-1 underline text-blue-400 cursor-pointer hover:text-blue-600 transition">
                Login here
              </span>
            </Link>
          </p>
        </form>
      </div>

      <div className="pb-20">
        <TypewriterLine />
      </div>
    </section>
  );
};

export default Register;
