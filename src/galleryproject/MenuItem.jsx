const MenuItem = (props) => {
  return (
    <div className="group ">
      <a href="#"> {props.title}</a>
      <div className="mx-2 mt-2 border-b border-black opacity-0 duration-500 group-hover:opacity-100 "></div>
    </div>
  );
};
export default MenuItem;
