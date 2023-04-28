import styles from "./Avatar.module.css";

export const Avatar = ({ hasBorder = true, src }) => {
  // const hasBorder = props.hasBorder != false;

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
};
