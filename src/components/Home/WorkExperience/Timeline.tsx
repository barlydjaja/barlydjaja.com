"use client"

import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineItem from '@/components/Home/WorkExperience/TimelineItem';
import Image from 'next/image';

const Timeline = () => {
  return (
    <VerticalTimeline>
      <TimelineItem
        className="vertical-timeline-element--work"
        date="May 2022 - present"
        iconClassName='bg-white flex items-center justify-center'
        icon={<Image src='https://shopee.co.id/favicon.ico' alt='ic-shpee' width={20} height={20}/>}
      >
        <h3 className="vertical-timeline-element-title font-bold">Shopee Indonesia</h3>
        <h4 className="vertical-timeline-element-subtitle font-bold">Jakarta, ID</h4>
        <p>
          Frontend engineer in Shopee Enterprise Efficiency Team
        </p>
        <p>React, React Native, Vue, Typescript, Javascript</p>
      </TimelineItem>
      <TimelineItem
        className="vertical-timeline-element--work"
        date="January 2021 - 2022"
        textClassName='border-gradient2'
        iconClassName='button-accent'
        icon={<span/>}
      >
        <h3 className="vertical-timeline-element-title font-bold">KUFI</h3>
        <h4 className="vertical-timeline-element-subtitle font-bold">Jakarta, ID</h4>
        <p>
          Frontend engineer in Peer-to-Peer lending platform
        </p>
        <p>Vue, Typescript, Javascript</p>
      </TimelineItem>
    </VerticalTimeline>
  );
};

export default Timeline;
