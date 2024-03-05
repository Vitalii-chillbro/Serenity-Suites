import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Spinner from "./Spinner";

const Fullpage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading)
    return (
      <Fullpage>
        <Spinner />
      </Fullpage>
    );

  if (isAuthenticated) return children;
};

export default ProtectedRoute;
