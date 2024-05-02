import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";

const ProjectCard = ({
    title,
    description,
    liveLink,
    githubLink,
    note,
    date,
    usage,
    imageURL,
}) => {
    function displayNote() {
        if (note !== "") {
            return (
                <div className="text-accentText flex gap-1 items-center">
                    <span className="text-lg">
                        <IoMdInformationCircleOutline />
                    </span>{" "}
                    <span className="text-sm">{note}</span>
                </div>
            );
        }
    }
    return (
        <div className="group text-text w-full p-5 my-5 flex flex-col transition ease-in-out group border-borderSubtle rounded-md border-[1px] bg-[#0f172a80] backdrop-blur-2xl">
            <div className="flex gap-5">
                <div className="w-1/4 flex items-center justify-center">
                    <a href={liveLink} target="_blank">
                        <img
                            className="rounded-md object-cover border-[1px] border-borderSubtle w-full h-[298.5px] hover:scale-[1.02] transition ease-in-out hover:border-accentText"
                            src={imageURL}
                            alt="Project Image Preview"
                        />
                    </a>
                </div>
                <div className="w-3/4 flex flex-col gap-5">
                    <div className=" flex items-center justify-between">
                        <div className="text-lg text-heading font-semibold">
                            {title}
                        </div>

                        <div className="ml-5 text-text text-sm font-normal">
                            {date}
                        </div>
                    </div>
                    {displayNote()}
                    <div className="flex items-center gap-4 justify-left">
                        <a
                            href={githubLink}
                            target="_blank"
                            className="hover:scale-[1.008] transition ease-in-out"
                        >
                            <div className="flex gap-2 items-center text-text font-bold hover:text-accentText hover:border-accentText hover:bg-slate-700 border-[2px] p-1 rounded-md border-borderSubtle">
                                <FaGithub className="text-base" />
                                <span className="text-sm">Source Code</span>
                            </div>
                        </a>
                        <a
                            href={liveLink}
                            target="_blank"
                            className="hover:scale-[1.008] transition ease-in-out"
                        >
                            <div className="flex gap-2 items-center text-text font-bold hover:text-accentText hover:border-accentText hover:bg-slate-700 border-[2px] p-1 rounded-md border-borderSubtle">
                                <TbWorldCode className="text-lg" />
                                <span className="text-sm">Live Project</span>
                            </div>
                        </a>
                    </div>
                    <div className="flex flex-col gap-5 text-sm">
                        <div className="flex flex-col gap-1">
                            <div className="font-semibold ">Description</div>
                            <div className="border-l-2 border-borderSubtle ml-1 pl-2 ">
                                {description}
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="font-semibold ">Usage</div>
                            <div className="border-l-2 border-borderSubtle ml-1 pl-2 ">
                                {usage}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
