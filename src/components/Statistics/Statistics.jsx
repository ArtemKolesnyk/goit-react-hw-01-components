import PropTypes from 'prop-types';
import { Section, Title, List, Item, Categorie} from './Statistics.style';




const Statistics = ({ title, stats, }) => { 
  const colorForItem = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`; 
  }
  return (
    <Section>
      {{title} && <Title>{title}</Title>}
        <List>
          {stats.map(({ id, label, percentage}) => (
            <Item style={{backgroundColor: colorForItem()}} key={id}>
              <Categorie>{label}</Categorie>
              <Categorie>{percentage}%</Categorie>
            </Item>
          ))}
      </List>
    </Section>
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
