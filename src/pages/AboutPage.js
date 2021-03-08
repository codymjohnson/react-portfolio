import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
// import Resume from '../assets/resume';

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p>I am a freshly budding full-stack developer that has always had a love for interactive technology since I was 4 years old. I began with videogames, building a deep appreciation for them, and eventually got into computers when I was early on in school. This love of computers, gaming and UX helped me see that my true calling was software development, but my lack of attention in school led me to believe that I missed my shot of that in life, so I followed my secondary passion: Baking. After high school, I got in the culinary world as a pastry chef and did that for about a decade, until financial circumstances (along with encouragement from friends and loved ones) led me to rediscover my passion for computers. I soon after decided to learn full-stack web development to give me the skills neccessary to help me thrive in the expansive world of tech, and I've never looked back.</p>

                <p><strong>My skills include: HTML, CSS, JQuery, React, Node.js, Bootstrap, Ajax, MySQL, Express, MongoDB and React. </strong></p>


            </Content>
        </div>
    );

}

export default AboutPage;