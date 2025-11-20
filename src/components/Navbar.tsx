"use client";

import * as React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <div className="w-full bg-background border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-start gap-8">
        <Link to="/" className="text-2xl font-bold text-primary-foreground">
          Run to the Sky
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="justify-start">
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Accueil
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/la-serie">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  La série Run to the Sky
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/calendrier">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Le calendrier des courses
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/prepare-ta-course">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Prépare ta course
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}