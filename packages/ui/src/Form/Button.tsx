import styles from './styles.module.css';

type ButtonProps = {
  label?: string;
  onClick: (target: any) => void;
  description?: string;
};

export const Button = ({ label, onClick, description }: ButtonProps) => (
  <button
    title={description}
    onClick={({ target }) => onClick(target)}
    className={styles.button}
  >{label}</button>
);
