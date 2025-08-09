import React from "react";
import ProjectCard from "./ProjectCard";
import blinkit from '../assets/blinkit.png';
import swiggy from '../assets/swiggy.png'
import trade from '../assets/trade.png'
import salesp from '../assets/salesp.png'
import stockss from '../assets/stockss.png'

function Projects() {
    return (
        <div id="projects" className=" w-full pt-10 selection:bg-[#59FF45] selection:text-black">
            <div className="w-full sm:max-w-7xl mx-auto sm:px-6 md:px-12 font-[Anton]">
                <div className="flex justify-center items-center">
                    <h1 className="text-white text-center sm:pt-10 pt-10 font-[Anton] text-7xl md:text-7xl">Projects</h1>
                </div>

                <div className="flex flex-col gap-10 sm:gap-6 md:flex-wrap md:flex-row md:justify-center w-full mt-6">
                    <ProjectCard
                        num={1}
                        image={blinkit}
                        title='Blinkit Analysis'
                        description='Description'
                        type='PowerBI'
                        about='This dashboard provides comprehensive analytics for Blinkit operations, offering insights into sales trends, inventory health, customer behavior, product preferences, payment methods, customer feedback, and regional performance. The dashboard facilitates data-driven decision-making for business optimization and growth strategies.'
                        skill='PowerBI, Data Analysis, Data visualization'
                        link="https://github.com/Yashvi-Vekariya/PowerBI/tree/main/Blinkit"
                    />

                    <ProjectCard
                        num={2}
                        title='Mutual Fund Analysis'
                        description='Description'
                        type='Data Analysis + ML(Jupyter)'
                        about='Mutual Fund Investment Predictor, a data-driven investment analysis platform designed to identify the best-performing mutual funds based on individual financial goals and investment timelines. The system analyzes over 1,277 funds from top fund families using web scraping techniques and machine learning algorithms. The platform offers comprehensive fund evaluation through risk-return analysis, expense ratio impact assessment, multi-timeframe performance prediction (3, 5, and 10-year horizons), and automated identification of underperforming investments. Built with Python, the solution achieves 92% accuracy in predicting top-performing funds using Random Forest classification, while providing actionable investment recommendations through interactive visualizations and correlation analysis of key financial metrics including Alpha, Beta, Sharpe Ratio, and Standard Deviation.'
                        skill='ML, Matplotlib, Seaborn, EDA, pandas, NumPy, Python'
                        link="https://github.com/Yashvi-Vekariya/Mutual-Fund-Predictive-Analytics"
                    />

                    <ProjectCard
                        num={3}
                        image={swiggy}
                        title='Swiggy Analysis'
                        description='Description'
                        type='PowerBI'
                        about='This project involves analyzing and cleaning the dataset provided by Swiggy. Swiggy is a popular food delivery service in India, and the dataset includes various tables related to food items, menus, orders, order types, restaurants, and users. The goal is to clean the data, format the tables, and store the processed dataset for further analysis.'
                        skill='PowerBI, Data Analysis, Data visualization'
                        link="https://github.com/Yashvi-Vekariya/PowerBI/tree/main/Swiggy_Data_analysis_Project"
                    />

                    <ProjectCard
                        num={4}
                        title='Store Inventory Demand Analysis & Optimization'
                        description='Description'
                        type='Data Analysis(Jupyter)'
                        about='Store Inventory Demand Analysis & Optimization, a comprehensive data analytics project designed to optimize healthcare inventory management through advanced forecasting techniques and statistical modeling. The project analyzes historical medical inventory data to minimize drug shortages and maximize supply availability in healthcare institutions. The system integrates multiple forecasting models including ARIMA, Holt-Winters, VECM, and Random Forest regression to achieve demand prediction accuracy with MAPE under 10%. Built using Excel, SQL, Python, and Power BI, the solution delivers automated stock notifications, real-time inventory monitoring, and interactive dashboards that resulted in 30% reduction in lost sales. The project addresses critical challenges in healthcare supply chain management through data-driven insights, feature engineering, and optimization strategies for reorder points and order quantities.'
                        skill='Matplotlib, Seaborn, EDA, pandas, NumPy, Python'
                        link="https://github.com/Yashvi-Vekariya/Inventory-Optimization-Analysis-Forecasting"
                    />

                    <ProjectCard
                        num={5}
                        image={stockss}
                        title='Stock Trading'
                        description='Description'
                        type='Excel'
                        about='This dashboard, created using MS Excel, is designed to analyze stock-related tasks such as trading and backtesting strategies through a visual and interactive interface. Users can input details like the number of trades (Sr. No.), stock name, market cap category (Large, Midcap, Small), entry price, stoploss, and trade outcome Win/Loss denoted by w or l to track and evaluate trading performance effectively.'
                        skill='Excel, Pivot table, Data visualizations, Data Analysis'
                        link="https://github.com/Yashvi-Vekariya/Excel-Projects/tree/main/Stock-Trading-Analysis"
                    />

                    <ProjectCard
                        num={6}
                        title='SmartGuard, a multi-stage vulnerability detection'
                        description='Description'
                        type='Machine Learning'
                        about='SmartGuard, a multi-stage vulnerability detection framework designed to identify and mitigate security vulnerabilities in smart contracts before deployment. The system addresses critical blockchain security challenges through a hierarchical three-stage architecture comprising VulnScreener (binary classifier using MLP), VulnAnalyzer (CNN for specific vulnerability identification), and VulnValidator (Random Forest for output refinement). Built with advanced machine learning techniques, the framework leverages CodeBERT, Longformer, and CodeT5 for comprehensive semantic and syntactic feature extraction from Solidity code, supporting up to 4,096 tokens to handle complex smart contracts. The project includes custom data splitting algorithms to ensure balanced vulnerability distribution across training and testing datasets, and features an interactive Streamlit web application for dataset exploration and model analysis. SmartGuard represents a significant advancement in blockchain security, providing robust and interpretable vulnerability detection to build secure and trustworthy smart contract ecosystems.'
                        skill='ML, Matplotlib, Seaborn, EDA, pandas, NumPy, Python, Streamlit'
                        link="https://github.com/Yashvi-Vekariya/Smart-Contract-Vulnerability-Detector"
                    />
                    <ProjectCard
                        num={7}
                        title='Product Recommendation System for Amazon'
                        description='Description'
                        type='Data Analysis + ML'
                        about='Product Recommendation System for Amazon, a comprehensive machine learning project designed to enhance customer experience and drive sales through personalized product recommendations using Amazon electronic product reviews dataset. The system addresses critical e-commerce challenges including data sparsity, positive rating bias, and cold start problems through multiple recommendation approaches. Built using Python and advanced collaborative filtering techniques, the project implements five distinct models: Knowledge/Rank-Based, User-User Collaborative Filtering, Item-Item Collaborative Filtering, Matrix Factorization-Based, and Hybrid Recommendation systems. The hybrid model achieved optimal performance with RMSE of 0.879 and Precision@10 of 0.522, effectively balancing accuracy, diversity, and relevance. The solution analyzes 78,798 user-product interactions and provides actionable insights for improving customer engagement, conversion rates, and business outcomes through data-driven recommendation strategies.'
                        skill='ML, Matplotlib, Seaborn, EDA, pandas, NumPy, Python'
                        link="https://github.com/Yashvi-Vekariya/Product-Recommendation-System"
                    />

                    <ProjectCard
                        num={8}
                        title='Air Pollution Analysis '
                        description='Description'
                        type='Machine Learning'
                        about='Air Pollution Analysis Dashboard, an interactive Streamlit-powered web application designed to visualize and analyze air quality data across Indian cities over time. The dashboard provides comprehensive insights into Air Quality Index (AQI) trends, pollutant levels, and seasonal variations through dynamic data visualization. Users can explore AQI patterns by city and year, analyze distribution across different AQI buckets, and monitor major pollutants including PM2.5, PM10, NO2, CO, and other harmful substances. Built with Python, Streamlit, Pandas, Matplotlib, and Seaborn, the application features interactive sidebar controls, dynamic filtering options, and real-time data processing capabilities. The dashboard serves as a valuable tool for environmental researchers, policymakers, and citizens to understand air quality patterns and make informed decisions about public health and environmental protection measures.'
                        skill='ML, Matplotlib, Seaborn, EDA, pandas, NumPy, Python, Streamlit'
                        link="https://github.com/Yashvi-Vekariya/Air-Quality-Index"
                    />                    
                
                    <ProjectCard
                        num={9}
                        title='Marketing Analytics'
                        description='Description'
                        type='Data Analysis(Jupyter)'
                        about='In this project, I analyzed business performance and customer behavior for a leading e-commerce client aiming to make data-driven decisions. Using datasets related to transactions, orders, payments, locations, customers, sellers, and products, I performed data cleansing and built detailed exploratory analysis. Key activities included tracking high-level metrics, customer acquisition and retention trends, top-performing products and categories, sales and quantity trends by time periods, customer and seller segmentation, cross-selling analysis, payment behavior insights, and customer satisfaction analysis — enabling deeper business understanding and actionable strategies.'
                        skill='Matplotlib, Seaborn, EDA, pandas, NumPy, Python'
                        link="https://github.com/Yashvi-Vekariya/Marketing-Analytics-Project"
                    />
                    <ProjectCard
                        num={10}
                        title='HR attrition Prediction'
                        description='Description'
                        type='Data Analysis with ML'
                        about='This project focuses on analyzing employee attrition data to uncover key factors affecting employee turnover and build predictive models to help organizations retain talent. Through exploratory data analysis (EDA), feature engineering, and machine learning (Random Forest Classifier with hyperparameter tuning), the project identifies critical trends related to demographics, work-life balance, departments, and total working years. Key insights are visualized to support data-driven HR strategies, achieving strong model performance with balanced precision and recall.'
                        skill='EDA, Predictive Modeling, Feature Engineering, Hyperparameter Tuning'
                        link="https://github.com/Yashvi-Vekariya/HR-attrition-Prediction"
                    />
                    <ProjectCard
                        num={11}
                        title='Customer Data Modeling'
                        description='Description'
                        type='Data Analytics'
                        about='This repository provides practical, real-world data analysis examples, addressing common industry challenges faced by data analysts. Each project showcases a different business scenario, guiding users through data cleaning, integration, exploratory analysis, and actionable insights. Key projects include Geographical Sales Analysis—focused on understanding regional sales performance—and E-commerce Customer Profiling—focused on consolidating and deduplicating customer data from multiple sources to enable deeper behavioral insights. These projects help both beginners and experienced analysts enhance their problem-solving skills through real-world applications.'
                        skill='Matplotlib, Seaborn, EDA, pandas, NumPy, Python'
                        link="https://github.com/Yashvi-Vekariya/Customer-Data-Modeling-and-Analysis"
                    />
                    <ProjectCard
                        num={12}
                        title='Sales Forecasting'
                        description='Description'
                        type='Data Analytics with ML'
                        about='This project focuses on developing a regression-based sales forecasting model using historical sales data. The goal is to predict future sales accurately, enabling businesses to make data-driven decisions for inventory management, resource allocation, and sales strategies. The solution involves preprocessing the dataset, conducting exploratory data analysis (EDA) to uncover seasonality and key sales drivers, feature engineering, and applying regression algorithms such as Linear Regression, Random Forest, XGBoost, CatBoost, and LightGBM. Model performance is evaluated using accuracy metrics, and hyperparameter tuning is performed to optimize results.'
                        skill='EDA, Predictive Modeling, Feature Engineering, Hyperparameter Tuning'
                        link="https://github.com/Yashvi-Vekariya/Data-Analysis-With-Python/tree/main/Sales-Forcasting-And-Data-Analysis"
                    />

                    {/* sql projects */}

                    <ProjectCard
                        num={13}
                        title='SQL Gold product analytics'
                        description='Description'
                        type='SQL'
                        about='A comprehensive collection of SQL scripts for data exploration, analytics, and reporting. These scripts cover various analyses such as database exploration, measures and metrics, time-based trends, cumulative analytics, segmentation, and more. This repository contains SQL queries designed to help data analysts and BI professionals quickly explore, segment, and analyze data within a relational database. Each script focuses on a specific analytical theme and demonstrates best practices for SQL queries.'
                        skill='SQL, MySQL, Data exploration, Rnalytics, Reporting'
                        link="https://github.com/Yashvi-Vekariya/SQL-Projects/blob/main/SQL-Gold-Product-DataAnalysis"
                    />
                    <ProjectCard
                        num={14}
                        title='Healthcare Data Analysis(SQL)'
                        description='Description'
                        type='SQL'
                        about='This project explores a healthcare dataset from Kaggle, focusing on various aspects of patient demographics, medical conditions, treatments, insurance, and financial analysis. SQL queries were used to extract valuable insights that support healthcare management decisions.'
                        skill='SQL, MySQL, Data exploration, Rnalytics, Reporting'
                        link="https://github.com/Yashvi-Vekariya/SQL-Projects/tree/main/Healthcare-Data-Analysis"
                    />

                    {/* Data visualization */}

                    <ProjectCard
                        num={15}
                        title='Human Resources'
                        description='Description'
                        type='Data visualization'
                        about='TThis project focuses on predicting employee attrition and conducting in-depth analysis using machine learning and data analytics techniques. Employee turnover is a critical challenge for organizations, impacting productivity and morale. Understanding the factors contributing to churn and predicting potential departures can help companies take proactive measures to retain valuable talent.'
                        skill='EDA, Statistical Analysis, Pattern Recognition, Data Interpretation, Data Transformation, Data Wrangling'
                        link="https://github.com/Yashvi-Vekariya/Data-Visualization-With-Python/tree/main/Human-Resources-Workforce-Analysis-Tackling-Attrition-Problem"
                    />
                    <ProjectCard
                        num={16}
                        title='Product Sales Analysis'
                        description='Description'
                        type='Data visualization'
                        about='This project focuses on using data visualization techniques to gain insights from product-related data. By analyzing key metrics such as sales, pricing, inventory, and customer feedback, the goal is to identify patterns, trends, and correlations that can aid decision-making in business strategy, marketing, inventory management, and pricing optimization.'
                        skill='Matplotlib, Seaborn, EDA, pandas, NumPy, Python'
                        link="https://github.com/Yashvi-Vekariya/Data-Visualization-With-Python/tree/main/Product-Sales-Analysis"
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;