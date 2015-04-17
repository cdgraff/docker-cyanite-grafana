FROM ubuntu:14.04
MAINTAINER Alejandro Ferrari <support@wmconsulting.info>

# Install tools
RUN sudo apt-get -y install curl software-properties-common

# Cassandra Repo
RUN echo "deb http://debian.datastax.com/community stable main" | sudo tee -a /etc/apt/sources.list.d/cassandra.sources.list
RUN curl -L http://debian.datastax.com/debian/repo_key | sudo apt-key add -

# Install JVM7
RUN add-apt-repository ppa:webupd8team/java
RUN apt-get -y update
RUN echo oracle-java7-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections
RUN apt-get -y install oracle-java7-installer

# Install cassandra
RUN apt-get -y install dsc20=2.0.14-1 cassandra=2.0.14

# Copy /opt/cyanite
COPY files/opt/cyanite/ /opt/cyanite/

# Copy /etc/cyanite.yaml
COPY files/etc/cyanite.yaml /etc/cyanite.yaml

# Expose /var/log
VOLUME ["/var/log"]

# Ports 2003 and 8080
EXPOSE 2003 8080

# Run
CMD [ "/opt/cyanite/cyanite.sh" ]
