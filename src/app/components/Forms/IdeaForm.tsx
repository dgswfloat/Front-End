import styles from "@/styles/Forms/IdeaForm.module.scss"
import { FaImage } from "react-icons/fa";
import Button from "@/app/components/Buttons/Button";

const IdeaForm = () => {
  return (
      <form className={styles.ideaFormContainer}>
        <div className={styles.ideaFormWrapper}>
          <div className={styles.titleBox}>
            <h3>아이디어를 작성해보세요.</h3>
          </div>
          <div className={styles.formBox}>
            <textarea placeholder={`무엇을 생각하고 있나요?`}/>
          </div>
          <div className={styles.buttonBox}>
            <FaImage />
            <Button title={"아이디어 남기기"} className={''} />
          </div>
        </div>
      </form>
  )
}

export default IdeaForm;
