import PropTypes from 'prop-types';
import css from './Statistics.module.css';




const Statistics = ({ title, stats, }) => {
  
  const colorForItem = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
   
  }
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
        <ul className={css.list}>
          {stats.map(({ id, label, percentage}) => (
            <li className={css.item} style={{backgroundColor: colorForItem()}} key={id}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          ))}
      </ul>
    </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;