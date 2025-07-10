import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='bg-white shadow-md'>
        <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
            <h1 className='text-xl font-bold '>YesBuy</h1>
            <nav>
                <ul className='flex space-x-4'>
                    <Link to={'/'}>
                        <li className='hover:text-gray-400'>Home</li>
                    </Link>
                    <li className='hover:text-gray-400'>Products</li>
                    <li className='hover:text-gray-400'>About</li>
                </ul>
            </nav>
            <div className='flex items-center space-x-2'>
                <ShoppingCart size={24}/>
                <span className='text-lg'>Cart</span>
            </div>
        </div>
    </header>
  )
}

export default Header