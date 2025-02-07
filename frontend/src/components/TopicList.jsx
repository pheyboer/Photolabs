import React, { useEffect, useState } from 'react';
import TopicListItem from './TopicListItem';

import '../styles/TopicList.scss';

const sampleDataForTopicList = [
  {
    id: '1',
    slug: 'topic-1',
    title: 'Nature',
  },
  {
    id: '2',
    slug: 'topic-2',
    title: 'Travel',
  },
  {
    id: '3',
    slug: 'topic-3',
    title: 'People',
  },
];

const TopicList = () => {
  // const [topics, setTopics] = useState([]);

  // useEffect(() => {
  //   fetch('').then((response) => console.log(response));
  // }, []);

  return (
    <div className="top-nav-bar__topic-list">
      {sampleDataForTopicList.map((topic) => (
        <TopicListItem key={topic.id} label={topic.title} />
      ))}
    </div>
  );
};

export default TopicList;
