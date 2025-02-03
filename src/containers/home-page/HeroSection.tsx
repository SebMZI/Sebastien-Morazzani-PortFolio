import { useEffect, useState } from "react";

const HeroSection = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      const timeString = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Europe/Paris",
      }).format(date);

      setTime(timeString);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-5">
        <div className="flex justify-between items-center">
          <div className="font-amulya text-white ">
            <div className="flex gap-2">
              <div className="flex flex-col items-center text-2xl">
                <span>S</span>
                <span>Z</span>
              </div>
              <div className="flex flex-col items-center text-2xl">
                <span>M</span>
                <span>I</span>
              </div>
            </div>
          </div>
          <p className="text-white font-akkurat">NANTES, FR, {time}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
