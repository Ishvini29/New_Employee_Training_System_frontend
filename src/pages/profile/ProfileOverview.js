// import addtowishlist from "../images/addtowishlist.png";
// import { SocialIcon } from "react-social-icons";
import "../../App.css";
import image5 from "../../images/12.png";
import Employee from "../../data/Employee.json";

function ProfileOverview(props) {
  return (
    <div className="row justify-content-center ">
      <div
        className="card "
        style={{
          backgroundColor: "#8bb2d2 ",
          borderBlock: "1px solid #CCCCCC",
          boxSizing: "border-box",
        }}
      >
        <div className="card-body">
          <h3 className="text-center" style={{ color: "white" }}>
            Profile overview
          </h3>
        </div>
      </div>
      <div className="col-md-8">
        <div
          className="card mt-5 crud shadow-lg p-3 mb-5 mt-5 bg-body rounded "
        // style={{ backgroundColor: "rgb(199,227,244)" }}
        >
          <div class="col d-flex justify-content-center mt-3">
            <img
              src={image5}
              className="rounded-circle"
              alt="Cinque Terre"
              style={{ height: "120px", width: "120px" }}
            />
          </div>
          <div className="card-body">
            <form>
              <div class="row justify-content-center">
                <div className="col-md-2"></div>
                <div class="form-group col-md-3">
                  <label for="inputFirst name">Name</label>
                </div>
                <div class="form-group col-md-5">
                  <input
                    type="email"
                    class="form-control a2"
                    id="inputEmail4"
                    value={Employee[0].name}
                    disabled={true}
                  />
                </div>
              </div>

              <div class="row mt-2 justify-content-center">
                <div className="col-md-2"></div>
                <div class="form-group col-md-3">
                  <label for="inputLastName">Jobtitle</label>
                </div>
                <div class="form-group col-md-5">
                  <input
                    type="lastname"
                    class="form-control a2"
                    id="inputLastname"
                    value={Employee[0].jobtitle}
                    disabled={true}
                  />
                </div>
              </div>
              <div class="row mt-2 justify-content-center">
                <div className="col-md-2"></div>
                <div class="form-group col-md-3">
                  <label for="inputEmail4">Department</label>
                </div>
                <div class="form-group col-md-5">
                  <input
                    type="email"
                    class="form-control a2"
                    id="inputEmail4"
                    value={Employee[0].department}
                    disabled={true}
                  />
                </div>
              </div>
              <div class="row mt-2 justify-content-center">
                <div className="col-md-2"></div>
                <div class="form-group col-md-3">
                  <label for="inputEmail4">User Role</label>
                </div>
                <div class="form-group col-md-5">
                  <input
                    type="email"
                    class="form-control a2"
                    id="inputEmail4"
                    value={Employee[0].userrole}
                    disabled={true}
                  />
                </div>
              </div>
              <div class="row mt-2 justify-content-center">
                <div className="col-md-2"></div>
                <div class="form-group col-md-3">
                  <label for="inputEmail4">Email </label>
                </div>
                <div class="form-group col-md-5">
                  <input
                    type="email"
                    class="form-control a2"
                    id="inputEmail4"
                    value={Employee[0].email}
                    disabled={true}
                  />
                </div>
              </div>
              <div class="row mt-2 justify-content-center">
                <div className="col-md-2"></div>
                <div class="form-group col-md-3">
                  <label for="inputEmail4">Phone No</label>
                </div>
                <div class="form-group col-md-5">
                  <input
                    type="email"
                    class="form-control a2"
                    id="inputEmail4"
                    value={Employee[0].phone}
                    disabled={true}
                  />
                </div>
              </div>
              <div class="row mt-2 justify-content-center">
                <div className="col-md-2"></div>
                <div class="form-group col-md-3">
                  <label for="inputEmail4">Date Of Birth </label>
                </div>
                <div class="form-group col-md-5">
                  <input
                    type="email"
                    class="form-control a2"
                    id="inputEmail4"
                    value={Employee[0].dob}
                    disabled={true}
                  />
                </div>
              </div>
              <div class="row mt-2 ">
                <div className="col-md-2"></div>
                {/* <div className="col-md-3 mt-3">
                  <button
                    type="submit"
                    className="btn form-control  border border-secondary "
                    style={{ background: "#ass" }}
                  >
                    <i class="bi bi-heart" style={{ height: "50px" }}></i>
                    <h6>Add to wishlist</h6>
                  </button>
                </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileOverview;