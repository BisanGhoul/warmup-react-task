import MemberItem from "./MemberItem";
import "../styles/MemberList.css";

function MemberList({ members }) {
  const membersList = members.map((member) => (
    <MemberItem key={member.id} userInfo={member} />
  ));

  return (
    <div className="list-container">
      <ul>{membersList}</ul>
    </div>
  );
}

export default MemberList;
