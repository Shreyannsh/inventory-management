import "./loader.css";

function Loader(props) {
  if (!props.loading) {
    return null;
  }
  return (
    <div className="loaderParent">
      <img
        className="loading"
        src="https://media.tenor.com/JBgYqrobdxsAAAAi/loading.gif"
        alt="loading"
      />
    </div>
  );
}

export default Loader;
