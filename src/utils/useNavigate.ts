import { useNavigate as useNavigateBase } from 'react-router'

import type{ NavigateFunction, To } from "react-router";

export const useNavigateCustom = () => {
  const navigate = useNavigateBase()

  const navigateCustom: NavigateFunction = (pathname, ...options) => {
    navigate(pathname as To, {...options, viewTransition: true})
  };

  return navigateCustom;
}