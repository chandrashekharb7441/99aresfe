import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function UserLogOut() {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("userId");
        localStorage.removeItem("userName");

        navigate("/");
  }, [navigate]);
  return null;
}
