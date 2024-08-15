# Site Crawler Api

This site crawling project to crawl news from different nepali news websites build using scrapy, temporal and supabase.

# Prerequities

- docker 24.0.7
- docker-compose v2.29.1

# Installation

Clone the repository:

   https://github.com/sujit-dhakal/supabase-temporal-scrapy.git

# Run

Run the project using docker-compose

    cd supabase-temporal-scrapy
    docker-compose up

# Access Temporal Web UI

To monitor workflow executions, access the Temporal Web UI:

    localhost:8080

# Access Supabase

    localhost:8000

# Invoking Function

    localhost:8000/functions/v1/function-start-workflow
