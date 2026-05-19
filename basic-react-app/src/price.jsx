export default function Price({ oldPrice, newPrice }) {
  let oldstyles = {
    textDecorationLine: "line-through",
  };
  let newStyles = {
    fontWeight: "bold,",
  };
  let styles = {
    backgroundColor: "#e0c367",
    height: "30px",
    width: "200px",
    borderBottomLeftRadius: "23px",
    borderBottomRightRadius: "23px",
  };
  return (
    <div style={styles}>
      <span style={oldstyles}>{oldPrice}</span>
      &nbsp;
      <span style={newStyles}>{newPrice}</span>
    </div>
  );
}
