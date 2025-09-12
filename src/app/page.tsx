import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Savitribai Phule
                  <span className="block text-blue-600">Mahila Nagari</span>
                  <span className="block text-green-600">Sahakari Patsansha</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Empowering women through cooperative banking and financial services in Shahapur. 
                  Building stronger communities through financial inclusion and women's empowerment.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-4">
                  <Link href="/membership">Become a Member</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-4">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">1000+</div>
                  <div className="text-sm text-gray-600">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">₹50L+</div>
                  <div className="text-sm text-gray-600">Loans Disbursed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">15+</div>
                  <div className="text-sm text-gray-600">Years of Service</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/32374ca5-bb94-48bd-b701-ce8ff4106656.png"
                  alt="Professional Indian women in cooperative banking setting with modern office environment"
                  className="rounded-2xl shadow-2xl w-full max-w-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
                  <div className="text-sm text-gray-600">Trusted by</div>
                  <div className="text-xl font-bold text-gray-900">Women Entrepreneurs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Financial Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive banking and financial solutions designed specifically for women's needs and empowerment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-blue-600 rounded"></div>
                </div>
                <CardTitle className="text-xl">Savings Account</CardTitle>
                <CardDescription>
                  Secure savings with competitive interest rates and easy access to funds
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• High interest rates</li>
                  <li>• No minimum balance</li>
                  <li>• Online banking</li>
                  <li>• Mobile app access</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-green-600 rounded"></div>
                </div>
                <CardTitle className="text-xl">Personal Loans</CardTitle>
                <CardDescription>
                  Quick and easy personal loans for your immediate financial needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Low interest rates</li>
                  <li>• Quick approval</li>
                  <li>• Flexible repayment</li>
                  <li>• Minimal documentation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-purple-600 rounded"></div>
                </div>
                <CardTitle className="text-xl">Business Loans</CardTitle>
                <CardDescription>
                  Support for women entrepreneurs to start and grow their businesses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Startup funding</li>
                  <li>• Working capital</li>
                  <li>• Equipment loans</li>
                  <li>• Business guidance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-orange-600 rounded"></div>
                </div>
                <CardTitle className="text-xl">Fixed Deposits</CardTitle>
                <CardDescription>
                  Secure investment options with guaranteed returns for financial growth
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Guaranteed returns</li>
                  <li>• Flexible terms</li>
                  <li>• Premature withdrawal</li>
                  <li>• Tax benefits</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-indigo-600 rounded"></div>
                </div>
                <CardTitle className="text-xl">Education Loans</CardTitle>
                <CardDescription>
                  Supporting education and skill development for women and their families
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Student-friendly rates</li>
                  <li>• Moratorium period</li>
                  <li>• Course flexibility</li>
                  <li>• Easy documentation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-teal-600 rounded"></div>
                </div>
                <CardTitle className="text-xl">Insurance Services</CardTitle>
                <CardDescription>
                  Comprehensive insurance coverage to protect you and your family
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Life insurance</li>
                  <li>• Health insurance</li>
                  <li>• Property insurance</li>
                  <li>• Group policies</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f327da29-ed47-480c-93d0-5a8de85c95d2.png"
                alt="Modern cooperative bank interior with women customers and staff in professional setting"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Savitribai Phule Mahila Nagari Sahakari Patsansha?
                </h2>
                <p className="text-lg text-gray-600">
                  We are committed to women's financial empowerment through cooperative banking principles
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Women-Centric Approach</h3>
                    <p className="text-gray-600">Designed specifically for women's financial needs and empowerment</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Community Focus</h3>
                    <p className="text-gray-600">Building stronger communities through cooperative banking principles</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Competitive Rates</h3>
                    <p className="text-gray-600">Best-in-class interest rates on deposits and competitive loan rates</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Quick Service</h3>
                    <p className="text-gray-600">Fast approval processes and minimal documentation requirements</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button asChild size="lg">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Join Our Financial Family?
            </h2>
            <p className="text-xl text-blue-100">
              Become a member today and start your journey towards financial empowerment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
                <Link href="/membership">Become a Member</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-blue-600">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}