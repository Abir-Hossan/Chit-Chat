import React from "react";
import GroupList from "../components/GroupList";
import FriendList from "../components/FriendList";

function Home() {
  return (
    <section className="py-9 flex w-full justify-around">
      <div>
        <GroupList />
        <FriendList />
      </div>
      <div>
        <GroupList />
        <FriendList />
      </div>
      <div>
        <GroupList />
        <FriendList />
      </div>
    </section>
  );
}

export default Home;
