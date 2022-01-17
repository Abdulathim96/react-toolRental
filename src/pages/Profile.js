import { Circle } from "@mui/icons-material"
import { useContext } from "react"
// import { Col, Container, Row } from "react-bootstrap"
import OfferItem from "../components/OfferItem"
import RequestItem from "../components/RequestItem"
import ToolRentelContext from "../utils/ToolRentelContext"
import "./profile.css"

function Profile() {
  const { profile, offers, requests} = useContext(ToolRentelContext)
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
            </div>
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
              {myrequests.map(request => (
                <RequestItem request={request} inProfile={true} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Profile
