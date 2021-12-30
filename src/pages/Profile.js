import { useContext } from "react"
// import { Col, Container, Row } from "react-bootstrap"
import OfferItem from "../components/OfferItem"
import ToolRentelContext from "../utils/ToolRentelContext"
import styles from "./profile.module.css"

function Profile() {
  const { profile, offers, image, user, settings, bio, item, userName } = useContext(ToolRentelContext)
  if (!profile) return <h1>Loading...</h1>

  const myoffers = offers.filter(offer => offer.owner._id == profile._id)

  return (
    <body>
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.profileImage}>
            <img src={profile.avatar} />
          </div>

          <div className={styles.profile1UserSettings}>
            <h1 className={styles.profileUserName}>
              {profile.firstName} {profile.lastName}
            </h1>
          </div>

          <div className={styles.profileBio}>
            <p>{profile.email}</p>
          </div>
        </div>
      </div>

      <main>
        <div className={styles.container}>
          <div className={styles.gallery}>
            <div className={styles.galleryItem}>
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
