import React, { useEffect, useState } from "react";
import Tip from "./Tip";

const Tips = () => {
  const [allTips, setAllTips] = useState([]);

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const res = await fetch("http://localhost:3000/tips");
        const data = await res.json();
        setAllTips(data);
      } catch (error) {
        console.error("Error fetching tips:", error);
      }
    };

    fetchTips();
  }, []);

  return (
    <section className="mb-20">
      <h2 className="text-4xl  font-bold text-secondary mb-10 text-center">
        Recent Tips
      </h2>
      <div className="grid grid-cols-5 w-7/10 justify-center mx-auto gap-4">
        {allTips.map((tip) => (
          <Tip key={tip._id} tip={tip}></Tip>
        ))}
      </div>
    </section>
  );
};

export default Tips;
