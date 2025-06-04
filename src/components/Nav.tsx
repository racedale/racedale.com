import { Link } from '@tanstack/react-router';

export default function Nav({}) {
  return (
    <nav className="min-w-full">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex shrink-0 items-center">
            <Link to="/">
              <img
                className="h-8 w-auto px-2 dark:invert"
                src="/favicon.ico"
                alt="Simple race car logo"
              />
            </Link>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4"></div>
            </div>
          </div>
          {/* <span className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center text-3xl font-bold">
            Dale Race
          </span> */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <Link
                to="/"
                activeProps={{
                  className: 'active',
                }}
              >
                Home
              </Link>
              {/* <NavLink
                activeProps={{
                  className: 'active',
                }}
                to="/blog"
              >
                Blog
              </NavLink> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
