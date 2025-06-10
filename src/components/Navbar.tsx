// Full file path should be: src/components/Navbar.tsx

// We're using 'use client' because we will add interactivity (like a mobile menu) later.
// This tells Next.js to render this component on the client-side.
'use client';

// Import the Link component from Next.js for client-side navigation.
// This is faster than a standard <a> tag because it doesn't require a full page reload.
import Link from 'next/link';

// Define the Navbar component.
const Navbar = () => {
  return (
    // <nav> is a semantic HTML tag for navigation sections.
    // The classes below are from Tailwind CSS for styling.
    // - bg-gray-900: Sets a dark background color.
    // - text-white: Sets the default text color to white.
    // - sticky: Makes the navbar stick to the top of the viewport.
    // - top-0: Positions the sticky navbar at the very top.
    // - z-50: Sets a high z-index to ensure the navbar is on top of other content.
    // - shadow-md: Adds a medium box shadow for a subtle depth effect.
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      {/* This div is the main container for the navbar content. */}
      {/* - max-w-7xl: Sets a maximum width for the container to prevent it from becoming too wide on large screens. */}
      {/* - mx-auto: Centers the container horizontally. */}
      {/* - px-4 sm:px-6 lg:px-8: Adds horizontal padding that adjusts for different screen sizes. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* This div uses flexbox to align the items in the navbar. */}
        {/* - flex: Applies the flexbox layout. */}
        {/* - items-center: Centers items vertically within the flex container. */}
        {/* - justify-between: Puts space between the logo on the left and the links on the right. */}
        {/* - h-16: Sets a fixed height of 16 units (4rem or 64px) for the navbar. */}
        <div className="flex items-center justify-between h-16">
          {/* ---- Left Side: Logo/Brand Name ---- */}
          <div className="flex-shrink-0">
            {/* We use the Link component to make the logo a link to the homepage. */}
            <Link href="/" className="text-2xl font-bold tracking-wider hover:text-cyan-400 transition-colors duration-300">
              Saran R.
            </Link>
          </div>

          {/* ---- Right Side: Navigation Links (for desktop) ---- */}
          {/* - hidden md:block: This is a crucial responsive utility. */}
          {/* It hides the navigation links on small screens (mobile) and shows them on medium screens (md) and larger. */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#experience" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                Experience
              </Link>
              <Link href="#projects" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                Projects
              </Link>
              <Link href="#skills" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                Skills
              </Link>
              <Link href="#contact" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>
          
           {/* ---- Mobile Menu Button (will be added in a future step) ---- */}
           {/* We'll leave a placeholder here for the mobile menu button for now. */}
           <div className="md:hidden">
             {/* Mobile menu button will go here */}
           </div>
        </div>
      </div>
    </nav>
  );
};

// Export the component so it can be used in other files.
export default Navbar;
