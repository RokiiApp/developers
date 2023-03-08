import styles from './styles.module.css';

type WrapperProps = {
  label?: string;
  description?: string;
  children: JSX.Element;
};

export const Wrapper = ({ label, description, children }: WrapperProps) => (
  <div className={styles.item}>
    {label && <label className={styles.label}>{label}:</label>}
    <div className={label ? styles.itemValue : styles.itemValueWithoutLabel}>
      {children}
      <div className={styles.itemNotice}>{description}</div>
    </div>
  </div>
);
