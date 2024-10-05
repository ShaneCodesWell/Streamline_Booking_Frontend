import React, { useState } from "react";
import styles from "./checklistTab.module.css";

interface ChecklistTabProps {
  headerText: string;
  subText: string;
  color: string;
}

const ChecklistTab: React.FC<ChecklistTabProps> = ({ headerText, subText, color }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.card}>
      <div className={styles.colorStrip} style={{ backgroundColor: color }}></div>
      <div className={styles.content}>
        <h3 className={styles.header}>{headerText}</h3>
        <p className={styles.subtext}>{subText}</p>
      </div>
      <div className={styles.options}>
        <button onClick={toggleDropdown} className={styles.optionsButton}>
          &#x22EE;
        </button>
        {isDropdownOpen && (
          <ul className={styles.dropdown}>
            <li>Edit</li>
            <li>Delete</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ChecklistTab;
