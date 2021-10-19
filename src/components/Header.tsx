import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-gray-100 shadow-md sticky top-0 z-50">
      <Link to='/'>
        <h1 className="text-4xl md:text-5xl text-center capitalize p-4 md:p-6 transition duration-300 ease-in-out hover:text-purple-800">Can I go outside?</h1>
      </Link>
    </header>
  )
}