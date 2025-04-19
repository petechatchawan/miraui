export const ButtonTheme = {
  base: [
   "z-0",
    "group",
    "relative",
    "inline-flex",
    "items-center",
    "justify-center",
    "box-border",
    "appearance-none",
    "outline-none",
    "select-none",
    "whitespace-nowrap",
    "min-w-20",
    "font-normal",
    "subpixel-antialiased",
    "overflow-hidden",
    "tap-highlight-transparent",
    "transform-gpu data-[pressed=true]:scale-[0.97]",

    "font-normal",
    "subpixel-antialiased",
    "overflow-hidden",
    "tap-highlight-transparent",
    "transform-gpu",
    "transition",
    "duration-150",
    "ease-in-out",
    "data-[pressed=true]:scale-95",
    "data-[hover=true]:brightness-105",
    "data-[focus=true]:ring-2",
    "data-[loading=true]:opacity-50",
  ],

  size: {
    sm: ["px-3", "min-w-16", "h-8", "text-xs", "gap-2", "rounded-sm"],
    md: ["px-4", "min-w-20", "h-10", "text-sm", "gap-2", "rounded-md"],
    lg: ["px-6", "min-w-24", "h-12", "text-base", "gap-3", "rounded-lg"],
  },


  radius: {
    none: ["!rounded-none"],
    sm: ["!rounded-sm"],
    md: ["!rounded-md"],
    lg: ["!rounded-lg"],
    full: ["!rounded-full"],
  },  

  // Theme by variant type
  color: {
    default: {
      solid: ["bg-gray-500", "text-white"],
      light: ["bg-gray-100", "text-gray-800"],
      ghost: ["bg-transparent", "text-gray-500"],
      bordered: ["border", "border-gray-500", "text-gray-500", "bg-transparent"],
    },
    primary: {
      solid: ["bg-blue-500", "text-white"],
      light: ["bg-blue-100", "text-blue-700"],
      ghost: ["bg-transparent", "text-blue-500"],
      bordered: [
        "border",
        "border-blue-500",
        "text-blue-500",
        "bg-transparent",
      ],
    },
    secondary: {
      solid: ["bg-gray-500", "text-white"],
      light: ["bg-gray-100", "text-gray-800"],
      ghost: ["bg-transparent", "text-gray-500"],
      bordered: [
        "border",
        "border-gray-500",
        "text-gray-500",
        "bg-transparent",
      ],
    },
    success: {
      solid: ["bg-green-500", "text-white"],
      light: ["bg-green-100", "text-green-700"],
      ghost: ["bg-transparent", "text-green-500"],
      bordered: [
        "border",
        "border-green-500",
        "text-green-500",
        "bg-transparent",
      ],
    },
    danger: {
      solid: ["bg-red-500", "text-white"],
      light: ["bg-red-100", "text-red-700"],
      ghost: ["bg-transparent", "text-red-500"],
      bordered: ["border", "border-red-500", "text-red-500", "bg-transparent"],
    },
    warning: {
      solid: ["bg-yellow-500", "text-white"],
      light: ["bg-yellow-100", "text-yellow-700"],
      ghost: ["bg-transparent", "text-yellow-500"],
      bordered: [
        "border",
        "border-yellow-500",
        "text-yellow-500",
        "bg-transparent",
      ],
    },
    info: {
      solid: ["bg-blue-500", "text-white"],
      light: ["bg-blue-100", "text-blue-700"],
      ghost: ["bg-transparent", "text-blue-500"],
      bordered: [
        "border",
        "border-blue-500",
        "text-blue-500",
        "bg-transparent",
      ],
    },
    disabled: {
      solid: ["bg-gray-300", "text-gray-500"],
      light: ["bg-gray-100", "text-gray-500"],
      ghost: ["bg-transparent", "text-gray-500"],
      bordered: ["border-gray-300", "text-gray-500"],
    },
  },
  fullWidth: ["w-full"],
  disabled: ["opacity-50", "pointer-events-none"],
};
