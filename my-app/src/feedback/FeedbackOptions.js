function FeedbackOptions(options, onLeaveFeedback) {
  console.log(options);
  return Object.keys(options).map(item => (
    <button type="button" name={item} key={item} onClick={onLeaveFeedback}>
      {item[0].toUpperCase() + item.slice(1)}
    </button>
  ));
}
export default FeedbackOptions;

/* 
import React from 'react';
import PropTypes from 'prop-types';
import s from './friend.module.css';

function Friend({avatar, name, isOnline}) {
    return (
        <li className={s.item}>
            <span className={isOnline ? s.online : s.offline}></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
        </li>
    )
}
 
Friend.propTypes = {
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
};

export default Friend;

import Statistics from './statistics';
import PropTypes from 'prop-types';
import s from './statistics.module.css'

function StatisticsList({title, stats})
{
  return (<section className={s.statistics}>
    {title && <h2 className={s.title}>{title}</h2>}
    <ul className={s.statList}>
      {stats.map(item => (
          <Statistics
            key={item.id}
            label={item.label}
            percentage={item.percentage}
            />
      ))}
    </ul>
    </section>
  )
}

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }),
  ),
};
export default StatisticsList;
*/
