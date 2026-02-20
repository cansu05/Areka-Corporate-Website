import ArekaLogo from "../assets/logo-beyaz.svg";

const Logo = ({ style }: { style?: object }) => {
  return (
    <img
      src={ArekaLogo}
      alt="Areka Carbon Hub"
      title="Areka Carbon Hub"
      style={style}
    />
  );
};

export default Logo;
