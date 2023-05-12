import { projects } from "../../data/data";
import ProjectBox from "../utilities/boxes/ProjectBox";

function WorksScreen() {
  return (
    <>
      <div className="bg-white rounded-3xl p-box min-h-[100px] flex flex-col justify-center items-center shadow-md">
        <h1 className="text-center text-[45px]">MY TOP PROJECTS</h1>
        <p className="mt-[10px] text-gray400 text-center">
          Here are one of my greatest projects of all time, feel free to see it
          below.
        </p>
      </div>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 mt-20">
        {projects.map((project) => (
          <ProjectBox
            image={project.image}
            title={project.title}
            subtitle={project.description}
            link={project.livePreview}
          />
        ))}
      </div>
    </>
  );
}

export default WorksScreen;
