import { Circle } from "@mui/icons-material"
import { useContext } from "react"
// import { Col, Container, Row } from "react-bootstrap"
import OfferItem from "../components/OfferItem"
import ToolRentelContext from "../utils/ToolRentelContext"
// import styles from "./profile.module.css"

function Profile() {
  const { profile, offers, image, user, settings, bio, item, userName } = useContext(ToolRentelContext)
  if (!profile) return <h1>Loading...</h1>

  const myoffers = offers.filter(offer => offer.owner._id == profile._id)

  return (
    <body>
      <div
        style={{
          maxWidth: "93.5rem",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        <div style={{ padding: "5rem 0" }}>
          <div
            style={{
              float: "left",
              width: "calc(33.333% - 1rem)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "3rem",
              borderRadius: "50%",
              clipPath: "circle()",
            }}
          >
            <img src={profile.avatar} />
          </div>
          <div
            style={{
              float: "left",
              width: "calc(66.666% - 2rem)",
              marginTop: "1.1rem",
            }}
          >
            <h1
              style={{
                display: "inline-block",
                fontSize: "3.2rem",
                fontWeight: "300",
              }}
            >
              {profile.firstName} {profile.lastName}
            </h1>
          </div>

          <div
            style={{
              float: "left",
              width: "calc(66.666% - 2rem)",
            }}
          >
            <p>{profile.email}</p>
          </div>
        </div>
      </div>
      

      <main>
        <div
          style={{
            maxWidth: "93.5rem",
            margin: "0 auto",
            padding: "0 2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              margin: "-1rem -1rem",
              paddingBottom: "3rem",
            }}
          >
            <div
              style={{
                position: "relative",
                flex: "1 0 22rem",
                margin: "1rem",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              {myoffers.map(offer => (
                <OfferItem offer={offer} inProfile={true} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </body>
  )
}

export default Profile
