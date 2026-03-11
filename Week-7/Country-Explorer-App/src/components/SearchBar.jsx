import { useEffect, useRef } from "react"

function SearchBar({ onSearch }) {

  const inputRef = useRef(null)
  const timerRef = useRef(null)

  useEffect(()=>{
    inputRef.current.focus()
  },[])

  const handleChange = (e) => {

    clearTimeout(timerRef.current)

    timerRef.current = setTimeout(()=>{
      onSearch(e.target.value)
    },500)

  }

  return (
    <div>

      <input
        ref={inputRef}
        type="text"
        placeholder="Search country..."
        onChange={handleChange}
      />

    </div>
  )
}

export default SearchBar
