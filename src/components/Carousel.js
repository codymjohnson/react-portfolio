import React from 'react';

import Card from '../components/Card';

import BeerQuiz from '../assets/images/BeerQuiz.png';
import DailyPlanner from '../assets/images/DailyPlanner.png';
import EmployeeDirectory from '../assets/images/EmployeeDirectory.png';
import NoteTaker from '../assets/images/NoteTaker.png';
import TeamProfileGenerator from '../assets/images/TeamProfileGenerator.png';
import WeatherDashboard from '../assets/images/WeatherDashboard.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'BeerQuiz',
                    subTitle: 'A homebrew Quiz App',
                    imgSrc: BeerQuiz,
                    link: 'https://github.com/codymjohnson/javascript-quiz',
                    selected: false
                },
                {
                    id: 1,
                    title: 'DailyPlanner',
                    subTitle: 'An app for planning out your day',
                    imgSrc: DailyPlanner,
                    link: 'https://github.com/codymjohnson/Daily_Planner',
                    selected: false
                },
                {
                    id: 2,
                    title: 'EmployeeDirectory',
                    subTitle: 'an app that dynamically generates random users',
                    imgSrc: EmployeeDirectory,
                    link: 'https://github.com/codymjohnson/React-User-Directory/tree/master',
                    selected: false
                },
                {
                    id: 3,
                    title: 'NoteTaker',
                    subTitle: 'An app for taking notes',
                    imgSrc: NoteTaker,
                    link: 'https://github.com/codymjohnson/11_NoteTaker',
                    selected: false
                },
                {
                    id: 4,
                    title: 'TeamProfileGenerator',
                    subTitle: 'An app that dynamically generates a company team page',
                    imgSrc: TeamProfileGenerator,
                    link: 'https://github.com/codymjohnson/Team_Profile_Generator',
                    selected: false
                },
                {
                    id: 5,
                    title: 'WeatherDashboard',
                    subTitle: 'A social network for developers',
                    imgSrc: WeatherDashboard,
                    link: 'https://github.com/codymjohnson/weather-app',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;