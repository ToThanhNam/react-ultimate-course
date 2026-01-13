import buttonStyle from './button.module.css';

interface ButtonProps {
  buttonText?: string,
  variant?: 'primary' | 'danger' | 'outline',
  onClick?: () => void
}

// stateless/presentation component
function Button({ 
  buttonText = 'Default Text', 
  variant = 'primary',
  onClick   
}: ButtonProps) {

  const variantClassess: any = {
    primary: 'text-white bg-indigo-500',
    danger: 'text-white bg-red-600',
    outline: 'border border-gray-300 bg-white text-gray-600 font-medium hover:bg-gray-100 active:scale-95 transition'
  }

  const moduleStyle = buttonStyle['button-primary']

  return (
    <button 
      type="submit" 
      className={`cursor-pointer w-32 h-[46px] rounded-md text-sm ${variantClassess[variant]} ${moduleStyle}`}
      onClick={onClick}
    >{buttonText}</button>
  )
}

export default Button