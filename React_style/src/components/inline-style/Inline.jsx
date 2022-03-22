const myStyle = {
  parag: {
    color: "blue",
    fontSize: "2rem",
    fontWeight: "500",
  },
  div: {
    backgroundColor: "gray",
    fontSize: "3.2rem",
  },
};
function Inline() {
  return (
    <>
      <div style={{ backgroundColor: "red" }}>
        <h1>Hello from inline Css</h1>
        <div style={myStyle.div}>
          <p style={myStyle.parag}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            sequi ducimus repellat architecto eius optio distinctio ab cumque
            illo voluptate?
          </p>
        </div>
      </div>
    </>
  );
}

export default Inline;
