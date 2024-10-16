import { useState } from "react";
import toast, { Toaster } from "react-hot-toast"; // Import toast and Toaster
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/common/Card";
import { Input } from "@/components/common/Input";
import { Textarea } from "@/components/common/Textarea";
import { Button } from "@/components/common/Button";

import {
  Mail,
  Phone,
  MapPin,
  Loader2,
  Heart,
  Users,
  Calendar,
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success(
        "Thank you for reaching out! Together, we can make a difference.",
      );
      resetFormData();
    } catch (error) {
      toast.error(
        "We apologize, there was an error sending your message. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const resetFormData = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  const impactStats = [
    {
      icon: Users,
      label: "People Helped",
      value: "10,000+",
      color: "text-indigo-600",
    },
    {
      icon: Calendar,
      label: "Years Active",
      value: "15+",
      color: "text-purple-600",
    },
    { icon: Heart, label: "Volunteers", value: "500+", color: "text-pink-600" },
  ];

  return (
    <div className="bg-gradient-to-b from-[#bccaff3d] to-blue-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <Toaster /> {/* Add Toaster component for notifications */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold  mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl  max-w-2xl mx-auto">
            Your message can help create change. Whether you have questions,
            feedback, or need support, feel free to reach out to us using the
            contact form below or through the contact details provided.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="shadow-xl border-blue-100 bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">
                Get in Touch
              </CardTitle>
              <CardDescription>
                Share your thoughts, questions, or how you&apos;d like to
                contribute.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-blue-800"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-5 w-5 text-blue-500" />
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-blue-800"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-blue-500" />
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-blue-800"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us how you'd like to get involved..."
                    value={formData.message}
                    onChange={handleChange}
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-xl border-blue-100 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">
                  Our Impact
                </CardTitle>
                <CardDescription>
                  Together, we&apos;re making a difference
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {impactStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="flex items-center space-x-4">
                        <div className={`bg-${stat.color} p-3 rounded-full`}>
                          <Icon className={`h-6 w-6 ${stat.color}`} />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-900">
                            {stat.value}
                          </div>
                          <div className="text-blue-700">{stat.label}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-blue-100 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">
                  Contact Details{" "}
                </CardTitle>
                <CardDescription>
                  Reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900">
                        Our Location
                      </h3>
                      <p className="text-blue-700">
                        1234 Elm Street, Suite 567
                      </p>
                      <p className="text-blue-700">Cityville, ST 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900">Phone</h3>
                      <p className="text-blue-700">(123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900">Email</h3>
                      <a
                        href="mailto:info@sevaarth.org"
                        className="text-blue-600 hover:underline"
                      >
                        info@sevaarth.org
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
