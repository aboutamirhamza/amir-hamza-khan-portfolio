import { motion } from "motion/react";
import { Github } from 'lucide-react';
import { SquareArrowOutUpRight } from 'lucide-react';

const OthersProjects = ({img, title, desc, tagone, tagtwo, tagthree, tagfour, tagfive}) => {
  return (
    <>
    <div>
        <div className="flex gap-4">
            <div className="w-64">
            <img src={img} alt="" />
            </div>
            <div className="flex flex-col gap-2 ">
            <div className="relative">
            <h3 className="font-inter text-primary text-2xl">{title}</h3>
            <p className="font-inter text-primary text-sm after:absolute after:w-full after:h-0.5 after:content after:-bottom-3 after:left-0 after:bg-gray-400">{desc}</p>
            </div>
            <div className="flex flex-col gap-4 mt-6">
            <p className="font-inter text-sm text-primary flex gap-4">
                <span>{tagone}</span>
                <span>{tagtwo}</span>
                <span>{tagthree}</span>
                <span>{tagfour}</span>
                <span>{tagfive}</span>
            </p>
            <p className="flex gap-4">
                <a href="#" className="hover:text-orange-600 hover:transition-colors"><Github /></a>
                <a href="#" className="hover:text-orange-600 hover:transition-colors"><SquareArrowOutUpRight /></a>
            </p>
        </div>
            </div>
            
        </div>
    </div>
    </>
  );
}

export default OthersProjects