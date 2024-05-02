import React from "react";
import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../resources/data/portfolioData";
import ScrollToTop from "../components/ScrollToTop";

const Portfolio = () => {
    return (
        <>
            <ScrollToTop />
            <div className="relative min-h-screen">
                <Nav />
                <div className="animate-load_content">
                    <div className="max-w-screen-xl mx-auto font-inter p-3 pt-20">
                        <h1 className="text-5xl font-bold text-heading py-2 text-center">
                            Portfolio
                        </h1>
                        <div className="flex justify-center">
                            <div className="text-text text-base text-center mb-20 mt-5 w-[500px]">
                                These projects were developed for learning and
                                skill development, covering various areas such
                                as coding challenges and creative pursuits.
                            </div>
                        </div>
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                githubLink={project.githubLink}
                                date={project.date}
                                imageURL={project.imageURL}
                                usage={project.usage}
                                liveLink={project.liveLink}
                                note={project.note}
                            />
                        ))}
                    </div>
                    {/* <Footer /> */}
                </div>
            </div>
        </>
    );
};

export default Portfolio;
