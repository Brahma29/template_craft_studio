"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Header = () => {
  return (
    <NavigationMenu className="flex justify-between p-6 max-w-[1440px] mx-auto">
      <NavigationMenuList className="gap-2">
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink asChild>
              <a href="/">
                <Image
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='43' height='38' fill='none' fill-rule='evenodd'%3E%3Cpath d='M35.5 15.998A7.5 7.5 0 0 0 43 8.499a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 7.5 7.499z' fill='%232d68f8'/%3E%3Cpath d='M36 19.953l-1 .045A11 11 0 0 1 24 8.999c0-2.007.538-3.889 1.477-5.509l-4.323-2.352a6.6 6.6 0 0 0-6.307 0l-11.4 6.201A6.6 6.6 0 0 0 0 13.137v11.736a6.6 6.6 0 0 0 3.446 5.798l11.4 6.201a6.6 6.6 0 0 0 6.307 0l11.4-6.201A6.6 6.6 0 0 0 36 24.873v-4.92z' fill='%23f8f8f8'/%3E%3C/svg%3E"
                  alt="logo"
                  width={40}
                  height={40}
                />
              </a>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                    href="/"
                  >
                    <Image
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='43' height='38' fill='none' fill-rule='evenodd'%3E%3Cpath d='M35.5 15.998A7.5 7.5 0 0 0 43 8.499a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 7.5 7.499z' fill='%232d68f8'/%3E%3Cpath d='M36 19.953l-1 .045A11 11 0 0 1 24 8.999c0-2.007.538-3.889 1.477-5.509l-4.323-2.352a6.6 6.6 0 0 0-6.307 0l-11.4 6.201A6.6 6.6 0 0 0 0 13.137v11.736a6.6 6.6 0 0 0 3.446 5.798l11.4 6.201a6.6 6.6 0 0 0 6.307 0l11.4-6.201A6.6 6.6 0 0 0 36 24.873v-4.92z' fill='%23f8f8f8'/%3E%3C/svg%3E"
                      alt="logo"
                      width={80}
                      height={80}
                    />
                    <div className="mt-4 mb-2 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/all-access" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              All-Access
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/studio" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Studio
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/become-an-author" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Become an author
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuList className="gap-2">
        <NavigationMenuItem>
          <Link href="/join-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Join us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/sign-in" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Sign in
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none leading-none no-underline outline-none transition-colors hover:text-accent-foreground focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default Header;
