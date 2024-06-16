import React from "react";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";

export default function () {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Navbar disableAnimation isBordered className="fixed h-16 border-none">
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand onClick={() => navigate("/home")}>
          <p className="text-inherit">Vambora</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand onClick={() => navigate("/home")}>
          <p className="text-inherit">Vambora</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        {location.pathname === "/reserva" && (
          <>
            <Button
              type="button"
              className="h-full align-center text-blue-500 bg-transparent"
              onClick={() => navigate("/detalhes")}
            >
              Detalhes
            </Button>
          </>
        )}

        {(location.pathname === "/home" || location.pathname === "/") && (
          <>
            <Button
              type="button"
              className="h-full align-center text-blue-500 bg-transparent"
              onClick={() => navigate("/detalhes")}
            >
              Detalhes
            </Button>

            <Button
              type="button"
              className="align-center text-white primary bg-primary"
              onClick={() => navigate("/reserva")}
            >
              Reservar
            </Button>
          </>

        )}

        {(location.pathname === "/detalhes") && (
          <>
            <Button
              type="button"
              className="align-center text-white primary bg-primary"
              onClick={() => navigate("/reserva")}
            >
              Reservar
            </Button>
          </>

        )}
      </NavbarContent>
    </Navbar>
  );
}
