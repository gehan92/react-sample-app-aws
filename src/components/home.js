import { useEffect, useState } from "react";
import Axios from "axios";

function Home() {
  const [userData, setUserData] = useState([]);

  const [name, setname] = useState("");
  const [age, setuserAge] = useState("");
  const [address, setUserAddress] = useState("");

  const AddDataSet = async () => {
    let data = { name, age, address };
    console.log("add data:: ", data);
    Axios.post("http://localhost:3000/myApp/add", data)
      .then((res) => {
        console.log("add data-> ", res.data);
      })
      .catch((err) => {
        console.log("addData :: ", err);
      });
  };

  useEffect(() => {
    Axios.get("http://localhost:3000/myApp/get")
      .then((res) => {
        setUserData(res.data.Data);
        console.log("data set ::", res.data.Data);
        console.log(userData[1]);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="container-fluid" style={{ paddingTop: 10 }}>
              <div
                className="card"
                style={{
                  width: "20rem",
                  backgroundColor: "blueviolet",
                  color: "white",
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">Enter user Details</h5>
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => {
                          setname(e.target.value);
                        }}
                        id="Enter_user_Name"
                        aria-describedby="emailHelp"
                        placeholder="Enter user Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Age</label>
                      <input
                        type="number"
                        className="form-control"
                        value={age}
                        onChange={(e) => {
                          setuserAge(e.target.value);
                        }}
                        id="Enter_user_age"
                        aria-describedby="emailHelp"
                        placeholder="Enter user age"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        value={address}
                        onChange={(e) => {
                          setUserAddress(e.target.value);
                        }}
                        id="Enter_address"
                        placeholder="Enter address"
                      />
                    </div>
                    <br />
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={AddDataSet}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col"></div>

          <div className="col">
            <div className="container" style={{ paddingTop: 10 }}>
              <table className="table" style={{ backgroundColor: "gray" }}>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Address</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((i, j) => {
                    return (
                      <tr>
                        <th scope="row">{j + 1}</th>
                        <td>{userData[j].name}</td>
                        <td>{userData[j].age}</td>
                        <td>{userData[j].address}</td>
                        <td>
                          <div className="col">
                            <button type="button" className="btn btn-danger">
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
