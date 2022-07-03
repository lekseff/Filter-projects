function ProjectItem(props) {
  const {img} = props
  return (
    <div className="portfolio__card">
      <img src={img} alt="card-images"/>
    </div>
  )
}

export default ProjectItem
