import styles from "@/styles/Modal/SearchModal.module.scss";
import {IoSearch} from "react-icons/io5";

const SearchModal = () => {
  return (
      <div className={styles.searchModal}>
        <div className={styles.searchModalWrapper}>
          <div className={styles.searchBox}>
            <IoSearch size={22} color={"#e0dede"} />
            <input placeholder={`프로젝트 검색하기...`}/>
          </div>
          <div className={styles.resultBox}>
            프로젝트를 검색해보세요.
          </div>
        </div>
      </div>
  )
}

export default SearchModal;
