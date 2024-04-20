"use client";
import React, { useState } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Link from "next/link";

const HeroSection = () => {
  return (
    <AuroraBackground>
      <div className="flex min-h-svh max-w-5xl flex-col justify-center gap-4 px-8 text-white  md:px-24 z-40">
        <h1 className="max-w-6xl font-serif text-2xl font-medium md:mr-4 md:text-4xl">
          Welcome to my{" "}
          <b className="font-black drop-shadow-[0px_0px_4px_#ffffff3f]">
            personal portfolio
          </b>
          , or as I like <br /> to call it, the{" "}
          <span>
            <i className="line-through font-black drop-shadow-[0px_0px_4px_#ffffff3f] text-red-500">
              work in progress
            </i>
          </span>
          <span className="filter-red relative -top-4 left-2 animate-pulse cursor-pointer select-none text-base mr-2">
            <span id="reward">💤 </span>
          </span>
          page!
        </h1>

        <section className="flex max-w-3xl flex-col justify-center gap-4 md:mt-8">
          <p className="text-[15px] font-[350] md:text-lg">
            <span className="mr-2 text-xs opacity-50" aria-hidden="true">
              &lt;p&gt;
            </span>
            As for me, I&apos;m <b>Bijeet Nath</b>, a software engineer, forever
            a student, and I&apos;m passionate about building and breaking
            things. I&apos;m always seeking to understand how and why things
            work.
            <span className="ml-2 text-xs opacity-50">&lt;/p&gt;</span>
          </p>

          <p className="text-[15px] font-[350] md:text-lg">
            <span className="mr-2 text-xs opacity-50" aria-hidden="true">
              &lt;p&gt;
            </span>
            Currently, I work as an Project Engineer at Wipro, I ensured the
            smooth operation of crucial business applications for Maxis
            Communication, including{" "}
            <b> APRU, BSRA, myKad, Kenan, among others.</b>
            This involves promptly addressing{" "}
            <b>
              {" "}
              code issues, meeting business requirements, and troubleshooting
              technical issues{" "}
            </b>{" "}
            in an L2 capacity for all SharePoint sites, as well as overseeing
            their servers.
            <span className="ml-2 text-xs opacity-50" aria-hidden="true">
              &lt;/p&gt;
            </span>
          </p>
        </section>

        <section className=" flex flex-row items-center gap-4 md:mt-8 md:gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-[0.6rem] md:text-sm italic opacity-50">
              More about me:
            </h2>
            <div className="flex flex-row items-center justify-start"></div>
            <div className="flex flex-row items-center justify-start">
              <a
                href="https://github.com/bbiijjeett"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 duration-150 first:pl-0 last:pr-0 hover:scale-125 hover:text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                </svg>
              </a>

              <a
                href="https://linkedin.com/in/bbiijjeett"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 duration-150 first:pl-0 last:pr-0 hover:scale-125 hover:text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                </svg>
              </a>
              <a
                href="mailto:bijeetnathbtech@gmail.com"
                title="Email"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 duration-150 first:pl-0 last:pr-0 hover:scale-125 hover:text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="h-12 border-l border-primary"></div>
          <div className="group flex flex-col gap-2">
            <a title="My webdev practices." href="/laboratory">
              <div className="relative z-50 flex items-center gap-3 duration-150 group-hover:scale-105 hover:text-red-500">
                <h2 className="max-w-4xl font-serif text-xl md:text-2xl font-medium">
                  lab·o·ra·to·ry
                </h2>
                ~
                <i className="underline opacity-50" aria-hidden="true">
                  My webdev practices
                </i>
              </div>
              <div className="pointer-events-none fixed inset-0 z-10 h-dvh w-screen bg-dark-900/10 opacity-0 backdrop-blur-md delay-75 duration-300 ease-out group-hover:opacity-100"></div>
            </a>
          </div>
        </section>
      </div>
    </AuroraBackground>
  );
};

export default HeroSection;
