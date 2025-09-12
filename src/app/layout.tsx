import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Savitribai Phule Mahila Nagari Sahakari Patsansha Shahapur",
  description: "Women's Urban Cooperative Credit Society providing financial services, loans, savings, and support for women entrepreneurs in Shahapur",
  keywords: "cooperative bank, women's bank, loans, savings, Shahapur, financial services, women empowerment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">SP</span>
                  </div>
                  <div className="hidden md:block">
                    <h1 className="text-lg font-bold text-gray-900">
                      Savitribai Phule Mahila
                    </h1>
                    <p className="text-xs text-gray-600">Nagari Sahakari Patsansha</p>
                  </div>
                </Link>
              </div>

              <NavigationMenu className="hidden md:flex">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        About Us
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Financial Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[400px]">
                        <Link href="/services" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">All Services</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Complete range of financial services
                          </p>
                        </Link>
                        <Link href="/loans" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Loans</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Personal, business, and education loans
                          </p>
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/membership" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        Membership
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        Contact
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <div className="flex items-center space-x-2">
                <Button asChild className="hidden sm:inline-flex">
                  <Link href="/membership">Become a Member</Link>
                </Button>
                <Button variant="outline" size="sm" className="md:hidden">
                  Menu
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="border-t bg-gray-50">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">SP</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Savitribai Phule</h3>
                    <p className="text-xs text-gray-600">Mahila Nagari Sahakari</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Empowering women through financial inclusion and cooperative banking services in Shahapur.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
                  <li><Link href="/services" className="text-gray-600 hover:text-gray-900">Services</Link></li>
                  <li><Link href="/loans" className="text-gray-600 hover:text-gray-900">Loans</Link></li>
                  <li><Link href="/membership" className="text-gray-600 hover:text-gray-900">Membership</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
                <ul className="space-y-2 text-sm">
                  <li><span className="text-gray-600">Savings Account</span></li>
                  <li><span className="text-gray-600">Fixed Deposits</span></li>
                  <li><span className="text-gray-600">Personal Loans</span></li>
                  <li><span className="text-gray-600">Business Loans</span></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Contact Info</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Shahapur, Maharashtra</p>
                  <p>Phone: +91 XXXXX XXXXX</p>
                  <p>Email: info@spmnsps.com</p>
                  <p>Hours: Mon-Fri 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
              <p>&copy; 2024 Savitribai Phule Mahila Nagari Sahakari Patsansha Shahapur. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}