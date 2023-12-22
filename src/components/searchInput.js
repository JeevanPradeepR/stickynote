function SearchInput({searchDisplay}) {
    return (
        <input onChange={(e)=>searchDisplay(e.target.value)}
        placeholder="search" type="search" className='searchbox'/>
    )
}
export default SearchInput;