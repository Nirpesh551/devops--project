# DevOps Traineeship Project - Nirpesh

This project demonstrates a Node.js application with MongoDB, Dockerized and orchestrated using Docker Compose. It includes an Nginx reverse proxy, a MongoDB backup script, CI/CD with Bitbucket Pipelines, and monitoring with Prometheus and Grafana.

## Project Structure
- `app.js`: Node.js application with MongoDB integration and Prometheus metrics.
- `Dockerfile`: Builds the Node.js app into a Docker image.
- `docker-compose.yml`: Orchestrates Node.js app, Nginx, MongoDB, Prometheus, and Grafana.
- `nginx.conf`: Configures Nginx as a reverse proxy.
- `prometheus.yml`: Configures Prometheus to scrape metrics.
- `backup-mongo.sh`: Script to back up MongoDB with timestamped filenames.
- `backups/`: Directory for MongoDB backup files.

## Prerequisites
- Docker and Docker Compose installed.
- Node.js and npm installed (for local development).
- Git installed.
- A Docker Hub account (for pulling the pre-built image).
- A Bitbucket account (for CI/CD pipeline).
- A GitHub account (for the repository).

## Setup Instructions
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Nirpesh551/devops-trainee-project.git
   cd devops-trainee-project

A short demo video is available here: [Demo Video](https://drive.google.com/file/d/1et2b7fwipdtrmI0Q7QXuIIrubfXVPoh7/view?usp=sharing)
