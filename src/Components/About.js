import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileWink, faCode } from '@fortawesome/free-solid-svg-icons'
import { Helmet } from 'react-helmet'
import resume from '../Theme/files/NINO-MANALO-CASUPANAN-CV-20220420.docx'
import resume2022 from '../Theme/files/SOFTWARE-ENGINEER-1.pdf'


const Header = styled.h1`
	animation: left 1s ease-in-out;

	@keyframes left {
		from {
			transform: translateX(100%);
		}

		to {
			transform: translateX(0);
		}
	}
`
const SubContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	text-transform: uppercase;
`


const LinkDiv = styled.div`
	height: 100%;
	width: 100%;
	text-align: center;
	padding: 15px 0;
`

const MinDiv = styled.div`
	width: 100%;
	background: rgb(32, 32, 32, 0.5);
    overflow: hidden;
    text-align: center;
    font-size: 24px;
`

const SpanDiv = styled.span`
    color: red;
`

const Item = styled.span`
    font-size: 18px;
`

const ExpCont = styled.div`
    border-bottom: 1px solid #fff;
    width: auto;
    text-decoration: none;
    padding-top: 10px;
`

const RowDiv = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-position: center;
  	background-size: cover;
  	
  	a:hover {
  	    color: #fff;
  	    text-decoration: none;
  	}
`

const Img = styled.img`
    height: 100px;
	border-radius: 50%;
	border: 1px solid #00ced1;
	margin: 0px 10px;
`

const Link = styled.a`
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    font-size: 16px;
    background:${props => props.color || "#0077B5"} ;
    margin: 5px;
	padding: 5px;
	border-radius: 5px;
`


class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            github: {}
        }
    }

    componentWillMount() {
        (async () => {
            let data = await fetch(`https://api.github.com/users/nnocsupnn`);
            let user = await data.json();

            console.log(user)

            this.setState({
                github: user
            })
        }).bind(this)()
    }


    render() {
        return (
            <div className="container">
                <Helmet>
                    <title>About</title>
                </Helmet>
                <MinDiv>
                    <Header>ABOUT >></Header>
                </MinDiv>
                <br/>
                <RowDiv>
                    <Link href={resume2022} download title="Download Resume" color="transparent">
                        <Img src={this.state.github.avatar_url}/>
                    </Link>
                </RowDiv>
                <RowDiv>
                    <Link href={resume} download title='My Old Resume from 2017 - 2021'>OLD CV 2017 - 2021</Link>
                </RowDiv>

                <SubContainer>
                    <MinDiv>
                        <h2>Experiences</h2>
                        <ExpCont>
                            <SpanDiv>Pasig, One San Miguel - 2017/18</SpanDiv>
                            <ul>
                                <li>IT Desktop/Programmer</li>
                            </ul>
                        </ExpCont>
                        <ExpCont>
                            <SpanDiv>Makati - 2018/19</SpanDiv>
                            <ul>
                                <li>Software Developer</li>
                                <li>Sr Software Developer</li>
                            </ul>
                        </ExpCont>
                        <ExpCont>
                            <SpanDiv>Taguig, BGC - 2019/21</SpanDiv>
                            <ul>
                                <li>Full Stack Developer</li>
                            </ul>
                        </ExpCont>
                        <ExpCont>
                            <SpanDiv>Makati, 2021</SpanDiv>
                            <ul>
                                <li>Applications Analyst - Team Lead (2022)</li>
                                <li>Application Engineer (2021)</li>
                            </ul>
                        </ExpCont>
                        <Item className="fa fa-code"></Item>
                        <SpanDiv>Programming Languages</SpanDiv>
                        <br/>Javascript
                        <br/>PHP
                        <br/>C#
                        <br/>Python
                        <br/>Dart
                        <br/>Kotlin (Spring Boot Java)
                    </MinDiv>
                </SubContainer>
            </div>
        )
    }
}

export default About;