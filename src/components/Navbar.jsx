import { Navbar, NavbarBrand, NavbarContent, Link } from "@nextui-org/react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function () {

  const location = useLocation();
  const navigate = useNavigate()

  const logout = async () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('token_refresh')
    navigate('/login')
  }

  return (
    <Navbar disableAnimation isBordered className="fixed h-16 border-none">

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="text-inherit">Vambora</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link href="/home" className="text-inherit">Vambora</Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">

        {location.pathname === "/reserva" &&
          <Link href="/home" className={`text-blue-500`}>Home</Link>
        }

        {location.pathname === "/home" &&
          <Link href="/reserva" className={`text-blue-500`}>Reservar</Link>
        }

        {location.pathname === "/" &&
          <Link href="/reserva" className={`text-blue-500`}>Reservar</Link>
        }

      </NavbarContent>

    </Navbar>
  )
}

