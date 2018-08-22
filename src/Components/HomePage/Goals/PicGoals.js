import React from 'react';
import { Link, Route } from 'react-router-dom';
import Styles from '../HomePage.css';
import GoalsPage from '../../GoalsPage/Goals';
const picGoals = () => {
        return (
                <div className='icon-box d-flex flex-column  my-3'>
                        <div className={Styles.goodemporium}>
                                <p className=' text-right my-0'>BROWSE BY UN GLOBAL GOALS</p>
                        </div>
                        <div className="d-flex flex-wrap">

                                <a className={Styles.goalbuttons}>
                                        <Link to={'/goal/poverty'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-01.png" alt="" />
                                        </Link>
                                </a>

                                <a className={Styles.goalbuttons}>
                                        <Link to={'/goal/zeroHunger'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-02.png" alt="" />
                                        </Link>
                                </a>
                                <a className={Styles.goalbuttons}>
                                        <Link to={'/goal/goodHealth'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-03.png" alt="" />
                                        </Link>
                                </a>
                                <a className={Styles.goalbuttons}>
                                        <Link to={'/goal/qualityEducation'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-04.png" alt="" />
                                        </Link>
                                </a>
                                <a className={Styles.goalbuttons}>
                                        <Link to={'/goal/genderEquality'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-05.png" alt="" />
                                        </Link>
                                </a>
                                <a className={Styles.goalbuttons}>
                                        <Link to={'/goal/cleanWater'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-06.png" alt="" />
                                        </Link>
                                </a>
                                <a className={Styles.goalbuttons}>
                                        <Link to={'/goal/cleanEnergy'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-07.png" alt="" />
                                        </Link>
                                </a>
                                <a className={Styles.goalbuttons}>
                                        <Link to={'/goal/decentWork'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-08.png" alt="" />
                                        </Link>
                                </a>
                                <a className={Styles.goalbuttons}>
                                        <Link to={'/goal/industry'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-09.png" alt="" />
                                        </Link>
                                </a>
                                <a className={Styles.goalbuttons} >
                                        <Link to={'/goal/reducedInequalities'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-10.png" alt="" />
                                        </Link>
                                </a>
                                <a className={Styles.goalbuttons} >
                                        <Link to={'/goal/sustainableCities'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-11.png" alt="" />
                                        </Link>
                                </a>
                                <a className={Styles.goalbuttons} >
                                        <Link to={'/goal/responsibleConsumption'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-12.png" alt="" />
                                        </Link>
                                </a>
                                <a className={Styles.goalbuttons} >
                                        <Link to={'/goal/clientAction'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-13.png" alt="" />
                                        </Link>
                                </a>
                                <a className={Styles.goalbuttons} >
                                        <Link to={'/goal/lifeBelowWater'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-14.png" alt="" />
                                        </Link>
                                </a>
                                <a className={Styles.goalbuttons} >
                                        <Link to={'/goal/lifeOnLand'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-15.png" alt="" />
                                        </Link>
                                </a>
                                <a className={Styles.goalbuttons} >
                                        <Link to={'/goal/peaceJustice'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-16.png" alt="" />
                                        </Link>
                                </a>
                                <a className={Styles.goalbuttons} >
                                        <Link to={'/goal/partnershipForTheGoals'}>
                                                <img className='img-fluid' src="./../../../assets/img/E_SDG goals_icons-individual-rgb-17.png" alt="" />
                                        </Link>
                                </a>
                        </div>

                        <Route path="/goal/" component={GoalsPage} />

                </div>

        )


};

export default picGoals;