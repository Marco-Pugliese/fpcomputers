const MyLogo = () => {
  const ImgUrl = "./assets/img/fp.jpeg";
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <img src={ImgUrl} alt="logo" style={{ height: "8vh" }} />
      </div>
    </>
  );
};
export default MyLogo;
