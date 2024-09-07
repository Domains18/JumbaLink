import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { BarChart2, Building2, Check, Key, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function RealEstateSaasLandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center justify-center">
                <div className="w-full max-w-6xl flex justify-between items-center">
                    <Link className="flex items-center justify-center" href="#">
                        <Building2 className="h-6 w-6 text-primary" />
                        <span className="ml-2 text-lg font-bold">JumbaLink</span>
                    </Link>
                    <nav className="flex gap-4 sm:gap-6">
                        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                            Features
                        </Link>
                        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                            Pricing
                        </Link>
                        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                            About
                        </Link>
                        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                            Contact
                        </Link>
                    </nav>
                </div>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
                    <div className="container px-4 md:px-6 mx-auto max-w-6xl">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                            <div className="flex flex-col justify-center space-y-4 text-white">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Revolutionize Your Real Estate Management
                                    </h1>
                                    <p className="max-w-[600px] text-gray-200 md:text-xl">
                                        JumbaLink: The all-in-one solution for property managers and real estate
                                        professionals.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Button className="bg-white text-primary hover:bg-gray-100">
                                        Start Free Trial
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="text-black border-white hover:bg-white hover:text-primary"
                                    >
                                        Schedule Demo
                                    </Button>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <Image
                                    alt="JumbaLink dashboard"
                                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                                    height="300"
                                    src="/dashboard.png?height=300&width=400"
                                    width="400"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                            Key Features
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <Key className="w-12 h-12 text-primary mb-4" />
                                    <CardTitle>Property Management</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>Effortlessly manage all your properties in one centralized dashboard.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <BarChart2 className="w-12 h-12 text-primary mb-4" />
                                    <CardTitle>Financial Tracking</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>Track rent payments, expenses, and generate comprehensive financial reports.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Users className="w-12 h-12 text-primary mb-4" />
                                    <CardTitle>Tenant Portal</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>Provide a seamless experience for tenants with our user-friendly portal.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
                    <div className="container px-4 md:px-6 mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                            Pricing Plans
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    name: 'Starter',
                                    price: '$49',
                                    features: ['Up to 50 properties', 'Basic reporting', 'Email support'],
                                },
                                {
                                    name: 'Professional',
                                    price: '$99',
                                    features: ['Up to 200 properties', 'Advanced reporting', '24/7 phone support'],
                                },
                                {
                                    name: 'Enterprise',
                                    price: 'Custom',
                                    features: [
                                        'Unlimited properties',
                                        'Custom integrations',
                                        'Dedicated account manager',
                                    ],
                                },
                            ].map((plan) => (
                                <Card key={plan.name} className="flex flex-col">
                                    <CardHeader>
                                        <CardTitle>{plan.name}</CardTitle>
                                        <CardDescription>
                                            <span className="text-3xl font-bold">{plan.price}</span>
                                            {plan.price !== 'Custom' && (
                                                <span className="text-sm font-normal">/month</span>
                                            )}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <ul className="space-y-2">
                                            {plan.features.map((feature) => (
                                                <li key={feature} className="flex items-center">
                                                    <Check className="w-5 h-5 text-primary mr-2" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardContent>
                                        <Button className="w-full">
                                            {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
                {/* <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                            What Our Clients Say
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    name: 'Sarah Johnson',
                                    role: 'Property Manager',
                                    quote: "JumbaLink has streamlined our entire operation. We've saved countless hours on administrative tasks.",
                                },
                                {
                                    name: 'Michael Chen',
                                    role: 'Real Estate Investor',
                                    quote: "The financial tracking features have given me unprecedented insights into my portfolio's performance.",
                                },
                                {
                                    name: 'Emily Rodriguez',
                                    role: 'Leasing Agent',
                                    quote: 'The tenant portal has dramatically improved our communication and reduced late payments.',
                                },
                            ].map((testimonial, i) => (
                                <Card key={i}>
                                    <CardContent className="pt-8">
                                        <div className="flex items-center space-x-4 mb-4">
                                            <Image
                                                alt={testimonial.name}
                                                className="rounded-full"
                                                height="60"
                                                src={`/placeholder.svg?height=60&width=60`}
                                                style={{
                                                    aspectRatio: '60/60',
                                                    objectFit: 'cover',
                                                }}
                                                width="60"
                                            />
                                            <div>
                                                <p className="font-semibold">{testimonial.name}</p>
                                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600">"{testimonial.quote}"</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section> */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
                    <div className="container px-4 md:px-6 mx-auto max-w-6xl">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Ready to Transform Your Property Management?
                            </h2>
                            <p className="max-w-[600px] text-gray-200 md:text-xl">
                                Join thousands of satisfied real estate professionals. Start your free trial today.
                            </p>
                            <div className="w-full max-w-sm space-y-2">
                                <form className="flex space-x-2">
                                    <Input
                                        className="max-w-lg flex-1 bg-white text-gray-900"
                                        placeholder="Enter your email"
                                        type="email"
                                    />
                                    <Button className="bg-white text-primary hover:bg-gray-100" type="submit">
                                        Get Started
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="w-full py-6 bg-gray-100">
                <div className="container px-4 md:px-6 mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-xs text-gray-500">© 2023 JumbaLink. All rights reserved.</p>
                    <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
                        <Link className="text-xs hover:underline underline-offset-4" href="#">
                            Terms of Service
                        </Link>
                        <Link className="text-xs hover:underline underline-offset-4" href="#">
                            Privacy Policy
                        </Link>
                    </nav>
                </div>
            </footer>
        </div>
    );
}
