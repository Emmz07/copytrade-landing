

"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import { CiGlobe } from "react-icons/ci"; 


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-9 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className=" flex items-center">
              <Link href="/" className="text-5xl font-semibold text-black">exness</Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900">
                      Trading <ChevronDown className="ml-1 h-4 w-4" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild> 
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-yellow-400 to-yellow-600 p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <div className="mt-4 text-lg font-medium text-white">
                                Start Trading Now
                              </div>
                              <p className="text-sm leading-tight text-white/90">
                                Open an account and begin your trading journey.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <ListItem href="/forex" title="Forex">
                          Trade major, minor, and exotic currency pairs
                        </ListItem>
                        <ListItem href="/stocks" title="Stocks">
                          Access global stock markets
                        </ListItem>
                        <ListItem href="/commodities" title="Commodities">
                          Trade gold, oil, and other commodities
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900">
                      About <ChevronDown className="ml-1 h-4 w-4" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                        <ListItem href="/about" title="About Exness">
                          Learn about our company and mission
                        </ListItem>
                        <ListItem href="/careers" title="Careers">
                          Join our team and grow with us
                        </ListItem>
                        <ListItem href="/contact" title="Contact Us">
                          Get in touch with our support team
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button className="mr-2 bg-yellow-400">Register</Button>
            <Button>Sign In</Button>
          <div className='ml-9 flex text-xl font-semibold' >
            <CiGlobe className='text-2xl font-bold mr-2' />
            EN
          </div>
          </div>
          
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Trading</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About</a>
          </div>
          <div className="pt-4 pb-3  border-t border-gray-200">
            <div className="flex items-center  px-4">
              <Button className="mr-2  w-full">Register</Button>
              <Button className="w-full bg-yellow-400">Sign In</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

const ListItem = ({ className, title, children, ...props }: React.ComponentPropsWithoutRef<"a"> & { title: string }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}

export default Navbar