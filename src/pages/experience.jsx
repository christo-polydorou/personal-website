import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Hack4ImpactLogo from "../images/hack4impact_logo.png"
import Pearsonlogo from "../images/pearsonlogo.png"
import StealthLogo from "../images/stealthlogo.png"
import SayKidLogo from "../images/saykidlogo.png"


export default function CustomizedTimeline() {

    return (
        <>
            <p  style={{ marginBottom: '40px' }}>During my time in college I was fortunate enough to work with a lot of amazing organizations. Here are some of them:</p>
            <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="#6DB8BA"
                >
                JANUARY - MARCH&nbsp;&nbsp;23'
                </TimelineOppositeContent>
                <TimelineSeparator >
                <TimelineDot color="inherit">
                    <img src={StealthLogo} alt="Stealth startup logo"/>
                </TimelineDot>
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h5" component="span" color="#F8F8FF">
                    Stealth Startup
                </Typography>
                <Typography variant="body1" color="#DCDCDC" mb="12px" mt="5px">
                    Software Engineer Intern
                </Typography>
                <Typography color="#A9A9A9" gutterBottom>Developed and optimized a suite of CRUD screens using TypeScript React and MaterialUI.</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="#6DB8BA"
                >
                MAY - SEPTEMBER&nbsp;&nbsp;23'
                </TimelineOppositeContent>
                <TimelineSeparator >
                <TimelineConnector sx={{ bgcolor: '#A9A9A9' }} />
                <TimelineDot color="inherit">
                    <img src={Pearsonlogo} alt="Pearson logo"/>
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: '#A9A9A9' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h5" component="span" color="#F8F8FF">
                    Pearson VUE
                </Typography>
                <Typography variant="body1" color="#DCDCDC" mb="12px" mt="5px">
                    Software Engineer Intern
                </Typography>
                <Typography color="#A9A9A9">Worked on sentiment analysis, web scraping, database management, and AI-powered applications as part of the ML team.</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="#6DB8BA"
                >
                SEPTEMBER&nbsp;&nbsp;23' - MARCH&nbsp;&nbsp;24'
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: '#A9A9A9' }}/>
                <TimelineDot color="inherit">
                    <img src={Hack4ImpactLogo} alt="Hack4Impact logo"/>
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: '#A9A9A9' }}/>
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h5" component="span" color="#F8F8FF">
                    Hack4Impact
                </Typography>
                <Typography variant="body1" color="#DCDCDC" mb="12px" mt="5px">
                    Backend Developer
                </Typography>
                <Typography color="#A9A9A9">Refactored AWS Lambda functions for web app that provides assistance for local Somali women in Minneapolis.</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="#6DB8BA"
                >
                DECEMBER&nbsp;&nbsp;23'
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: '#A9A9A9' }}/>
                <TimelineDot color="inherit">
                    <img src={SayKidLogo} alt="Saykid logo"/>
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: '#A9A9A9' }}/>
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h5" component="span" color="#F8F8FF">
                    SayKid
                </Typography>
                <Typography variant="body1" color="#DCDCDC" mb="12px" mt="5px">
                    Game Developer Extern
                </Typography>
                <Typography color="#A9A9A9">Developed new process to host Alexa Skill games using Voiceflow Dialog and AWS Lambda.</Typography>
                </TimelineContent>
            </TimelineItem>
            </Timeline>
        </>
    );
}