import React from "react";

function Header() {
  const [showClasses, setShowClasses] = React.useState(false);

  const classes = [
    "Web Programming",
    "Object Oriented Programming",
    "Data Structures",
    "Discrete Math",
    "Agile Project Management",
  ];

  return (
    <div className="space-y-8 bg-gray-900 text-white p-8 md:p-16">
      <section>
        <h1 className="text-2xl font-bold mb-2">
          Education:
        </h1>
        <p className="text-blue-400 leading-relaxed text-s sm:text-m md:text-l lg:text-xl">
          Software Engineering, Ensign College - B.A.S.
        </p>
        <p className="text-blue-400 leading-relaxed text-s sm:text-m md:text-l lg:text-xl">
          Integrated Studies, Ensign College - A.A.S.
        </p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
          onClick={() => setShowClasses((prev) => !prev)}
        >
          {showClasses ? "Hide" : "Relevant Courses Taken"}
        </button>
        {showClasses && (
          <ul className="mt-4 list-disc list-inside text-blue-200">
            {classes.map((cls, idx) => (
              <li key={idx}>{cls}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default Header;
