import { Code, ExternalLink, Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

const Hero = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getMyProfile = async () => {
      setLoading(true);
      const { data } = await axios.get(
        "https://portfolio-latestfullstack.onrender.com/api/v1/user/portfolio/me",
        { withCredentials: true }
      );
      setUser(data.user);
      setLoading(false);
    };
    getMyProfile();
  }, []);
  return (
    <div className="w-full">
      {loading && <LoadingSpinner />}
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-green-400 rounded-full h-2 w-2"></span>
        <p>Online</p>
      </div>
      <h1
        className="overflow-x-hidden text-[1.3rem] sm:text-[1.75rem] 
      md:text-[2.2rem] lg:text-[2.8rem] tracking-[2px] mb-4"
      >
        Hey, I'm Sujitkumar Mourya
      </h1>
      <h1
        className="text-tubeLight-effect overflow-x-hidden text-[1.3rem] 
      sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[15px]"
      >
        <Typewriter
          words={["FULLSTACK DEVELOPER", "BlockChain Developer"]}
          loop={50}
          cursor
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <div
        className="w-fit px-5 py-2 bg-slate-50 rounded-[20px] flex gap-5 
      items-center mt-4 md:mt-8 lg:mt-10 cursor-pointer"
      >
        <a href={user?.linkedInURL} target="_blank">
          <Linkedin className="text-sky-500 w-7 h-7" />
        </a>
        <a href={user?.twitterURL} target="_blank">
          <Twitter className="text-blue-800 w-7 h-7" />
        </a>
        <a href={user?.leetcodeURL} target="_blank">
          <Code className="text-blue-800 w-7 h-7" />
        </a>
      </div>
      <div className="mt-4 md:mt-8 lg:mt-10  flex gap-3">
        <a href={user?.githubURL} target="_blank">
          <Button className="rounded-[30px] flex items-center gap-2 flex-row">
            <span>
              <Github />
            </span>
            <span>Github</span>
          </Button>
        </a>
        <a href={user?.resume && user?.resume.url} target="_blank">
          <Button className="rounded-[30px] flex items-center gap-2 flex-row">
            <span>
              <ExternalLink />
            </span>
            <span>Resume </span>
          </Button>
        </a>
      </div>
      <p className="mt-8 text-xl tracking-[2px]">{user?.aboutMe}</p>
      <hr className="my-8 md::my-10 " />
    </div>
  );
};

export default Hero;
