import Input from '../atoms/Input'
import Button from '../atoms/Button'


interface SearchBarProps {
  startIcon?: boolean
}

function SearchBar({ startIcon = true }: SearchBarProps) {
  return (
    <div className="flex items-center gap-3 max-w-md w-full">
      <Input startIcon={startIcon} />
      <Button 
        buttonText='Search'
      />
    </div>
  )
}

export default SearchBar