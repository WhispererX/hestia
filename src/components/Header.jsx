import * as React from "react";
import { Link, NavLink } from "react-router";
import { NavigationMenu } from "radix-ui";
import { CaretDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import Logo from "../assets/logo.svg?react";

/* ===================== DATA ===================== */

const designServices = [
  {
    title: "UI / UX Design",
    description: "User-centered interfaces focused on clarity and usability.",
    to: "/services/ui-ux",
  },
  {
    title: "Branding & Logos",
    description: "Distinct visual identities and brand systems.",
    to: "/services/branding",
  },
  {
    title: "Illustration",
    description: "Custom illustrations for digital and marketing use.",
    to: "/services/illustration",
  }
];

const developmentServices = [
  {
    title: "Website Development",
    description: "Fast, responsive, and maintainable websites.",
    to: "/services/websites",
  },
  {
    title: "Web Applications",
    description: "Custom platforms and dashboards.",
    to: "/services/web-apps",
  },
  {
    title: "Software Development",
    description: "Tailored software for real business needs.",
    to: "/services/software",
  },
  {
    title: "Frontend Development",
    description: "Modern, performant user interfaces.",
    to: "/services/frontend",
  },
  {
    title: "Backend Development",
    description: "APIs, databases, and server systems.",
    to: "/services/backend",
  },
  {
    title: "Full-Stack Development",
    description: "End-to-end application delivery.",
    to: "/services/fullstack",
  },
];

/* ===================== HEADER ===================== */

export default function Header() {
  return (
    <header>
      <NavigationMenu.Root className="NavigationMenuRoot">
        <Link to="/" className="Linkas">
          <Logo className="Logo h-10 w-10" />
        </Link>

        <NavigationMenu.List className="NavigationMenuList">
          <NavItem to="/">About</NavItem>
          <NavItem to="/">Solutions</NavItem>

          <NavList to="/" title="Design">
            <CallOut to="/">
              <CallOut.Heading>Design Services</CallOut.Heading>
              <CallOut.Text>Visual, brand, and product design tailored for digital-first experiences.</CallOut.Text>
            </CallOut>
            {designServices.map((item, idx) => (
              <ListItem title={item.title} to={item.to} key={idx}>{item.description}</ListItem>
            ))}
          </NavList>
          

          <NavList to="/" title="Development">
            {developmentServices.map((item, idx) => (
              <ListItem title={item.title} to={item.to} key={idx}>{item.description}</ListItem>
            ))}
          </NavList>

          <NavItem to="/">Contact</NavItem>

          <NavigationMenu.Indicator className="NavigationMenuIndicator">
            <div className="Arrow" />
          </NavigationMenu.Indicator>

          <div className="ViewportPosition">
            <NavigationMenu.Viewport className="NavigationMenuViewport" />
          </div>
        </NavigationMenu.List>

        
		</NavigationMenu.Root>
    </header>
  );
}

/* =================== COMPONENTS =================== */

function NavItem({ to, children }) {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link asChild>
        <NavLink to={to} className="NavigationMenuLink">{children}</NavLink>
      </NavigationMenu.Link>
		</NavigationMenu.Item>
  )
}

function NavList({ to, title, children}) {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Trigger className="NavigationMenuTrigger" >
        <NavLink to={to} className="NavigationMenuLink">{title} </NavLink>
        <CaretDownIcon className="CaretDown" aria-hidden />
      </NavigationMenu.Trigger>

      <NavigationMenu.Content className="NavigationMenuContent">
						<ul className="List">
              {children}
						</ul>
					</NavigationMenu.Content>
		</NavigationMenu.Item>
  )
}

const ListItem = React.forwardRef(
	({ className, children, title, to, ...props }, forwardedRef) => (
		<li>
			<NavigationMenu.Link asChild>
        <Link to={to} className={classNames("ListItemLink", className)} {...props} ref={forwardedRef}>
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </Link>
			</NavigationMenu.Link>
		</li>
	),
);

function CallOut({ to, children }) {
  return (
    <li style={{ gridRow: "span 3" }}>
      <NavigationMenu.Link asChild>
        <Link className="Callout" to={to}>
          {children}
        </Link>
      </NavigationMenu.Link>
    </li>
  )
}

function CallOutHeading({ children }) {
  return <div className="CalloutHeading">{children}</div>;
}

function CallOutText({ children }) {
  return <p className="CalloutText">{children}</p>
}

CallOut.Heading = CallOutHeading;
CallOut.Text = CallOutText;