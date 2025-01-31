const MyLogo = () => {
  const ImgUrl = "./assets/img/fp.jpeg";
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <img src={ImgUrl} alt="logo" style={{ width: "120px" }} />
      </div>
    </>
  );
};
export default MyLogo;
