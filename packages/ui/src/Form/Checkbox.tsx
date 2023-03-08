import styles from './styles.module.css';

type CheckboxProps = {
  label?: string;
  value?: boolean;
  onChange: (value: boolean) => void;
  description?: string;
};

export const Checkbox = ({ label, value, onChange, description }: CheckboxProps) => (
  <div className={styles.item}>
    <div className={styles.itemValueWithoutLabel}>
      <label>
        <input
          type="checkbox"
          checked={value}
          onChange={({ target }) => onChange(target.checked)}
          className={styles.checkbox}
        />
        {label}
      </label>
      <div className={styles.itemNotice}>{description}</div>
    </div>
  </div>
);
