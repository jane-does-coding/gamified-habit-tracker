"use client";
import Image from "next/image";
import { FaPerson } from "react-icons/fa6";
import { CiGrid41, CiBoxList } from "react-icons/ci";
import { useState } from "react";

export default function Home() {
	const [isListView, setIsListView] = useState(false);

	return (
		<div>
			<div className="flex flex-col bg-[#262627] min-h-screen">
				{/* Header */}
				<div className="flex flex-col md:flex-row justify-between items-start w-full mx-auto md:w-[93vw] mt-[3rem] md:mt-[2rem]">
					<div className="flex flex-col text-center md:text-left gap-[0rem]">
						<h1 className="text-[4.5rem] md:text-[8rem] leading-[5rem]  md:leading-[8rem] Flazie text-rose-300 glowing-text text-center md:text-left">
							Eclipso
						</h1>
						<p className="text-neutral-100 text-[1.5rem] md:text-[1.75rem] leading-[2rem] Absans text-center md:text-left">
							Eclipso {"-"} Align Your Habits, Unlock Your Potential.
						</p>
					</div>
					<div className="flex flex-col text-center md:text-left gap-[0rem]">
						<a
							href="/profile"
							className="text-neutral-200 flex gap-[6px] text-[1.5rem] items-center justify-center Absans transition-all pr-[0.5rem] hover:pr-0 hover:tracking-[0.25rem]"
						>
							<FaPerson size={26} />
							Profile
						</a>
					</div>
				</div>

				{/* Boxes */}
				<div className="flex w-[95vw] mx-auto h-[20vh] gap-[2px] mt-[2rem] rounded-md overflow-hidden">
					<div className="w-full bg-neutral-700 h-[20vh] flex flex-col items-center justify-center">
						<h1 className="text-[4vw] leading-[5vw] Baunk text-white">21</h1>
						<p className="text-[1.75vw] leading-[2vw] text-white Absans">
							Day Streak
						</p>
					</div>
					<div className="w-full bg-neutral-700 h-[20vh] flex flex-col items-center justify-center">
						<h1 className="text-[4vw] leading-[5vw] Baunk text-white">45</h1>
						<p className="text-[1.75vw] leading-[2vw] text-white Absans">
							Days Left
						</p>
					</div>
					<div className="w-full bg-neutral-700 h-[20vh]"></div>
					<div className="w-full bg-neutral-700 h-[20vh]"></div>
					<div className="w-full bg-neutral-700 h-[20vh]"></div>
				</div>
				{/* Filters */}
				<div className="flex flex-col md:flex-row justify-start items-start md:items-center w-[95vw] mx-auto gap-2 md:gap-6 mb- mt-8">
					<div className="w-full">
						<input
							type="text"
							placeholder="Search Articles..."
							className="bg-neutral-900/30 border-2 border-neutral-900/10 ring-neutral-800 focus:ring-neutral-800 text-white px-8 py-3 rounded-full outline-none w-full text-[1.25rem]"
						/>
					</div>

					<button className="bg-neutral-900/30 border-2 border-neutral-900/15 text-white px-6 py-3 rounded-full hidden md:flex">
						{isListView ? <CiGrid41 size={30} /> : <CiBoxList size={30} />}
					</button>
				</div>
				{/* Content */}
				<div className="grid grid-cols-5 gap-y-[2rem] w-[95vw] mx-auto gap-[2rem] mt-[2rem]">
					<div className="w-full bg-neutral-700 aspect-[1] rounded-md"></div>
					<div className="w-full bg-neutral-700 aspect-[1] rounded-md"></div>
					<div className="w-full bg-neutral-700 aspect-[1] rounded-md"></div>
					<div className="w-full bg-neutral-700 aspect-[1] rounded-md"></div>
					<div className="w-full bg-neutral-700 aspect-[1] rounded-md"></div>
					<div className="w-full bg-neutral-700 aspect-[1] rounded-md"></div>
					<div className="w-full bg-neutral-700 aspect-[1] rounded-md"></div>
					<div className="w-full bg-neutral-700 aspect-[1] rounded-md"></div>
				</div>
			</div>
		</div>
	);
}
