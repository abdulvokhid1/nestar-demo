import { useState } from "react";

const Community = () => {
  const [title, setTitle] = useState<string>("hello");
  return (
    <div>
      CommunityPage
      <button onClick={() => alert("Hello Community")}>press me</button>
    </div>
  );
};
export default Community;
