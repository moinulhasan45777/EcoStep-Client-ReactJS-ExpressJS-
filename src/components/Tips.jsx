import React, { useEffect, useState } from "react";
import Tip from "./Tip";
import { toast } from "react-toastify";

const Tips = () => {
  const [allTips, setAllTips] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchTips = async () => {
      try {
        const res = await fetch("https://eco-step-api-server.vercel.app/tips");
        const data = await res.json();
        setLoading(false);
        setAllTips(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchTips();
  }, []);

  return (
    <section className="mb-20">
      <h2 className="text-4xl  font-bold text-secondary mb-10 text-center">
        Recent Tips
      </h2>
      {loading ? (
        <div className="w-9/10 md:w-8/10 lg:w-7/10 mx-auto flex justify-center">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      ) : (
        <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 w-9/10 md:w-8/10 lg:w-7/10 justify-center mx-auto gap-4">
          {allTips.slice(0, 5).map((tip) => (
            <Tip key={tip._id} tip={tip}></Tip>
          ))}
        </div>
      )}
    </section>
  );
};

export default Tips;
