FROM centos:centos6
MAINTAINER Alejandro Ferrari <support@wmconsulting.info>

# Update the stuff
# RUN yum update -y --quiet 
# Install EPEL
RUN rpm -Uvh --quiet --force http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm

# Install Support Programs
RUN yum install -y --quiet wget git tar

# Install httpd
RUN yum install -y --quiet httpd mod_wsgi cairo python-pip 

# Install development tools
RUN yum install -y --quiet gcc cairo-devel python-devel libffi-devel

# Install graphite-api and cyanite
RUN pip install --quiet graphite-api cyanite

# Expose /var/log
VOLUME [ "/var/log" ]
VOLUME [ "/var/www/html" ]

# graphite-api config
COPY files/etc/graphite-api.yaml /etc/graphite-api.yaml

# Graphite http config
COPY files/etc/httpd/conf.d/graphite.conf /etc/httpd/conf.d/graphite.conf

# Graphite wsgi script
COPY files/var/www/wsgi-scripts/graphite-api.wsgi /var/www/wsgi-scripts/graphite-api.wsgi

# Grafana
COPY files/var/www/html /var/www/html

# Create graphite directory
RUN mkdir -p /srv/graphite
RUN chown apache:apache /srv/graphite

# Expose ports
EXPOSE 8000 80

# Run apache
ENTRYPOINT ["/usr/sbin/httpd"]
CMD ["-D", "FOREGROUND"]

