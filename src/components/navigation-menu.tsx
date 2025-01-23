import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const NavigationMenu = () => {
  return (
    <NavigationMenuPrimitive.Root className="relative z-10 flex w-full justify-center">
      <NavigationMenuPrimitive.List className="flex rounded-lg bg-white/50 dark:bg-black/50 p-2 space-x-2">
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Trigger className="group flex items-center gap-1 select-none rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
            Solutions
            <ChevronDownIcon
              className="relative top-[1px] transition-transform duration-200 group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </NavigationMenuPrimitive.Trigger>
          <NavigationMenuPrimitive.Content className="absolute left-0 top-0 w-full sm:w-auto">
            <div className="relative mt-2 grid gap-4 p-6 sm:w-[500px] bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="group rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <h3 className="text-sm font-medium">Farm Management</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Streamline your farm operations with smart tools</p>
                </div>
                <div className="group rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <h3 className="text-sm font-medium">Crop Analytics</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Data-driven insights for better yields</p>
                </div>
              </div>
            </div>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Link
            className="block select-none rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
            href="#features"
          >
            Features
          </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Link
            className="block select-none rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
            href="#pricing"
          >
            Pricing
          </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Indicator className="top-full z-[1] flex h-2 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-1 h-2 w-2 rotate-45 rounded-tl-sm bg-gray-800 dark:bg-gray-100" />
        </NavigationMenuPrimitive.Indicator>
      </NavigationMenuPrimitive.List>

      <NavigationMenuPrimitive.Viewport className="relative mt-2 overflow-hidden rounded-md bg-white dark:bg-gray-900 shadow-lg transition-[width,_height] duration-300" />
    </NavigationMenuPrimitive.Root>
  );
};

export default NavigationMenu;