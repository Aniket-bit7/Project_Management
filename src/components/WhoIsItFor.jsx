import { userType } from "../data/userTypes";

const WhoIsItFor = () => {
  return (
    <section className="py-16 text-white">
      <h2 className="text-center text-4xl font-semibold mb-12">
        Who is <span className="gradient-title">ProjectPilot</span>for?
      </h2>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {userType.map((user, index) => (
            <div
              key={index}
              className="group flex flex-col items-center rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 bg-white"
            >
              <img
                src={user.image}
                alt={user.name}
                className="w-full h-60 object-cover mb-4 border-2 border-black rounded transition-transform duration-300 group-hover:-translate-y-2"
              />
              <h3 className="text-xl text-black font-medium">{user.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
