import React from 'react';
import CharityCause from './CharityCause';

const charityDetailsTable = () => {
return (
<div className="container">  
<table class="table">
          <col width="150" />
          <col width="490px" />
          <tbody>
            <tr>
              <td>CEO</td>
              <td>Alan Graham</td>
            </tr>
            <tr>
              <td>Founded</td>
              <td>1998</td>
            </tr>
            <tr>
              <td>Employees</td>
              <td>26</td>
            </tr>
            <tr>
              <td>Global Goals</td>
              <td><CharityCause /></td>
            </tr>
            <tr>
              <td>Industry</td>
              <td>Food</td>
            </tr>

            <tr>
              <td>Board Members</td>
              <td>Alan Graham, J.P. Patterson, Bruce Agness, Neal Nolan, Brian McClure, Katie Zunker, Rob Reynolds, Meagan McCoy Jones, Bill McLellan, Larry Smith, Mark White</td>
            </tr>
            <tr>
              <td>Tags</td>
              <td><u>poverty, homeless, meals, delivery, transportation, education</u></td>
            </tr>
            <tr>
              <td>Mission</td>
            </tr>
          </tbody>
        </table>
        <p>Mobile Loaves & Fishes began when five parishioners of St. John Neumann Catholic Church in Austin, Texas boldly answered God’s call to “love your neighbor as yourself.” Alan Graham and his friends began delivering meals out of the back of a minivan
          to men and women they found living on the streets. Graham readily admits that the group’s original approach for serving the homeless had some flaws, but with the help of a formerly homeless man they perfected the model that Mobile Loaves & Fishes
          successfully uses today.</p>

</div>
)


};

export default charityDetailsTable;