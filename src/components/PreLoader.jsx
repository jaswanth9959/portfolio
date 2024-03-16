import pre from "../assets/pre.svg";
function PreLoader() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-900 flex justify-center items-center">
      <img src={pre} />
    </div>
  );
}

export default PreLoader;
