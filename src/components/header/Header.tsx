import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-gray-200 shadow-md sticky top-0 z-50">
      <Link to='/'>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center p-4 sm:p-8 transition duration-300 ease-in-out hover:text-purple-800">Can I go outside?</h1>
      </Link>
    </header>
  )
}