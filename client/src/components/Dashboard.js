import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    // must edit index.html in public folder to access icons: <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <div>
      Dashboard
      <div class="fixed-action-btn">
        <Link to="/surveys/new" class="btn-floating btn-large red">
          <i class="large material-icons">chat_bubble_outline</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
