import {v4} from 'uuid';
import ProjectItem from './ProjectItem'

function ProjectList(props) {
  const {projects} = props
  const filtered = projects.map((project) => <ProjectItem img={project.img} key={v4()} />)

  return (
    <div className="projectList">
      {filtered}
    </div>
    
  )
}

export default ProjectList
