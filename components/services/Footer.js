import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { MailIcon } from "lucide-react";
import { PhoneIcon } from "lucide-react";
import LocationIcon from "../svgs/location";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold reverie">Jassica Photography</h3>
            <p className="text-neutral-400">
              Capturing life's beautiful moments with passion and artistry.
            </p>
            <div className="flex space-x-4">
              <Badge
                variant="outline"
                className="border-neutral-600 text-neutral-300"
              >
                <Instagram /> Instagram
              </Badge>
              <Badge
                variant="outline"
                className="border-neutral-600 text-neutral-300"
              >
                <Facebook /> Facebook
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <Link
                  href="#about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>Wedding Photography</li>
              <li>Portrait Sessions</li>
              <li>Event Photography</li>
              <li>Family Photography</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2 text-neutral-400">
              <p className="flex items-center gap-3">
                <MailIcon /> jassica@photography.com
              </p>
              <p className="flex items-center gap-3">
                <PhoneIcon /> (555) 123-4567
              </p>
              <p className="flex items-center gap-3">
                <LocationIcon color="white" /> New York, NY
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
          <p>&copy; 2024 Jassica Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
