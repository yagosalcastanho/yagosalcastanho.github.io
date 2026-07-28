# Yago Castanho — Portfolio

Professional portfolio for a **Data Analyst / Data Engineer**, showcasing ETL, BI, streaming, and machine learning projects.

🌐 **Live:** [yagosalcastanho.github.io/portifolio](https://yagosalcastanho.github.io/portifolio)  
📄 **Portuguese version:** [README.md](./README.md)

## About

Data Analyst with 3 years of experience in Business Intelligence, data pipelines, and automation. Promoted to Mid-level at Linx after delivering projects for **Natura**, **Track&Field**, and **Lacoste**.

## Featured projects

| Project | Stack | Description |
|---------|-------|-------------|
| [Sales ETL Pipeline](https://github.com/yagosalcastanho/sales-etl-pipeline) | Python, Airflow, PostgreSQL, Docker | End-to-end ETL pipeline |
| [Sales Dashboard](https://github.com/yagosalcastanho/sales-dashboard) | Power BI, Python, SQL | Executive dashboard with 4 pages |
| [Kafka Log Pipeline](https://github.com/yagosalcastanho/kafka-log-pipeline) | Kafka, Python, PostgreSQL | Real-time streaming and alerts |
| [PySpark Fraud Analysis](https://github.com/yagosalcastanho/pyspark-fraud-analysis) | PySpark, Docker | Analysis of 1.29M transactions |
| [Churn Prediction](https://github.com/yagosalcastanho/churn-prediction) | scikit-learn, Python | ML model with AUC-ROC 0.84 |

## Stack

Python · SQL · Power BI · Airflow · Kafka · PySpark · Docker · AWS · PostgreSQL · Git

## Project structure

```
portifolio/
├── index.html
├── assets/css/     # Modular stylesheets
├── assets/js/      # JavaScript modules (ESM)
├── data/           # projects.json — project source
└── docs/DEPLOY.md  # Hosting guide
```

## Local development

```bash
git clone https://github.com/yagosalcastanho/portifolio.git
cd portifolio
python -m http.server 8080
```

> The site uses ES modules and `fetch` — opening `index.html` directly won't load projects. Use a local server.

## Deploy

Hosted on **GitHub Pages** with automated deployment. See [docs/DEPLOY.md](./docs/DEPLOY.md).

## License

[MIT](./LICENSE) © Yago Castanho
