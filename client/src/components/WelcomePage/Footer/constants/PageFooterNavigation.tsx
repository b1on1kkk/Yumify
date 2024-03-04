import { Bell, FileBarChart, Home, User, ShoppingBasket } from "lucide-react";

export const PageFooterNavigation = [
  {
    id: 0,
    picture: <Home width={18} height={18} />,
    linkTo: "/"
  },
  {
    id: 1,
    picture: <ShoppingBasket width={18} height={18} />,
    linkTo: "/products"
  },
  {
    id: 2,
    picture: <FileBarChart width={18} height={18} />,
    linkTo: "/purchase_history"
  },
  {
    id: 3,
    picture: <Bell width={18} height={18} />,
    linkTo: "/notifications"
  },
  {
    id: 4,
    picture: <User width={18} height={18} />,
    linkTo: "/user"
  }
];
