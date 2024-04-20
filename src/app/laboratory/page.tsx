"use client";
import React, { useEffect, useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import projectData from "../../data/project.json";

interface Project {
  id: number;
  title: string;
  description: string;
  live: string;
  code: string;
  image: string;
}

const loadingStates = [
  {
    text: "Buying a condo",
  },
  {
    text: "Travelling in a flight",
  },
  {
    text: "Meeting Tyler Durden",
  },
  {
    text: "He makes soap",
  },
  {
    text: "We goto a bar",
  },
  {
    text: "Start a fight",
  },
  {
    text: "We like it",
  },
  {
    text: "Welcome to F**** C***",
  },
];

const developerLifeEvents = [
  {
    text: "Surviving an encounter with a legacy code monster",
  },
  {
    text: "Discovering that 'it works on my machine' doesn't count as deployment",
  },
  {
    text: "Participating in an epic battle against a pesky bug army",
  },
  {
    text: "Embarking on a quest to find the elusive missing semicolon",
  },
  {
    text: "Attending a tech conference and secretly judging everyone's choice of IDE",
  },
  {
    text: "Learning a new buzzword and using it excessively in conversations",
  },
  {
    text: "Celebrating a successful merge without conflicts",
  },
  {
    text: "Pretending to understand Docker while secretly Googling every command",
  },
];

const lifeOfADeveloper = [
  {
    text: "Debugging: the art of fixing things until they work or you lose your mind",
  },
  {
    text: "Pushing code like a boss and praying the build doesn't break",
  },
  {
    text: "Getting coffee: the fuel for coding adventures",
  },
  {
    text: "Making peace with stack overflow as your co-worker",
  },
  {
    text: "Attending meetings to discuss why you're not coding",
  },
  {
    text: "Dreaming in code and waking up to syntax errors",
  },
];

const Page = () => {
  const projects = projectData.projects;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 12000);
  }, []);

  return loading ? (
    <div className="w-full min-h-screen  flex items-center justify-center">
      <Loader
        loadingStates={lifeOfADeveloper}
        loading={loading}
        duration={2000}
      />
    </div>
  ) : (
    <div className="h-auto w-full dark:bg-[#4b4a49] bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <TracingBeam className="px-6 mt-32">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          <p className="text-white text-2xl font-semibold ml-5">
            In development
          </p>
          {projects.map((project: Project) => (
            <CardContainer key={project.id} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {project.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={project.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.code}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Code →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    <Link href={project.live}>Live</Link>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
};

export default Page;
