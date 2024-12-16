import React, { useState } from 'react';
import '../components/css/CarbonCreditCalculation.css';
import { useNavigate } from 'react-router-dom'; 

const CarbonCreditCalculation = () => {
    const navigate = useNavigate(); 
    navigate("/CalcIndividual"); 

  return (
    <div className="carbon-credit-container">
      <h1 className="title">How to Calculate Carbon Credits</h1>
      <p className="intro-text">
        Carbon credits are a way to offset greenhouse gas emissions by investing in projects that reduce or remove carbon dioxide (CO₂) from the atmosphere. The calculation of carbon credits varies depending on the type of project (e.g., tree planting, renewable energy). Below, we'll provide instructions on how to calculate carbon credits for different projects.
      </p>

      <section className="calculation-steps">
        <h2 className="sub-title">Step-by-Step Guide</h2>

        <div className="step">
          <h3 className="step-title">1. Identify Your Project Type</h3>
          <p>
            The first step is to identify the type of project you're involved in. Carbon credit projects can range from reforestation to renewable energy projects. Each project type has different calculation methods.
          </p>
        </div>

        <div className="step">
          <h3 className="step-title">2. Measure Emission Reduction or Sequestration</h3>
          <p>
            Next, calculate the amount of carbon dioxide (CO₂) your project has either reduced or removed from the atmosphere. For example, in a reforestation project, the amount of CO₂ sequestered by trees over their lifetime is measured. In renewable energy projects, calculate the CO₂ emissions avoided by generating clean energy.
          </p>
        </div>

        <div className="step">
          <h3 className="step-title">3. Use Carbon Credit Standards</h3>
          <p>
            Use an established carbon credit standard (e.g., Verified Carbon Standard (VCS), Gold Standard) to determine how many credits your project qualifies for. These standards have specific methodologies for calculating emissions reductions and may include additional factors like leakage and additionality.
          </p>
        </div>

        <div className="step">
          <h3 className="step-title">4. Apply the Formula</h3>
          <p>
            The basic formula for carbon credit calculation is:
          </p>
          <pre className="formula">
            Carbon Credits = (CO₂ Emissions Reduced or Sequestered) / (1 metric ton of CO₂)
          </pre>
          <p>
            For example, if your project reduces 10,000 metric tons of CO₂, then you would earn 10,000 carbon credits.
          </p>
        </div>

        <div className="step">
          <h3 className="step-title">5. Verify and Register Your Carbon Credits</h3>
          <p>
            Once your calculation is complete, the carbon credits must be verified by an accredited third-party organization. After verification, the credits are registered and made available for sale or trade.
          </p>
        </div>
      </section>

      <div className="calculation-button-container">
        <button className="calculate-button" onClick={() => navigate('/CalcIndividual')}>
          Calculate Carbon Credits
        </button>
      </div>
    </div>
  );
};

export default CarbonCreditCalculation;
