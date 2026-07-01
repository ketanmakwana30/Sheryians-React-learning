import React from "react";

const Page = () => {
  function hello() {
    console.log("Hello clicked");
  }

  function btnClick() {
    console.log("Submit ");
  }

  function inputChange(value) {
    console.log(value);
  }

  function scroll(value) {
    console.log("Scroll speed:", value);
  }

  return (
    <div
      onWheel={(elem) => {
        scroll(elem.deltaY);
      }}
    >
      <div className="page1">
        <h1 onClick={hello}>HELLO</h1>

        <button onClick={btnClick}>Click</button>

        <input
          onChange={function (elem) {
            inputChange(elem.target.value);
          }}
          type="text"
          placeholder="Enter name"
        />

        <div
          className="box"
          onMouseMove={(elem) => {
            console.log(elem.clientX, elem.clientY);
          }}
        ></div>
      </div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  );
};

export default Page;
