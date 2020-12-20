import styles from './Skill.module.css'

const Skill = () => (
  <div className={styles.skill}>
    <script type="text/javascript" src="/static/hello.js"></script>
    <select>
      <option value="grapefruit">Grapefruit</option>
      <option value="lime">Lime</option>
      <option selected value="coconut">Coconut</option>
      <option value="mango">Mango</option>
    </select>
  </div>
);

export default Skill;
