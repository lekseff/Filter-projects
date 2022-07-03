import {v4} from 'uuid'
import PropTypes from 'prop-types';
import SearchButton from './SearchButton'

function Toolbar(props) {
  const {filters, selected} = props

  const handleClick = (name) => {
    props.onSelectFilter(name)
  }
  
  const searchButtons = filters.map((name) => {
    return (
      <SearchButton
        key={v4()} 
        name={name}        
        selected={selected}
        onClick={handleClick}
      />
    )
  })

  return (
    <div className="toolbar">
      {searchButtons}
    </div>
  )
}

export default Toolbar

Toolbar.propTypes = {
  filters: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired
}
