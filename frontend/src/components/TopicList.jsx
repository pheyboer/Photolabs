import React, { useEffect, useState } from 'react';
import TopicListItem from './TopicListItem';

import '../styles/TopicList.scss';

const TopicList = ({ topics }) => {
  // const [topics, setTopics] = useState([]);

  // useEffect(() => {
  //   fetch('').then((response) => console.log(response));
  // }, []);

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem key={topic.id} title={topic.title} />
      ))}
    </div>
  );
};

export default TopicList;
