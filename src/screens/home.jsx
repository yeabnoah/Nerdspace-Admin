import "../styles/home.css";

import { useNavigate } from "react-router-dom";
import { settings } from "../assets/icons/menu.svg";
import { iconsImgs } from "../utils/control";
import { useState } from "react";
import HomeComp from "../components/home/homeComp";

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
            backgroundColor: "#3a3a43",
            height: "98vh",
            flex: 0.85,
            marginBottom: "1vh",
            marginTop: "1vh",
            marginLeft: ".5%",
            marginRight: ".5%",
            borderRadius: 10,
            border: "2px dashed #6e6e76",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "8%",
                marginRight: "8%",
                marginTop: ".5vh",
              }}
            >
              <h2
                style={{
                  fontSize: 21.5,
                  fontFamily: "poppins",
                  fontWeight: "400",
                  textAlign: "center",
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
                style={{ height: 20, marginTop: "3vh" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "4vh",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "4%",
                }}
              >
                <img
                  src={iconsImgs.home}
                  alt="x"
                  style={{ height: 20, marginTop: "1.8vh" }}
                />
                <h3
                  style={{
                    textAlign: "left",
                    fontSize: 18,
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
                  marginLeft: "4%",
                }}
              >
                <img
                  src={iconsImgs.user}
                  alt="x"
                  style={{ height: 20, marginTop: "1.8vh" }}
                />
                <h3
                  style={{
                    textAlign: "left",
                    fontSize: 18,
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
                  marginLeft: "4%",
                }}
              >
                <img
                  src={iconsImgs.report}
                  alt="x"
                  style={{ height: 20, marginTop: "1.8vh" }}
                />
                <h3
                  style={{
                    textAlign: "left",
                    fontSize: 18,
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
                  marginLeft: "4%",
                }}
              >
                <img
                  src={iconsImgs.plane}
                  alt="x"
                  style={{ height: 20, marginTop: "1.8vh" }}
                />
                <h3
                  style={{
                    textAlign: "left",
                    fontSize: 18,
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
                  marginLeft: "4%",
                }}
              >
                <img
                  src={iconsImgs.gears}
                  alt="x"
                  style={{ height: 20, marginTop: "1.8vh" }}
                />
                <h3
                  style={{
                    textAlign: "left",
                    fontSize: 18,
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
                  marginLeft: "4%",
                }}
              >
                <img
                  src={iconsImgs.wealth}
                  alt="x"
                  style={{ height: 20, marginTop: "1.8vh" }}
                />
                <h3
                  style={{
                    textAlign: "left",
                    fontSize: 18,
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
