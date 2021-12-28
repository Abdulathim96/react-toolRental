import { useContext } from "react"
// import { Col, Container, Row } from "react-bootstrap"
import OfferItem from "../components/OfferItem"
import ToolRentelContext from "../utils/ToolRentelContext"

function Profile() {
  const { profile, offers } = useContext(ToolRentelContext)
  if (!profile) return <h1>Loading...</h1>

  const myoffers = offers.filter(offer => offer.owner._id == profile._id)

  return (
    <body
      style={{
        background: "#654ea3",
        background: "linear-gradient(to right, #e96443, #904e95)",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <div class="row py-5 px-4">
        <div class="col-md-5 mx-auto">
          {/* <!-- Profile widget --> */}
          <div class="bg-white shadow rounded overflow-hidden">
            <div
              class="px-4 pt-0 pb-4 cover"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1530305408560-82d13781b33a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80);",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div class="media align-items-end profile-head">
                <div class="profile mr-3">
                  <img src={profile.avatar} alt="..." width="130" class="rounded mb-2 img-thumbnail" />
                </div>
                <div class="media-body mb-5 text-white">
                  <h4 class="mt-0 mb-0">Mark Williams</h4>
                  <p class="small mb-4">
                    {" "}
                    <i class="fas fa-map-marker-alt mr-2"></i>New York
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-light p-4 d-flex justify-content-end text-center">
              <ul class="list-inline mb-0">
                <li class="list-inline-item">
                  {profile.firstName} {profile.lastName}
                </li>
                <br />
                <li class="list-inline-item">
                  <small class="font-weight-bold mb-0 d-block">{profile.email}</small>
                </li>
              </ul>
            </div>
            <div class="py-4 px-4">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <h5 class="mb-0">Recent photos</h5>
                <a href="#" class="btn btn-link text-muted">
                  Show all
                </a>
              </div>
              {myoffers.map(offer => (
                <OfferItem offer={offer} inProfile={true} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Profile
