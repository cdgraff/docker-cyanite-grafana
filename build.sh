#!/bin/bash
echo "====================================="
echo "=        BUILDING CASSANDRA         ="
echo "====================================="
cd cassandra
docker build --tag="wmconsulting/cassandra:0.1.0" .
sleep 3
docker run -d --name="cass01" wmconsulting/cassandra:0.1.0
sleep 10
echo "====================================="
echo "=      BUILDING ELASTICSEARCH       ="
echo "====================================="
cd ../elasticsearch
docker build --tag="wmconsulting/elasticsearch:0.1.0" .
sleep 3
docker run -d -p 9200:9200 -p 9300:9300 --name='es01' wmconsulting/elasticsearch:0.1.0
sleep 10
echo "====================================="
echo "=         BUILDING CYANITE          ="
echo "====================================="
cd ../cyanite
docker build --tag="wmconsulting/cyanite:0.1.0" .
sleep 3
docker run -d -p 2003:2003 --name="cyanite01" --link cass01:cass01 wmconsulting/cyanite:0.1.0 
sleep 10
echo "====================================="
echo "=         BUILDING GRAPHITE         ="
echo "====================================="
cd ../graphite_api
docker build --tag="wmconsulting/graphite_api:0.1.0" .
sleep 3
docker run -d -p 8000:8000 -p 80:80 --link cyanite01:cyanite01 --name "graphite01" wmconsulting/graphite_api:0.1.0 
sleep 10
echo "====================================="
echo "=              ALL DONE             ="
echo "====================================="
