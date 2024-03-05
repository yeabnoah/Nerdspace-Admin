import React, { useEffect } from "react";
import logo from "../../assets/images/logo.jpg";
import { iconsImgs } from "../../utils/control";
import axios from "axios";

function HomeComp() {
  // useEffect(() => {
  //   axios.get(`http://localhost:5000/users/feed`).then((response) => {
  //     console.log(response);
  //   });
  // }, []);
  return (
    <div style={{ margin: "3vh" }}>
      <div style={{ display: "flex" }}>
        <div
          style={{
            flex: 1,
            height: "7vh",
            borderRadius: 10,
            margin: "15px 20px 15px 20px",
            display: "flex",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "max-content",
              borderRadius: 10,
              overflowY: "hidden",
              padding: 0,
            }}
          >
            <h3
              style={{
                fontFamily: "poppins",
                marginTop: 0,
                marginLeft: ".5%",
                padding: 0,
                marginBottom: 0,
                fontWeight: "200",
                fontSize: 29,
              }}
            >
              Statistics
            </h3>
          </div>

          <div
            style={{
              flex: 2,
              height: "100%",
              borderRadius: 10,
              marginLeft: "1%",
              display: "flex",
            }}
          >
            <div
              style={{
                flex: 3,
                height: "100%",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <div style={{ display: "flex", flex: 2 }}>
                <img
                  src={iconsImgs.search}
                  alt="hi"
                  style={{
                    height: "35%",
                    marginRight: "2%",
                    marginTop: "2.3vh",
                  }}
                />

                <input
                  placeholder="Search What you wanted"
                  style={{
                    background: "transparent",

                    borderRadius: 10,
                    border: 0,
                    color: "#fff",
                    fontFamily: "poppins",
                    outline: "none",
                    fontSize: 16,
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "space-evenly",
                }}
              >
                <button
                  style={{
                    padding: "10px 20px 10px 20px",
                    background: "#7864f6",
                    border: "1px solid #7864f6",
                    color: "#fff",
                    fontFamily: "poppins",
                    borderRadius: 5,
                    flex: 1,
                    fontSize: 18,
                  }}
                >
                  Announce
                </button>

                <div style={{ display: "flex", flex: 2, marginLeft: 50 }}>
                  <img
                    src={iconsImgs.bell}
                    alt="hi"
                    style={{
                      height: "50%",
                      marginRight: 10,
                      marginTop: ".5vh",
                      flex: 0.3,
                      border: "1px solid rgb(220, 220, 220)",
                      padding: 10,
                      borderRadius: 10,
                    }}
                  />
                  <img
                    src={iconsImgs.gears}
                    alt="hi"
                    style={{
                      height: "50%",
                      marginRight: 20,
                      marginTop: ".5vh",
                      flex: 0.3,
                      border: "1px solid rgb(220, 220, 220)",
                      padding: 10,
                      borderRadius: 10,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            height: "40vh",
            flex: 1,
            margin: "10px 15px 10px 15px",
            borderRadius: 10,
            display: "flex",
            backgroundColor: "#7864f6",
          }}
        ></div>

        <div
          style={{
            backgroundColor: "#37383f",
            height: "40vh",
            width: "25%",
            borderRadius: 10,
            margin: "10px 15px 10px 15px",
            flex: 1,
          }}
        ></div>

        <div
          style={{
            height: "40vh",
            flex: 1,
            margin: "10px 15px 10px 15px",
            borderRadius: 10,
            display: "flex",
            backgroundColor: "#dcdcdc",
          }}
        ></div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "#37383f",
            height: "40vh",
            flex: 1,
            borderRadius: 10,
            margin: "10px 15px 10px 15px",
          }}
        ></div>

        <div
          style={{
            backgroundColor: "rgb(220, 220, 220)",
            height: "40vh",
            flex: 1,
            borderRadius: 10,
            margin: "10px 15px 10px 15px",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "#37383f",
            height: "40vh",
            flex: 1,
            borderRadius: 10,
            margin: "10px 15px 10px 15px",
          }}
        ></div>
      </div>
    </div>
  );
}

export default HomeComp;
