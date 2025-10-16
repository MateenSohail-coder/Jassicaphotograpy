"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MailIcon from "../svgs/email";
import PhoneIcon from "../svgs/phone";
import LocationIcon from "../svgs/location";

export default function Contact() {
  const [message, setmessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setmessage("Form submitted successfully");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setTimeout(() => {
      setmessage("");
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-white to-neutral-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl rangile md:text-5xl font-bold text-neutral-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Ready to capture your special moments? Let's discuss your
            photography needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="">
                    {" "}
                    <MailIcon />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-neutral-600">
                      jassica@photography.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="">
                    <PhoneIcon />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-neutral-600">(555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="">
                    <LocationIcon />
                  </div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-neutral-600">New York, NY</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle>Why Choose Me?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-neutral-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Professional experience with over 500 satisfied clients
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-neutral-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    High-quality, edited images delivered quickly
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-neutral-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Flexible packages to fit your budget and needs
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-neutral-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Passionate about creating memories that last forever
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
                    >
                      <option value="">Select a service</option>
                      <option value="wedding">Wedding Photography</option>
                      <option value="portrait">Portrait Session</option>
                      <option value="event">Event Photography</option>
                      <option value="family">Family Photography</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
                    placeholder="Tell me about your photography needs..."
                  ></textarea>
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
                <div
                  className={`
    text-center 
    rounded-2xl 
    text-green-800 
    border-green-800 
    border-2 
    bg-green-400/20 
    px-2 
    py-2 
    ${message ? "block" : "hidden"}
  `}
                >
                  {message}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
