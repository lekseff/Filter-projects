import Toolbar from './Toolbar'
import ProjectList from './ProjectList'
import projectsAll from '../js/projects'
import { useState } from 'react'

function Portfolio() {
  const filters = ["All", "Websites", "Flayers", "Business Cards"]
  const [selected, setSelected] = useState('All');
  
  const onSelectFilter = (name) => {
    setSelected(() => name)
  }

  const filterProjects = () => {
    if (selected === 'All') {
      return projectsAll.slice()      
    }
     return projectsAll.filter((item) => item.category === selected)
  }

  return (
    <div className="portfolio">
      <Toolbar 
        filters={filters}
        selected={selected}
        onSelectFilter={onSelectFilter}
      />
      <ProjectList projects={filterProjects()}/>
    </div>
  )
}

export default Portfolio