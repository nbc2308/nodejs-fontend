import iconService from "@/assets/icons/10.svg";
import iconService2 from "@/assets/icons/11.svg";
import iconService3 from "@/assets/icons/12.svg";
import iconService4 from "@/assets/icons/13.svg";

const Services = () => {
  return (
    <section className="services">
      <div className="container-fluid">
        <div className="service-list">
          <div className="service-item">
            <img src={iconService} className="service__image" />
            <div className="service-info">
              <h4 className="service__name">High Quality</h4>
              <p className="service__description">crafted from top materials</p>
            </div>
          </div>
          {/*End service-item*/}
          <div className="service-item">
            <img src={iconService2} className="service__image" />
            <div className="service-info">
              <h4 className="service__name">High Quality</h4>
              <p className="service__description">crafted from top materials</p>
            </div>
          </div>
          {/*End service-item*/}
          <div className="service-item">
            <img src={iconService3} className="service__image" />
            <div className="service-info">
              <h4 className="service__name">High Quality</h4>
              <p className="service__description">crafted from top materials</p>
            </div>
          </div>
          {/*End service-item*/}
          <div className="service-item">
            <img src={iconService4} className="service__image" />
            <div className="service-info">
              <h4 className="service__name">High Quality</h4>
              <p className="service__description">crafted from top materials</p>
            </div>
          </div>
          {/*End service-item*/}
        </div>
      </div>
    </section>
  );
};

export default Services;
