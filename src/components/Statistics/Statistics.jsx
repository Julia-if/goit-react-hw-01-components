import PropTypes from 'prop-types';
import s from './Statistics.module.css'

export const Statistics = ({title, stats})=>
{ return(
<section className={s.statistics}>
 {title && <h2 className={s.title}>{title}</h2>} 

  <ul className={s.statlist}>
      {stats.map(stat=>(
<li className={s.item} key={stat.id}>
<span className={s.label}>{stat.label}</span>
<span className={s.percentage}> <br/> {stat.percentage}%</span>
</li>  ))
      }
    
   
  </ul>
</section>)};

Statistics.propTypes={
  title: PropTypes.string,
  stats: PropTypes.arrayOf( 
  PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number,
  }))
}
