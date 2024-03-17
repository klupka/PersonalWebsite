import React from "react";
import Nav from "../components/Nav";

import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

import profilePicture from "../resources/boar.jpg";

const Home = () => {
    return (
        <>
            <Nav />
            <div className="animate-load_content">
                <div className="max-w-screen-xl mx-auto font-inter p-3 pt-0">
                    <div className="my-20 flex flex-col items-center text-text text-center gap-10">
                        <img
                            className="w-[150px] rounded-full"
                            src={profilePicture}
                            alt="Seth Klupka"
                        />

                        <div className="text-5xl font-semibold text-heading">
                            Seth Klupka
                        </div>
                        <div className="max-w-[500px]">
                            Experienced web developer specializing in
                            user-friendly digital solutions. Skilled in
                            front-end and back-end development, with a focus on
                            clean, responsive websites.
                        </div>

                        <div className="flex justify-center">
                            <ul className="flex gap-5 mt-0 text-text text-sm justify-center">
                                <div className="flex flex-col gap-5">
                                    <li className="hover:scale-[1.02] transition ease-in-out">
                                        <a className="font-semibold flex items-center gap-3 justify-start transition ease-in-out hover:text-accentText border-borderSubtle rounded-md border-[1px] p-3 bg-[#0f172a80] backdrop-blur-2xl w-[235px] hover:border-accentText hover:bg-slate-800">
                                            <div className="pr-3">
                                                <FaLocationDot />
                                            </div>
                                            <div>San Antonio, Texas</div>
                                        </a>
                                    </li>
                                    <li className="hover:scale-[1.02] transition ease-in-out">
                                        <a className="font-semibold flex items-center gap-3 justify-start transition ease-in-out hover:text-accentText border-borderSubtle rounded-md border-[1px] p-3 bg-[#0f172a80] backdrop-blur-2xl w-[235px] hover:border-accentText hover:bg-slate-800">
                                            <div className="pr-3">
                                                <BsFillTelephoneFill />
                                            </div>
                                            +1 (210) 740-3581
                                        </a>
                                    </li>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <li className="hover:scale-[1.02] transition ease-in-out">
                                        <a className="font-semibold flex items-center gap-3 justify-start transition ease-in-out hover:text-accentText border-borderSubtle rounded-md border-[1px] p-3 bg-[#0f172a80] backdrop-blur-2xl w-[235px] hover:border-accentText hover:bg-slate-800">
                                            <div className="pr-3">
                                                <MdEmail />
                                            </div>
                                            sethcklupka@gmail.com
                                        </a>
                                    </li>
                                    <li className="hover:scale-[1.02] transition ease-in-out">
                                        <a
                                            className="font-semibold flex items-center gap-3 justify-start transition ease-in-out hover:text-accentText border-borderSubtle rounded-md border-[1px] p-3 bg-[#0f172a80] backdrop-blur-2xl w-[235px] hover:border-accentText hover:bg-slate-800"
                                            href="https://github.com/klupka"
                                        >
                                            <div className="pr-3">
                                                <FaGithub />
                                            </div>
                                            github.com/klupka
                                        </a>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-screen-xl mx-auto font-inter flex flex-col">
                        <div className="flex gap-10">
                            <div
                                id="prof_bg"
                                className="text-text w-1/3 p-10 flex flex-col hover:scale-[1.02] transition ease-in-out hover:text-accentText group border-borderSubtle rounded-md border-[1px] bg-[#0f172a80] backdrop-blur-2xl hover:border-accentText hover:bg-slate-800"
                            >
                                <div className="flex items-center text-heading gap-5 text-lg font-semibold pb-5 group-hover:text-accentText">
                                    Professional Background
                                </div>

                                <ul className="flex flex-col gap-3 text-sm list-inside font-semibold">
                                    <li>B.S. Computer Science, UTSA</li>
                                    <li>NSF REU Researcher & Presenter</li>
                                    <li>Software Engineer</li>
                                    <li>Project Manager</li>
                                    <li>Team Collaborator</li>
                                </ul>
                            </div>
                            <div
                                id="skills_expertise"
                                className="text-text w-1/3 p-10 flex flex-col hover:scale-[1.02] transition ease-in-out hover:text-accentText group border-borderSubtle rounded-md border-[1px] bg-[#0f172a80] backdrop-blur-2xl hover:border-accentText hover:bg-slate-800"
                            >
                                <div className="flex items-center text-heading gap-5 text-lg font-semibold pb-5 group-hover:text-accentText">
                                    Skills & Expertise
                                </div>
                                <ul className="flex flex-col gap-3 text-sm list-inside font-semibold">
                                    <li>Full Stack Development</li>
                                    <li>Responsive Web Design</li>
                                    <li>API Utilization</li>
                                    <li>Database Management</li>
                                    <li>Version Control</li>
                                </ul>
                            </div>
                            <div
                                id="personal_interests"
                                className="text-text w-1/3 p-10 flex flex-col hover:scale-[1.02] transition ease-in-out hover:text-accentText group border-borderSubtle rounded-md border-[1px] bg-[#0f172a80] backdrop-blur-2xl hover:border-accentText hover:bg-slate-800"
                            >
                                <div className="flex items-center text-heading gap-5 text-lg font-semibold pb-5 group-hover:text-accentText">
                                    Technologies
                                </div>
                                <span className="font-semibold text-sm">
                                    Frontend
                                </span>
                                <ul className="list-inside text-sm mb-3 mt-1 border-l-2 border-borderSubtle ml-1 pl-2 group-hover:border-accentText">
                                    <li>
                                        HTML, CSS, JavaScript, React, Tailwind
                                    </li>
                                </ul>
                                <span className="font-semibold text-sm">
                                    Backend
                                </span>
                                <ul className="list-inside text-sm mb-3 mt-1 border-l-2 border-borderSubtle ml-1 pl-2 group-hover:border-accentText">
                                    <li>Node.js, Express, PHP</li>
                                </ul>
                                <span className="font-semibold text-sm">
                                    Database Management
                                </span>
                                <ul className="list-inside text-sm border-l-2 border-borderSubtle ml-1 pl-2 group-hover:border-accentText">
                                    <li>SQL, MongoDB</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto font-inter p-5 py-20 flex flex-col gap-5 items-center justify-center">
                    <div className="text-text animate-pulse hover:scale-[1.02] transition ease-in-out hover:animate-none">
                        <NavLink
                            className="flex gap-3 items-center hover:text-accentText transition ease-in-out font-semibold"
                            to={"/portfolio"}
                        >
                            View Portfolio
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
