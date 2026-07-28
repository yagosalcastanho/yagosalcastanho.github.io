# Yago Castanho — Portfólio

Portfólio profissional de **Analista / Engenheiro de Dados**, com projetos de ETL, BI, streaming e machine learning.

🌐 **Live:** [yagosalcastanho.github.io/portifolio](https://yagosalcastanho.github.io/portifolio)  
📄 **English version:** [README.en.md](./README.en.md)

## Sobre

Analista de Dados com 3 anos de experiência em Business Intelligence, pipelines e automação. Promovido a Pleno na Linx após entregas para **Natura**, **Track&Field** e **Lacoste**.

## Projetos em destaque

| Projeto | Stack | Descrição |
|---------|-------|-----------|
| [Sales ETL Pipeline](https://github.com/yagosalcastanho/sales-etl-pipeline) | Python, Airflow, PostgreSQL, Docker | Pipeline ETL end-to-end |
| [Sales Dashboard](https://github.com/yagosalcastanho/sales-dashboard) | Power BI, Python, SQL | Dashboard executivo com 4 páginas |
| [Kafka Log Pipeline](https://github.com/yagosalcastanho/kafka-log-pipeline) | Kafka, Python, PostgreSQL | Streaming e alertas em tempo real |
| [PySpark Fraud Analysis](https://github.com/yagosalcastanho/pyspark-fraud-analysis) | PySpark, Docker | Análise de 1,29M transações |
| [Churn Prediction](https://github.com/yagosalcastanho/churn-prediction) | scikit-learn, Python | Modelo ML com AUC-ROC 0.84 |

## Stack

Python · SQL · Power BI · Airflow · Kafka · PySpark · Docker · AWS · PostgreSQL · Git

## Estrutura do projeto

```
portifolio/
├── index.html
├── assets/css/     # Estilos modulares
├── assets/js/      # Módulos JavaScript (ESM)
├── data/           # projects.json — fonte dos projetos
└── docs/DEPLOY.md  # Guia de hospedagem
```

## Desenvolvimento local

```bash
git clone https://github.com/yagosalcastanho/portifolio.git
cd portifolio
python -m http.server 8080
```

> O site usa módulos ES e `fetch` — abrir `index.html` direto no navegador não carrega os projetos. Use um servidor local.

## Deploy

Hospedado via **GitHub Pages** com deploy automático. Veja [docs/DEPLOY.md](./docs/DEPLOY.md).

## Licença

[MIT](./LICENSE) © Yago Castanho
