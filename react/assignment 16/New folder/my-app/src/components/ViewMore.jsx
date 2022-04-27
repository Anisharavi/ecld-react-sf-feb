import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export const ViewMore = () => {
  const { studId } = useParams();
  const [data, setData] = useState([]);

  const fetchStudent = () => {
    axios
      .get(`https://deploy-mock-server.herokuapp.com/students/${studId}`)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchStudent();
  });

  const navigate = useNavigate();
  const { first_name, email, gender } = data;
  return (
    <div>
      <button className="navigate" onClick={() => navigate(-1)}>
        back
      </button>
      <div className="card-body-show">
        
        <h2>{first_name}</h2>
        <h3>{email}</h3>
        <h5>{gender}</h5>
        
      </div>
    </div>
  );
};
