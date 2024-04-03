import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./ContextAPIs/useAuthContext";

function ProtectedRoutes(props) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { Component } = props;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);
  return (
    <div>
      <Component />
    </div>
  );
}

ProtectedRoutes.propTypes = {
  Component: PropTypes.any,
};

export { ProtectedRoutes };
