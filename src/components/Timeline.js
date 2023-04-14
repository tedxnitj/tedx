import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TimelineItem } from './TimelineItem';
import './Timeline.css'



const timelineData = [
    {
        text: 'Inauguration ceremony',
        date: '12:00-12:30 PM',
      
    },
    {
        text: 'Mr. Sandeep Sarma (Talk + Interaction)',
        date: '12:30-1:10 PM',
      
    },
    {
        text: ' Rock Band Cultural Performance',
        date: '1:10-1:45 PM',
      
    },
    {
        text: 'Dr. Deepti Pinto',
        date: '1:15-1:55 PM',
      
    },
    {
        text: 'Lunch',
        date: '1:55-2:30 PM',
      
    },
    {
        text: 'Interaction Session',
        date: '2:30-2:40 PM',
      
    },
    {
        text: ' Beebom (Talk + Gadgets Giveaway )',
        date: '2:40-3:20 PM',
      
    },
    {
        text: 'Giveaway / Game session (With Game-On Coupons)',
        date: '3:20-3:40 PM',
      
    },
    {
        text: 'Chef Pankaj (Talk + Interaction)',
        date: '3:40-4:20 PM',
      
    },
    {
        text: ' Networking Session',
        date: '4:20-4:40 PM',
      
    },
    {
        text: 'Classical Dance',
        date: '4:40-4:45 PM',
      
    },
    {
        text: 'SNACKS',
        date: '4:45-5:10 PM',
      
    },

    {
        text: 'Prof V. Adimurthy (Talk + Interaction)',
        date: '5:10-5:50 PM',
      
    },
    {
        text: 'Folk Music Cultural Performance',
        date: '5:50-5:55 PM',
      
    },
    {
        text: 'Vote of Thanks',
        date: '5:55-6:00 PM',
      
    },

   
]


export const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container" id='timeline'>
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

