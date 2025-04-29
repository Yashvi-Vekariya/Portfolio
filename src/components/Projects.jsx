import React from "react";
import ProjectCard from "./ProjectCard";
import blinkit from '../assets/blinkit.png';
import swiggy from '../assets/swiggy.png'
import trade from '../assets/trade.png'
import salesp from '../assets/salesp.png'
import stockss from '../assets/stockss.png'

function Projects() {
    return (
        <div id="proj" className=" w-full pt-10 selection:bg-[#59FF45] selection:text-black">
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
                        image={swiggy}
                        title='Swiggy Analysis'
                        description='Description'
                        type='PowerBI'
                        about='This project involves analyzing and cleaning the dataset provided by Swiggy. Swiggy is a popular food delivery service in India, and the dataset includes various tables related to food items, menus, orders, order types, restaurants, and users. The goal is to clean the data, format the tables, and store the processed dataset for further analysis.'
                        skill='PowerBI, Data Analysis, Data visualization'
                        link="https://github.com/Yashvi-Vekariya/PowerBI/tree/main/Swiggy_Data_analysis_Project"
                    />
                    <ProjectCard
                        num={3}
                        image={trade}
                        title='Stock Dashboard'
                        description='Description'
                        type='PowerBI'
                        about='This Power BI dashboard provides comprehensive stock market analytics for major Indian companies including banks, IT firms, and automotive companies. The dashboard tracks historical stock prices and performance metrics across multiple years (2019-2024) with detailed daily price information.'
                        skill='PowerBI, Data Analysis, Data visualization'
                        link="https://github.com/Yashvi-Vekariya/PowerBI/tree/main/Trading%20Report"
                    />

                    {/* excel project */}

                    <ProjectCard
                        num={4}
                        image={salesp}
                        title='Sales Performance'
                        description='Description'
                        type='Excel'
                        about='I analyzed the sales performance of Other Level company, which sells digital products through various channels like its website, social media, ads, and WhatsApp. Using Microsoft Excel tools such as pivot tables, VLOOKUPs, charts, and graphs, I created a clear and visually appealing dashboard to drive effective, data-based decisions.'
                        skill='Excel, Pivot table, Data visualizations, Data Analysis'
                        link="https://github.com/Yashvi-Vekariya/Excel-Projects/tree/main/Sales-Performance-Analysis-Using-Excel-main"
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

                    {/* data analysis project */}
                
                    <ProjectCard
                        num={6}
                        title='Marketing Analytics'
                        description='Description'
                        type='Data Analysis(Jupyter)'
                        about='In this project, I analyzed business performance and customer behavior for a leading e-commerce client aiming to make data-driven decisions. Using datasets related to transactions, orders, payments, locations, customers, sellers, and products, I performed data cleansing and built detailed exploratory analysis. Key activities included tracking high-level metrics, customer acquisition and retention trends, top-performing products and categories, sales and quantity trends by time periods, customer and seller segmentation, cross-selling analysis, payment behavior insights, and customer satisfaction analysis — enabling deeper business understanding and actionable strategies.'
                        skill='Matplotlib, Seaborn, EDA, pandas, NumPy, Python'
                        link="https://github.com/Yashvi-Vekariya/Marketing-Analytics-Project"
                    />
                    <ProjectCard
                        num={7}
                        title='HR attrition Prediction'
                        description='Description'
                        type='Data Analysis with ML'
                        about='This project focuses on analyzing employee attrition data to uncover key factors affecting employee turnover and build predictive models to help organizations retain talent. Through exploratory data analysis (EDA), feature engineering, and machine learning (Random Forest Classifier with hyperparameter tuning), the project identifies critical trends related to demographics, work-life balance, departments, and total working years. Key insights are visualized to support data-driven HR strategies, achieving strong model performance with balanced precision and recall.'
                        skill='EDA, Predictive Modeling, Feature Engineering, Hyperparameter Tuning'
                        link="https://github.com/Yashvi-Vekariya/HR-attrition-Prediction"
                    />
                    <ProjectCard
                        num={8}
                        title='Customer Data Modeling'
                        description='Description'
                        type='Data Analytics'
                        about='This repository provides practical, real-world data analysis examples, addressing common industry challenges faced by data analysts. Each project showcases a different business scenario, guiding users through data cleaning, integration, exploratory analysis, and actionable insights. Key projects include Geographical Sales Analysis—focused on understanding regional sales performance—and E-commerce Customer Profiling—focused on consolidating and deduplicating customer data from multiple sources to enable deeper behavioral insights. These projects help both beginners and experienced analysts enhance their problem-solving skills through real-world applications.'
                        skill='Matplotlib, Seaborn, EDA, pandas, NumPy, Python'
                        link="https://github.com/Yashvi-Vekariya/Customer-Data-Modeling-and-Analysis"
                    />
                    <ProjectCard
                        num={9}
                        title='Sales Forecasting'
                        description='Description'
                        type='Data Analytics with ML'
                        about='This project focuses on developing a regression-based sales forecasting model using historical sales data. The goal is to predict future sales accurately, enabling businesses to make data-driven decisions for inventory management, resource allocation, and sales strategies. The solution involves preprocessing the dataset, conducting exploratory data analysis (EDA) to uncover seasonality and key sales drivers, feature engineering, and applying regression algorithms such as Linear Regression, Random Forest, XGBoost, CatBoost, and LightGBM. Model performance is evaluated using accuracy metrics, and hyperparameter tuning is performed to optimize results.'
                        skill='EDA, Predictive Modeling, Feature Engineering, Hyperparameter Tuning'
                        link="https://github.com/Yashvi-Vekariya/Data-Analysis-With-Python/tree/main/Sales-Forcasting-And-Data-Analysis"
                    />

                    {/* sql projects */}

                    <ProjectCard
                        num={10}
                        title='SQL Gold product analytics'
                        description='Description'
                        type='SQL'
                        about='A comprehensive collection of SQL scripts for data exploration, analytics, and reporting. These scripts cover various analyses such as database exploration, measures and metrics, time-based trends, cumulative analytics, segmentation, and more. This repository contains SQL queries designed to help data analysts and BI professionals quickly explore, segment, and analyze data within a relational database. Each script focuses on a specific analytical theme and demonstrates best practices for SQL queries.'
                        skill='SQL, MySQL, Data exploration, Rnalytics, Reporting'
                        link="https://github.com/Yashvi-Vekariya/SQL-Projects/blob/main/SQL-Gold-Product-DataAnalysis"
                    />
                    <ProjectCard
                        num={11}
                        title='Healthcare Data Analysis(SQL)'
                        description='Description'
                        type='SQL'
                        about='This project explores a healthcare dataset from Kaggle, focusing on various aspects of patient demographics, medical conditions, treatments, insurance, and financial analysis. SQL queries were used to extract valuable insights that support healthcare management decisions.'
                        skill='SQL, MySQL, Data exploration, Rnalytics, Reporting'
                        link="https://github.com/Yashvi-Vekariya/SQL-Projects/tree/main/Healthcare-Data-Analysis"
                    />

                    {/* Data visualization */}

                    <ProjectCard
                        num={12}
                        title='Human Resources'
                        description='Description'
                        type='Data visualization'
                        about='TThis project focuses on predicting employee attrition and conducting in-depth analysis using machine learning and data analytics techniques. Employee turnover is a critical challenge for organizations, impacting productivity and morale. Understanding the factors contributing to churn and predicting potential departures can help companies take proactive measures to retain valuable talent.'
                        skill='EDA, Statistical Analysis, Pattern Recognition, Data Interpretation, Data Transformation, Data Wrangling'
                        link="https://github.com/Yashvi-Vekariya/Data-Visualization-With-Python/tree/main/Human-Resources-Workforce-Analysis-Tackling-Attrition-Problem"
                    />
                    <ProjectCard
                        num={13}
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
