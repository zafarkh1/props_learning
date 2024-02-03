import React, { useState } from "react";
import Props2 from "./props2";

const DataList2 = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev tips", body: "lorem ipsum...", author: "robert", id: 3 },
    { title: "Pray 5 times", body: "lorem ipsum...", author: "muhammad", id: 4 },
    { title: "Recite Koran", body: "lorem ipsum...", author: "muhammad", id: 5 },
  ]);

	const filterred = blogs.filter((blog) => blog.author === "muhammad");

  return (
    <div>
      <Props2 data={blogs} title="All blogs" />
      <Props2 data={filterred} title="Muhammad's blogs"/>
    </div>
  );
};

export default DataList2;
