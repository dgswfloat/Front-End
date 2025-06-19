import styles from "@/styles/Card/FeedCard.module.scss";
import Image from "next/image";

interface FeedCardProps {
  username: string,
  description: string,
}

const FeedCard = ({ username, description }: FeedCardProps) => {
  return (
      <div className={styles.feedCard}>
        <Image src={'/Images/ExampleProfile.jpeg'} alt={'ExampleProfileImage'} className={styles.profileImage} width={36} height={36} />
        <div>
          <h2>{username}</h2>
          <div>
            <h3>{description}</h3>
          </div>
        </div>
      </div>
  )
}

export default FeedCard;
