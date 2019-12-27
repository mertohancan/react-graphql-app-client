import React, { useState } from "react";
import test from "../images/playing.svg";

const Main = () => {
  const [search, setSearch] = useState("");

  return (
    <div style={cs.allPage}>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "5vh",
            marginTop: "5vh"
          }}
        >
          <h2>Fakülte Teras</h2>
        </div>

        <div className="input-group">
          <input
            type="text"
            id="query"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="form-control"
            placeholder="Bir şarkı öner.."
          />
          <span className="input-group-btn">
            <input
              type="submit"
              id="search"
              className="btn btn-primary"
              value="Gönder"
            />
          </span>
        </div>

        <div style={{ marginTop: 50 }}>
          <h3 style={{ textAlign: "center" }}>Şu anda çalan şarkı</h3>
          <div style={{ width: "50vw" }} className="media">
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "5vh"
              }}
              className="media-body"
            >
              <img
                src={test}
                style={{ width: 48, height: 48 }}
                className="mr-3"
                alt="..."
              />
              <h5
                style={{ textAlign: "center", marginRight: "5vw" }}
                className="mt-0"
              >
                Lin Pesto - Kolay Değil
              </h5>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 50, marginBottom: 50 }}>
          <h3 style={{ textAlign: "center" }}>Sıradaki Parçalar</h3>
          <ul style={{ marginTop: "5vh" }} className="list-group">
            <li style={{ display: "flex" }} className="list-group-item active">
              Radiohead - Creep
            </li>
            <li className="list-group-item">The Cranberries - Zombie</li>
            <li className="list-group-item">Adamlar - Zombi</li>
            <li className="list-group-item">The Weeknd - Starboy</li>
            <li className="list-group-item">
              Büyük Ev Ablukada - Güneş Yerinde
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const cs = {
  allPage: {
    width: "50vw",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    height: "100vh"
  }
};

export default Main;
