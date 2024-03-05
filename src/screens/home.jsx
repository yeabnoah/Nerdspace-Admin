import "../styles/home.css";

import { useNavigate } from "react-router-dom";
import { settings } from "../assets/icons/menu.svg";
import { iconsImgs } from "../utils/control";
import { useState } from "react";
import HomeComp from "../components/home/homeComp";
import logo from "../assets/images/logo.jpg";

function Home() {
  const navigate = useNavigate();

  const [large, setLarge] = useState(true);

  const register = () => {
    navigate("/register");
  };
  const login = () => {
    navigate("/login");
  };
  return (
    <div style={{ display: "flex" }}>
      {large ? (
        <div
          style={{
            height: "98vh",
            flex: 0.85,
            marginBottom: "1vh",
            marginTop: "1vh",
            marginLeft: ".5%",
            marginRight: ".5%",
            borderRightWidth: 1,
            borderRightColor: "#7864f6",
            borderRightStyle: "solid",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "8%",
                marginRight: "8%",
              }}
            >
              <h2
                style={{
                  fontSize: 21.5,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  marginTop: "4vh",
                }}
              >
                Nerd Space
              </h2>
              <img
                onClick={() => {
                  setLarge(false);
                }}
                src={iconsImgs.menu}
                alt="x"
                style={{ height: 20, marginTop: "5vh" }}
              />
            </div>

            <div
              style={{
                marginTop: "4vh",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <img
                src={logo}
                alt="userImage"
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 100,
                }}
              />
            </div>

            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <div>
                <h3 style={{ fontFamily: "poppins", fontWeight: "100" }}>
                  Tech nerd
                </h3>
                <button
                  style={{
                    padding: "13px 20px 13px 20px",
                    borderRadius: 20,
                    background: "transparent",
                    color: "#7864f6",
                    border: "1px solid #7864f6",
                  }}
                >
                  Edit Profile
                </button>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "5vh",
              }}
            >
              <div
                style={{
                  backgroundColor: "#353537",
                  display: "flex",
                  alignItems: "center",

                  marginLeft: 20,
                  marginRight: 20,
                  paddingLeft: 20,
                  paddingRight: 30,
                  paddingBottom: 5,
                  borderRadius: 10,
                  marginTop: 5,
                  justifyContent: "start",
                }}
              >
                <img
                  src={iconsImgs.home}
                  alt="x"
                  style={{ height: 16, marginTop: "1.5vh" }}
                />
                <h3
                  style={{
                    textAlign: "left",
                    fontSize: 16,
                    fontFamily: "poppins",
                    fontWeight: "400",
                    marginLeft: "5%",
                    marginBottom: ".5vh",
                  }}
                >
                  overview
                </h3>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: 20,
                  marginRight: 20,
                  paddingLeft: 20,
                  paddingRight: 30,
                  paddingBottom: 5,
                  borderRadius: 10,
                  marginTop: 5,
                  justifyContent: "start",
                }}
              >
                <img
                  src={iconsImgs.user}
                  alt="x"
                  style={{ height: 18, marginTop: "1.6vh" }}
                />
                <h3
                  style={{
                    textAlign: "left",
                    fontSize: 16,
                    fontFamily: "poppins",
                    fontWeight: "400",
                    marginLeft: "5%",
                    marginBottom: ".5vh",
                  }}
                >
                  manage users
                </h3>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: 20,
                  marginRight: 20,
                  paddingLeft: 20,
                  paddingRight: 30,
                  paddingBottom: 5,
                  borderRadius: 10,
                  marginTop: 5,
                  justifyContent: "start",
                }}
              >
                <img
                  src={iconsImgs.report}
                  alt="x"
                  style={{ height: 18, marginTop: "1.6vh" }}
                />
                <h3
                  style={{
                    textAlign: "left",
                    fontSize: 16,
                    fontFamily: "poppins",
                    fontWeight: "400",
                    marginLeft: "5%",
                    marginBottom: ".5vh",
                  }}
                >
                  analytics
                </h3>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",

                  marginLeft: 20,
                  marginRight: 20,
                  paddingLeft: 20,
                  paddingRight: 30,
                  paddingBottom: 5,
                  borderRadius: 10,
                  marginTop: 5,
                  justifyContent: "start",
                }}
              >
                <img
                  src={iconsImgs.plane}
                  alt="x"
                  style={{ height: 18, marginTop: "1.6vh" }}
                />
                <h3
                  style={{
                    textAlign: "left",
                    fontSize: 16,
                    fontFamily: "poppins",
                    fontWeight: "400",
                    marginLeft: "5%",
                    marginBottom: ".5vh",
                  }}
                >
                  manage post
                </h3>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",

                  marginLeft: 20,
                  marginRight: 20,
                  paddingLeft: 20,
                  paddingRight: 30,
                  paddingBottom: 5,
                  borderRadius: 10,
                  marginTop: 5,
                  justifyContent: "start",
                }}
              >
                <img
                  src={iconsImgs.gears}
                  alt="x"
                  style={{ height: 18, marginTop: "1.6vh" }}
                />
                <h3
                  style={{
                    textAlign: "left",
                    fontSize: 16,
                    fontFamily: "poppins",
                    fontWeight: "400",
                    marginLeft: "5%",
                    marginBottom: ".5vh",
                  }}
                >
                  settings
                </h3>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: 20,
                  marginRight: 20,
                  paddingLeft: 20,
                  paddingRight: 30,
                  paddingBottom: 5,
                  borderRadius: 10,
                  marginTop: 5,
                  justifyContent: "start",
                }}
              >
                <img
                  src={iconsImgs.wealth}
                  alt="x"
                  style={{ height: 18, marginTop: "1.6vh" }}
                />
                <h3
                  style={{
                    textAlign: "left",
                    fontSize: 16,
                    fontFamily: "poppins",
                    fontWeight: "400",
                    marginLeft: "5%",
                    marginBottom: ".5vh",
                  }}
                >
                  Broadcast
                </h3>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "#3a3a43",
            height: "98vh",
            flex: 0.15,
            marginBottom: "2vh",
            marginTop: "1vh",
            borderRadius: 10,
            border: "2px dashed #6e6e76",
          }}
        >
          <div>
            <div
              onClick={() => {
                setLarge(!large);
              }}
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "8%",
                marginRight: "8%",
                marginTop: ".5vh",
              }}
            >
              <img
                src={iconsImgs.menu}
                alt="x"
                style={{ height: 20, marginTop: "3vh", marginBottom: "2vh" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "4vh",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <div
                onClick={() => {
                  setLarge(false);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={iconsImgs.home}
                  alt="x"
                  style={{ height: 23, marginTop: "2vh", marginBottom: "2vh" }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={iconsImgs.user}
                  alt="x"
                  style={{ height: 23, marginTop: "2vh", marginBottom: "2vh" }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={iconsImgs.report}
                  alt="x"
                  style={{ height: 23, marginTop: "2vh", marginBottom: "2vh" }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={iconsImgs.plane}
                  alt="x"
                  style={{ height: 23, marginTop: "2vh", marginBottom: "2vh" }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={iconsImgs.gears}
                  alt="x"
                  style={{ height: 23, marginTop: "2vh", marginBottom: "2vh" }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={iconsImgs.wealth}
                  alt="x"
                  style={{ height: 23, marginTop: "2vh", marginBottom: "2vh" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div style={{ height: "100vh", flex: 4 }}>
        <HomeComp />
      </div>
    </div>
  );
}

export default Home;
