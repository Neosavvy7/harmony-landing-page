import React from 'react';
import { ConfigProvider, Tabs } from 'antd';
import talkingwomen from '../Assets/talkingwomen.png';
import calendar from '../Assets/calendar.png';
import management from '../Assets/management.png';


const ServiceContent = [
  {
    label: 'Schedule Appointment',
    key: '1',
    children: 
      <>
        <div className="service-tabs">

          <div className="service-desc">

            <div className="tag">features</div>

            <div className="icons"></div>

            <h1>Manage Client Appointments Effortlessly</h1>
              
            <p>With our scheduler, you can set up appointments as per your convenience and send as many reminders as needed to cut down on no-shows. </p>

            <button className="primary-button service-buttons">Learn More</button>
          </div>

          <div className="service-img">
            <img src={calendar} alt="" />
          </div>
          
        </div>
      </>,
  },
  {
    label: 'Authorization Management',
    key: '2',
    children: 
      <>
        <div className="service-tabs">

          <div className="service-desc">

            <div className="tag">features</div>

            <div className="icons"></div>

            <h1>Efficient Management Authorization</h1>
              
            <p>
            Manage client authorizations based on the total allocated units, adjusting as needed to ensure accuracy and efficiency.</p>

            <button className="primary-button service-buttons">Learn More</button>
          </div>

          <div className="service-img">
            <img src={management} alt="" />
          </div>
          
        </div>
      </>,
  },
  {
    label: 'Insurance Billing',
    key: '3',
    children: 
      <>
        <div className="service-tabs">

          <div className="service-desc">

            <div className="tag">features</div>

            <div className="icons"></div>

            <h1>Automated Insurance Billing</h1>
              
            <p>Streamline your billing process with our automated features, including claim filtering, automatic claim batching, and more.</p>

            <button className="primary-button service-buttons">Learn More</button>
          </div>

          <div className="service-img">
            <img src={calendar} alt="" />
          </div>

          </div>
      </>,
  },
  {
    label: 'Therapy Documentation',
    key: '4',
    children: 
      <>
        <div className="service-tabs">

            <div className="service-desc">

              <div className="tag">features</div>

              <div className="icons"></div>

              <h1>Flexible Templates for Easy Streamlining</h1>
                
              <p>
              Effortlessly manage all your documentation needs by utilizing built-in templates and extensive customization options tailored specifically for your practice.</p>

              <button className="primary-button service-buttons">Learn More</button>
            </div>

            <div className="service-img">
              <img src={management} alt="" />
            </div>
</div>
        
      </>,
  },
]

const Service = () => (
  <div className="service-container">
    <ConfigProvider
    theme={{
        components: {
          Tabs: {
            itemColor: 'green',
            fontSize: '20px',
            fontSizeLG: '25px',
            itemHoverColor: 'lightgreen',
            itemSelectedColor: 'green',
            itemActiveColor: 'white',
            inkBarColor: 'green',
            cardBg: 'linear-gradient(to top, green, #9ac9a6)',
            border: '1px solid green',
          },
        },
    }}>

      <h1 className="service-heading">With the help of HarmonyKloud, a comprehensive practice management tool, ABAs and therapists can provide high-quality patient care while streamlining everyday administrative duties.</h1>
      <Tabs
        defaultActiveKey="1"
        centered
        size='large'
        // type='card'
        
        // tabPosition='left'
        items={new Array(4).fill(null).map((_, i) => {
          return {
            label: ServiceContent[i].label,
            key: ServiceContent[i].key,
            children: ServiceContent[i].children,
          };
        })}
      />
    </ConfigProvider>
  </div>
);
export default Service;

