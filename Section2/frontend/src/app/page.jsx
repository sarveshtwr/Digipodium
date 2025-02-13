import Button from "@/components/Button";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-5xl">Home Page</h1>

      <p style={{ color: "red", fontSize: 30, fontWeight: "bold" }}>
        Using Inline CSS
      </p>
      <br />
      <hr />
      <input type="text" />
      <button className="btn">Submit</button>
      <img src="/next.svg" alt="" />
      <Button>Not Disable</Button>
      <Button disabled={true}>Disable</Button>
    </div>
  );
};

export default Home;

//rafce
