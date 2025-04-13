import { useState } from "react"; // Add this import
import userImg from "../assets/imgs/user.png";
import "../index.css";
import "../styles/MemberItem.css";

export default function MemberItem({ userInfo }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <li>
      <div className="list-item-container">
        <div className={`user-info-container ${isChecked ? "checked" : ""}`}>
          <img
            src={userImg}
            alt="profile icon"
            className={`user-icon ${isChecked ? "checked" : ""}`}
          />
          <span className={isChecked ? "checked" : ""}>{userInfo.name}</span>
        </div>
        <div className="checkbox-container">
          <input
            className="custom-checkbox"
            type="checkbox"
            id="task-1"
            role="checkbox"
            aria-checked={isChecked}
            tabIndex="0"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
        </div>
      </div>
    </li>
  );
}
