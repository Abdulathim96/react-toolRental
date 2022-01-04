import { Circle } from "@mui/icons-material"
import { useContext } from "react"
// import { Col, Container, Row } from "react-bootstrap"
import OfferItem from "../components/OfferItem"
import RequestItem from "../components/RequestItem"
import ToolRentelContext from "../utils/ToolRentelContext"
import "./profile.css"

function Profile() {
  const { profile, offers, requests , image, user, settings, bio, item, userName } = useContext(ToolRentelContext)
  if (!profile) return <h1>Loading...</h1>

  const myoffers = offers.filter(offer => offer.owner._id == profile._id)
  const myrequests = requests.filter(request => request.owner._id == profile._id)

  return (

    <div className="body">
      <header>
        <div class="container">
          <div class="profile">
            <div class="profile-image">
              <img
                src={profile.avatar}
                alt=""
                style={{
                  clipPath: "circle()",
                  width: "150px",
                }}
              />
            </div>

            <div class="profile-user-settings">
              <h1 class="profile-user-name">
                {profile.firstName} {profile.lastName}
              </h1>

              {/* <button class="btn profile-edit-btn">Edit Profile</button> */}

              {/* <button class="btn profile-settings-btn" aria-label="profile settings">
                <i class="fas fa-cog" aria-hidden="true"></i>
              </button> */}
            </div>
            {/* <div class="profile-stats">
              <ul>
              <li>
              <span class="profile-stat-count">164</span> posts
              </li>
              <li>
              <span class="profile-stat-count">188</span> followers
              </li>
              <li>
              <span class="profile-stat-count">206</span> following
              </li>
              </ul>
            </div> */}

            <div class="profile-bio">
              <p class="profile-real-name">{profile.email}</p>
            </div>
          </div>
        </div>
            <hr />
      </header>
      <main>
        <div></div>
        <div class="container">
          <div class="gallery">
            <div class="gallery-item" tabindex="0">
              {myoffers.map(offer => (
                <OfferItem offer={offer} inProfile={true} />
              ))}
            </div>

            <div class="gallery-item" tabindex="0">
              {/* <img
                src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop"
                class="gallery-image"
                alt=""
              /> */}
              {requests.map(request => (
                <RequestItem request={request} key={request._id} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Profile
