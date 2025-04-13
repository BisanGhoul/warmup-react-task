import Header from "../components/Header";
import MemberList from "../components/MemberList";
import Button from "../components/Button";

import { members } from "../utils/MembersData.js";
import "../styles/MembersPage.css";

function MembersPage() {
  return (
    <div className="container">
      <Header />
      <MemberList members={members} />
      <div className="button-container">
        <Button type="cancel" text="Cancel" />
        <Button type="save" text="save" />
      </div>
    </div>
  );
}

export default MembersPage;
