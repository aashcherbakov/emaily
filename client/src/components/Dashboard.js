import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./Surveys/SurveyList";

const Dashboard = () => {
  return (
    // must edit index.html in public folder to access icons: <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <div>
      <SurveyList />
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="large material-icons">chat_bubble_outline</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
