import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { useState } from "react";

const Collaboration = () => {
    const [isOpen, setIsOpen] = useState([true, false, false]);




    return (
        <Section crosses>
            <div className="container lg:flex justify-between">
                <div className="lg:max-w-[25rem] text-center lg:text-left">
                    <h2 className="h2 mb-4 md:mb-8">
                        AI Chat App for seamless collaboration
                    </h2>

                    <ul className="lg:max-w-[22rem] mb-10 md:mb-14  ">
                        {collabContent.map((item, i) => (
                            <li className="mb-3 py-3" key={item.id} >
                                <div className="flex items-center  cursor-pointer" onClick={() => setIsOpen(prev => prev.with(i, !prev[i]))}>
                                    <ChevronRightIcon className="w-6 h-5 text-n-2 mr-2 transition-all" style={{transform: isOpen[i] ? "rotate(90deg)" : "rotate(0deg)" }}/>
                                    <h6 className={`body-2 ml-3  `}>{item.title}</h6>
                                </div>
                                
                                    <p className={`body-2 mt-3 block text-n-4 transition-all duration-300 ${isOpen[i] ? "h-15" : "h-0 overflow-hidden"}`}>{item.text}</p>
                                
                            </li>
                        ))}
                    </ul>

                    <Button>Try it now</Button>
                </div>

                <div className=" xl:w-[38rem] mt-4">
                    <p className="body-2 mb-16 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
                        {collabText}
                    </p>

                    <div className="relative left-1/2 flex w-[18rem] sm:w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
                        <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                            <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                                    <img
                                        src={brainwaveSymbol}
                                        width={48}
                                        height={48}
                                        alt="brainwave"
                                    />
                                </div>
                            </div>
                        </div>

                        <ul>
                            {collabApps.map((app, index) => (
                                <li
                                    key={app.id}
                                    className={`absolute top-0 left-1/2 h-1/2  -ml-[1.6rem] origin-bottom rotate-${index * 45
                                        }`}
                                >
                                    <div
                                        className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45
                                            }`}
                                    >
                                        <img
                                            className="m-auto"
                                            width={app.width}
                                            height={app.height}
                                            alt={app.title}
                                            src={app.icon}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <LeftCurve />
                        <RightCurve />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Collaboration;