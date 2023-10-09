import { createElement } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({
  as,
  size,
  variant,
  className,
  children,
  iconTitle,
  ...props
}) {
  const iconData = [
    {
      iconTitle: "instagram",
      icon: (
        <svg viewBox="0 0 24 24" width={25} height={25}>
          <path
            fill="currentColor"
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
          />
        </svg>
      ),
    },
    {
      iconTitle: "twitter",
      icon: (
        <svg viewBox="0 0 24 24" width={25} height={25}>
          <path
            fill="currentColor"
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
          />
        </svg>
      ),
    },
    {
      iconTitle: "github",
      icon: (
        <svg viewBox="0 0 24 24" width={25} height={25}>
          <path
            fill="currentColor"
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            
            />
        </svg>
      ),
    },
    {
      iconTitle: "linkedin",
      icon: (
        <svg viewBox="0 0 24 24"  width={25} height={25}>
          <path 
          fill="currentColor"
          d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" 
           />
        </svg>
      ),
    },
    {
      iconTitle: "youtube",
      icon: (
        <svg viewBox="0 0 24 24" width={25} height={25}>
          <path 
          fill="currentColor"
          d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
           />
        </svg>
      ),
    },
    {
      iconTitle: "eposta",
      icon: (
        <svg viewBox="0 0 24 24" width={25} height={25}>
          <path 
          fill="currentColor"
          d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"
           />
        </svg>
      ),
    },
    {
      iconTitle: "whatsapp",
      icon: (
        <svg viewBox="0 0 24 24" width={25} height={25}>
          <path 
          fill="currentColor"
          d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
           />
        </svg>
      ),
    },
    {
        iconTitle: "default",
        icon: (
          <svg viewBox="0 0 24 24" width={25} height={25}>
            <path 
            fill="currentColor"
             d="" />
          </svg>
        ),
      },
    // Diğer ikonlar...
  ];
  const selectedIcon = iconData.find((data) => data.iconTitle === iconTitle);

  return createElement(
    as,
    {
      type: "button",
      className: classNames(
        " rounded-xl flex items-center justify-center font-bold transition-colors mb-4",
        {
          "px-4 h-8 text-sm": size == "small",
          "px-4 h-9": size == "normal",
          "px-4 text-[18px] h-[60px] w-[240px]": size == "large",
          "px-4 text-[18px] h-[60px] w-full": size == "full",

          "bg-gray-200": variant == "default",
          "bg-gradient-to-bl from-[#1400c8]  via-[#b900b4] to-[#f50000]":
            variant == "instagram",
          "bg-[#1d9bf0]": variant == "twitter",
          "bg-[#24292e]": variant == "github",
          "bg-[#0A66C2]": variant == "linkedin",
          "bg-[#FF0000]": variant == "youtube",
          "bg-[#D1011B]": variant == "eposta",
          "bg-[#25d366]": variant == "whatsapp",
          [className]: true,
        }
      ),
      ...props,
    },
    <>
      {selectedIcon && <span className="mr-2">{selectedIcon.icon}</span>}
      {children}
    </>
  );
}

Button.PropTypes = {
  as: PropTypes.any,
  size: PropTypes.oneOf(["small", "normal", "large", "full"]),
  variant: PropTypes.oneOf(["primary", "white", "white-outline"]),
  props: PropTypes.object,
  className: PropTypes.string,
};

Button.defaultProps = {
  as: "button",
  size: "normal",
  variant: "primary",
};
