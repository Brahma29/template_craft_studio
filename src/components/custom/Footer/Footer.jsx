"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between p-6 py-20 bg-gray-900">
      <a href="/">
        <Image
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='43' height='38' fill='none' fill-rule='evenodd'%3E%3Cpath d='M35.5 15.998A7.5 7.5 0 0 0 43 8.499a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 7.5 7.499z' fill='%232d68f8'/%3E%3Cpath d='M36 19.953l-1 .045A11 11 0 0 1 24 8.999c0-2.007.538-3.889 1.477-5.509l-4.323-2.352a6.6 6.6 0 0 0-6.307 0l-11.4 6.201A6.6 6.6 0 0 0 0 13.137v11.736a6.6 6.6 0 0 0 3.446 5.798l11.4 6.201a6.6 6.6 0 0 0 6.307 0l11.4-6.201A6.6 6.6 0 0 0 36 24.873v-4.92z' fill='%23f8f8f8'/%3E%3C/svg%3E"
          alt="logo"
          width={40}
          height={40}
        />
      </a>
      <div>
        <span className="text-lg">Browse</span>
        <div className="grid grid-cols-3 mt-4 text-sm gap-x-4 gap-y-3 ">
          <Link
            href="/"
            className="transition-opacity opacity-70 hover:opacity-100"
          >
            Featured Products
          </Link>
          <Link
            href="/"
            className="transition-opacity opacity-70 hover:opacity-100"
          >
            UI Kits
          </Link>
          <Link
            href="/"
            className="transition-opacity opacity-70 hover:opacity-100"
          >
            Coded Templated
          </Link>
          <Link
            href="/"
            className="transition-opacity opacity-70 hover:opacity-100"
          >
            Wireframe Kits
          </Link>

          <Link
            href="/"
            className="transition-opacity opacity-70 hover:opacity-100"
          >
            Fonts
          </Link>
          <Link
            href="/"
            className="transition-opacity opacity-70 hover:opacity-100"
          >
            Presentation
          </Link>
          <Link
            href="/"
            className="transition-opacity opacity-70 hover:opacity-100"
          >
            Mockups
          </Link>
          <Link
            href="/"
            className="transition-opacity opacity-70 hover:opacity-100"
          >
            3D Assets
          </Link>

          <Link
            href="/"
            className="transition-opacity opacity-70 hover:opacity-100"
          >
            Themes & Templates
          </Link>
          <Link
            href="/"
            className="transition-opacity opacity-70 hover:opacity-100"
          >
            For Figma
          </Link>
          <Link
            href="/"
            className="transition-opacity opacity-70 hover:opacity-100"
          >
            For Sketch
          </Link>
          <Link
            href="/"
            className="transition-opacity opacity-70 hover:opacity-100"
          >
            For Lunacy
          </Link>
        </div>
      </div>

      <div>
        <span className="text-lg">Platform</span>
        <div className="flex flex-col gap-3 mt-4 text-sm">
          <Link
            href="/"
            className="transition-opacity opacity-70 hover:opacity-100"
          >
            Featured Products
          </Link>
          <Link
            href="/"
            className="transition-opacity opacity-70 hover:opacity-100"
          >
            UI Kits
          </Link>
          <Link
            href="/"
            className="transition-opacity opacity-70 hover:opacity-100"
          >
            Coded Templated
          </Link>
          <Link
            href="/"
            className="transition-opacity opacity-70 hover:opacity-100"
          >
            Wireframe Kits
          </Link>
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          className="mt-4"
          placeholder="designer@example.com"
        />
        <Button className="w-full mt-4">Subscribe</Button>
      </div>
    </div>
  );
};

export default Footer;
