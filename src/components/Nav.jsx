import React from "react";
import { NavLink } from "react-router-dom";
import resumePDF from "../resources/resume.pdf";

const Nav = () => {
    return (
        <div className="flex w-full z-50 bg-[#0b122080] backdrop-blur-2xl border-borderSubtle border-b-[1px]">
            <div
                className="flex justify-between text-sm font-bold mx-auto max-w-screen-xl w-full m-2 px-3"
                id="nav"
            >
                <NavLink id="navLogo" className="" to={"/"}>
                    <div className="text-lg flex justify-center items-center h-10 italics">
                        SETH
                        <span className="text-accentText font-extrabold">
                            K
                        </span>
                    </div>
                </NavLink>
                <ul className="flex items-center gap-10">
                    <li className="hover:text-accentText">
                        <NavLink className="" to={"/portfolio"}>
                            PORTFOLIO
                        </NavLink>
                    </li>
                    <li className="hover:text-accentText">
                        <a href={resumePDF} target="_blank">
                            RESUME
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
