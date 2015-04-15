Prerequisites
=============
- Running wmconsulting/cyanite:0.1.0 named cyanite01
- Running wmconsulting/elasticsearch:0.1.0 named es01

Building
========
    sudo docker build --tag="wmconsulting/graphite_api:0.1.0" .

Running
=======
    sudo docker run -d -p 8000:8000 -p 80:80 --link cyanite01:cyanite01 --name "graphite01" wmconsulting/graphite_api:0.1.0 

Provides
========
- Grafana interface @ http://localhost
