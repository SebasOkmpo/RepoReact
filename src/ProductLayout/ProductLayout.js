const ProductLayout = ({ title, description, imageSrc, layoutClass }) => (
    <div className={`layout ${layoutClass}`}>
      <div className="section" id="features">
        <div className="text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="image">
          <img src={imageSrc} alt={title} />
        </div>
      </div>
    </div>
  );