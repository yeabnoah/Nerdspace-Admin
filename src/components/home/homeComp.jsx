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
            margin: ".7%",
            display: "flex",
          }}
        >
          <div
            style={{
              flex: 2.8,
              height: "max-content",
              borderRadius: 10,
              overflowY: "hidden",
              padding: 0,
            }}
          >
            <p
              style={{
                fontFamily: "poppins",
                marginTop: ".2%",
                marginBottom: 0,
                marginLeft: ".5%",
                padding: 0,
                fontSize: 12,
              }}
            >
              Welcome to the Nerd-Space Admin Dashboard
            </p>
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
              Use the available resources to control Nerd space
            </h3>
          </div>

          <div
            style={{
              flex: 1.2,
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
              <img
                src={iconsImgs.bell}
                alt="hi"
                style={{
                  height: "50%",
                  marginRight: "5%",
                  marginTop: "1.7vh",
                }}
              />
              <img
                src={iconsImgs.gears}
                alt="hi"
                style={{ height: "50%", marginTop: "1.7vh" }}
              />
            </div>
            <div style={{ height: "100%", flex: 1, marginLeft: "10%" }}>
              <img
                src={logo}
                alt="hi"
                style={{ flex: 1, height: "100%", borderRadius: 100 }}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            height: "40vh",
            flex: 1,
            margin: ".7%",
            borderRadius: 10,
            display: "flex",
            backgroundColor: "#4242ff",
            // border: "2px dashed #6e6e76",
          }}
        >
          <div
            style={{
              marginLeft: "2%",
              justifyContent: "flex-start",
              alignItems: "start",
              paddingLeft: "3%",
              paddingRight: "3%",
              margin: "1%",
              // #5000ff
              borderRadius: 10,
              // border: "2px dashed #6e6e76",
            }}
          >
            <h3
              style={{
                textAlign: "start",
                fontFamily: "poppins",
                fontSize: 20,
                fontWeight: "100",
              }}
            >
              23,589 - Users
            </h3>
            <h3
              style={{
                textAlign: "start",
                fontFamily: "poppins",
                fontSize: 20,
                fontWeight: "100",
              }}
            >
              858,790 - Posts
            </h3>
            <h3
              style={{
                textAlign: "start",
                fontFamily: "poppins",
                fontSize: 20,
                fontWeight: "100",
              }}
            >
              345,831 - Likes
            </h3>
            <h3
              style={{
                textAlign: "start",
                fontFamily: "poppins",
                fontSize: 20,
                fontWeight: "100",
              }}
            >
              49,801 - Comments
            </h3>
            <h3
              style={{
                textAlign: "start",
                fontFamily: "poppins",
                fontSize: 20,
                fontWeight: "100",
              }}
            >
              858,790 - Shares
            </h3>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#3a3a43",
            height: "40vh",
            width: "25%",
            borderRadius: 10,
            margin: "1%",
          }}
        ></div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "blueviolet",
            height: "40vh",
            flex: 1,
            borderRadius: 10,
            margin: "1%",
          }}
        ></div>

        <div
          style={{
            backgroundColor: "palegoldenrod",
            height: "40vh",
            flex: 1,
            borderRadius: 10,
            margin: "1%",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "deeppink",
            height: "40vh",
            flex: 1,
            borderRadius: 10,
            margin: "1%",
          }}
        ></div>
      </div>
    </div>
  );
}

export default HomeComp;
