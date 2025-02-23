import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import image from "@/assets/HeroImage/HeroImg.jpg";
import ProjectModal from "./ui/ProjectModal";

const projects = [
  {
    title: "Task Management Website Design",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-48nFkLR31X371CZOmRM6JzqHnmwBSS.png",
    tags: ["SaaS", "Template"],
    link: "#",
  },
  {
    title: "Real Estate Website Design",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-48nFkLR31X371CZOmRM6JzqHnmwBSS.png",
    tags: ["Real Estate", "Property", "Template"],
    link: "#",
  },
  {
    title: "AI Business Solution Website",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-48nFkLR31X371CZOmRM6JzqHnmwBSS.png",
    tags: ["AI", "Template"],
    link: "#",
  },
  {
    title: "Travel Website Design",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-48nFkLR31X371CZOmRM6JzqHnmwBSS.png",
    tags: ["Travel", "Template"],
    link: "#",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.5 });

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="md:px-4 mb-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="flex justify-center mx-auto mt-24"
          >
            <h1 className="px-5 py-3 text-primary border border-[#404138]/50 bg-secondary font-urbanist rounded-full text-sm tracking-wide font-thin">
              Our Projects
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-7 mb-12"
          >
            <p className="text-center text-[#CCCCCC] font-urbanist text-xl md:text-3xl lg:text-4xl max-w-xl">
              Seamless digital experiences
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 * index, duration: 0.8, ease: "easeOut" }}
            >
              <Card
                className="group overflow-hidden border-0 bg-transparent"
                onClick={() => openModal(project)}
              >
                <CardContent className="p-0 flex flex-col h-full">
                  {/* Image Wrapper */}
                  <motion.div
                    className="relative overflow-hidden border-2 border-primary/15 rounded-lg"
                  >
                    <motion.img
                      src={image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full transform transition-transform duration-300"
                    />
                  </motion.div>

                  {/* Content Wrapper with Flexbox */}
                  <div className="py-5 px-1 flex flex-col flex-grow justify-between">
                    {/* Tags and Button */}
                    <div className="flex flex-wrap gap-2 items-center mb-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="px-6 py-1 text-primary border h-fit border-[#404138]/50 bg-secondary font-urbanist rounded-full text-sm tracking-wide hover:bg-secondary font-thin"
                        >
                          {tag}
                        </Badge>
                      ))}
                      <Button
                        variant="link"
                        className="ml-auto text-slate-300 hover:text-white"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          Visit Website
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>

                    {/* Title at the Bottom */}
                    <h3 className="text-xl font-semibold text-white mt-auto ml-1">
                      {project.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
      )}
    </motion.section>
  );
}
