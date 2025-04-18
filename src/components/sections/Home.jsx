import React from "react";
import RevealOnScroll from "./RevealOnScroll";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
            Hi! I'm Kamrun Nahar
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            A Computer Science & Engineering (CSE) student, web developer, and
            tech enthusiast with a passion for creating interactive and
            user-friendly web applications. With expertise in HTML, CSS,
            JavaScript, React JS, Next JS and Tailwind CSS, I have built
            projects ranging from e-commerce UI clones to dynamic web
            applications. <br />
            🚀 Let's build something amazing together!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="text-white bg-blue-500 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
