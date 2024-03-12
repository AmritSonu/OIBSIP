import { useNavigate } from "react-router-dom";
export function useAppNavigate() {
  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path);
  };
  return { goTo };
}
