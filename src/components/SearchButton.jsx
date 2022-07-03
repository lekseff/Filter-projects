function SearchButton(props) {
  const {name, selected} = props;
  const isSelected = (name === selected) ? 'selected' : ''
  return (
    <button 
      className={`toolbar__button ${isSelected}`}
      onClick={() => props.onClick(name)}
    >
      {name}
    </button>
  )
}

export default SearchButton
