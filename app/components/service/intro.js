import styles from "./intro.module.css"

export default function Intro({ presentation }) {
  const { title, subtitle, intro } = presentation
  return (
    <div className={styles.intro}>
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
      <p>{intro}</p>
    </div>
  )
}
