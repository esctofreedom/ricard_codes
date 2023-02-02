import dayjs from "dayjs";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ButtonOne } from "./ButtonOne";

export const BottomCTA = () => {
  return (
    <div className="w-full  bg-gradient-to-b from-white to-slate-100 dark:from-black dark:to-slate-900">
      <div className=" max-w-7xl   flex flex-col   mx-auto p-0 ">
        <div className="w-full  grid grid-cols-8 gap-4">
          <div className="col-span-5 flex flex-col justify-center p-12">
            <StatusComponent />
            <h2 className="">
              Want me to create something amazing for you? <br /> Let's chat!
            </h2>
            <div className="w-min">
              <ButtonOne
                text="Send me an email"

                // onClick opens mailto:hehe@hehe.com
              />
            </div>
          </div>

          <div className="col-span-3 flex  justify-center items-center  w-full h-full ">
            <div className=" brightness-110 w-full  h-[350px]">
              <Image
                src={"/ricard-small-wedding.png"}
                height={350}
                width={438}
              />
              {/* Fade bottom */}
              {/* <div className="h-[15px] w-full absolute bottom-0 bg-gradient-to-b from-transparent to-white dark:to-black"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatusComponent = () => {
  const [result, setResult] = useState({
    available: false,
    hoursUntilAvailable: 0,
  });

  const hoursUntilAvailable = () => {
    const now = dayjs();

    const weekday = now.day();
    const hour = now.format("HH");

    const arrayWeekdays = [1, 2, 3, 4, 5];
    const workdayStartHour = 9;
    const workdayEndHour = 18;

    if (
      arrayWeekdays.includes(weekday) &&
      hour >= workdayStartHour &&
      hour < workdayEndHour
    ) {
      setResult({ available: true, hoursUntilAvailable: 0 });
    }

    if (
      arrayWeekdays.includes(weekday) &&
      (hour < workdayStartHour || hour >= workdayEndHour)
    ) {
      let nextAvailableHour;
      if (hour >= workdayEndHour) {
        nextAvailableHour = dayjs()
          .startOf("day")
          .add(workdayStartHour, "hour");
      } else {
        nextAvailableHour = dayjs()
          .startOf("hour")
          .add(workdayStartHour - hour, "hour");
      }

      const hoursUntilAvailable = nextAvailableHour.diff(now, "hour");
      setResult({ available: false, hoursUntilAvailable });
    }
  };

  useEffect(() => {
    hoursUntilAvailable();
  }, [result.available]);

  console.log("result", result);

  return (
    <div className="flex gap-2">
      {result.available ? (
        <div className="flex gap-2 items-center">
          <div className="w-3 h-3 animate-pulse   rounded-full bg-green-500"></div>
          <p className="text-green-500 dark:text-green-500 font-semibold text-lg">
            Available right now
          </p>
        </div>
      ) : (
        <div className="flex gap-2 items-center">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <p className="text-red-500 dark:text-red-500 font-semibold text-lg">
            Back in {result.hoursUntilAvailable} hours
          </p>
        </div>
      )}
    </div>
  );
};
