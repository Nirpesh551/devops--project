#!/bin/bash

# Set variables
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_DIR="./backups"
DB_NAME="myapp"
CONTAINER_NAME="mongo"

# Create backups directory if it doesn’t exist
mkdir -p $BACKUP_DIR

# Run mongodump to back up the database
docker exec $CONTAINER_NAME mongodump --db $DB_NAME --archive > $BACKUP_DIR/backup_$TIMESTAMP.archive

echo "Backup completed: $BACKUP_DIR/backup_$TIMESTAMP.archive"
