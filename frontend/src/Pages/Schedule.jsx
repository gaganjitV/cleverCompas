import React from 'react';
//import Sidebar from '../components/Sidebar';
import '../style/schedule.css';
const Calendar = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center', color: 'orange' }}>
        January 2024
      </h2>
      <br />
      <table
        style={{
          backgroundColor: 'lightgrey',
          margin: '0 auto',
          borderSpacing: '21px',
          borderCollapse: 'separate',
        }}
      >
        <caption style={{ textAlign: 'top' }}>
          {/* Add a caption or remove this tag if unused */
          
          }
        </caption>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
          <tr>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
          </tr>
          <tr>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
          </tr>
          <tr>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
          </tr>
          <tr>
            <td>31</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;

/*
const Schedule = () => {
  return (
    <div className="schedule-page">
    <Sidebar className="sidebar">
      { /* Sidebar contents  }
    </Sidebar>
    <div className= "main-content">
      {/* Now this us where you will out your html code }
      <h1>Schedule</h1>
      <p>Manage your scheduling needs effectively.</p>
    </div>
  </div>
  )
}

export default Schedule;
*/
